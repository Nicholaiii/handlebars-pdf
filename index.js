'use strict'

let Handlebars = require('handlebars'),
    htmlpdf = require('html-pdf'),
    defaults = require('lodash.defaults'),
    defaultoptions = {
        "format": "A4",
        "orientation": "portrait",
        "border": "10mm"
    }

module.exports = {}
module.exports.create = (document) => {
    /* Set default layout if none was supplied */
    var options = defaults(document.options, defaultoptions)

    /* Compile handlebars template */
    /* Create promise and return it! */
    return new Promise((resolve, reject) => {

        /* Check options have been supplied correctly.
         * template_html and template_data,
         * and optional layout_settings is Required
         */
        if (!document || !document.path || !document.template || !document.context) {
            reject(new Error("Some, or all, options are missing."))
        }

        var html = Handlebars.compile(document.template)(document.context)

        /* Create PDF and resolve/reject promise */
        htmlpdf.create(html, options)
            .toFile(document.path, (err, res) => {
                if (!err)
                    resolve(res)
                else
                    reject(err)
            })
    })
}
