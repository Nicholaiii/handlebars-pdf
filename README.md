# handlebars-pdf
Render PDF from handlebars. Writes to a file and returns a promise.

## Example usage:
```js
'use strict'

let PDF = require('handlebars-pdf')
let document = {
        template: '<h1>{{msg}}</h1>'+
        '<p style="color:red">Red text</p>'+
        '<img src="https://archive.org/services/img/image" />',
        context: {
            msg: 'Hello world'
        },
        path: "./test-"+Math.random()+".pdf"
    }

pdf.create(document)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })

```

## Future
Support for headers and footers, also returning buffers/streams instead of writing a file.

## Contributing
I will review any PR sent, so please go ahead and submit one, if you feel like it!

## Alternatives
[handlebars-to-pdf](https://www.npmjs.com/package/handlebars-to-pdf) Takes callbacks and returns buffers.

This module is inspired by handlebars-to-pdf, but fixes what I recognise as some shortcomings.

## License
The MIT License (MIT)
Copyright (c) 2016 Nicholai Nissen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
