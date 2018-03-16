# rect-cover

> Computes a transform between two rectangles the same way as `background-size: cover`.

[![NPM](https://img.shields.io/npm/v/rect-cover.svg)](https://www.npmjs.com/package/rect-cover) [![Build Status](https://travis-ci.org/transitive-bullshit/rect-cover.svg?branch=master)](https://travis-ci.org/transitive-bullshit/rect-cover) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rect-cover
```

## Usage

```js
const rectCover = require('rect-cover')

const {
  scale,
  crop
} = rectCover({
  width: 500,
  height: 500
}, {
  width: 1280,
  height: 720
})
```

## API

### rectCover(viewport, image)

Returns a transform defined by `{ scale: [ width, height ], crop: [ x, y, width, height ] }` such that the given `image` will fully cover the `viewport` while maintaining its original aspect ratio.

#### viewport

Type: `{ width: Number, height: Number }`

#### image

Type: `{ width: Number, height: Number }`

## Related

- [rect-contain](https://github.com/transitive-bullshit/rect-contain)
- [background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
