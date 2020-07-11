# rect-cover ([demo](https://transitive-bullshit.github.io/rect-cover/))

> Computes a transform between two rectangles the same way as `background-size: cover`.

[![NPM](https://img.shields.io/npm/v/rect-cover.svg)](https://www.npmjs.com/package/rect-cover) [![Build Status](https://travis-ci.com/transitive-bullshit/rect-cover.svg?branch=master)](https://travis-ci.com/transitive-bullshit/rect-cover) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

Simulating `background-size: cover` is very useful for canvas animations, drawing sprites in games, and rendering videos. This module is used as part of our video rendering pipeline at [Automagical](https://automagical.ai/).

## Install

```bash
npm install --save rect-cover
```

## Usage

Check out the [demo](https://transitive-bullshit.github.io/rect-cover/) to understand what this module does.

```js
const rectCover = require('rect-cover')

const {
  scale,
  translate
} = rectCover({ width: 500, height: 500 }, { width: 1280, height: 720 })

// CSS transforms apply the rightmost operation first.
// Note that this assumes a transform-origin of `top left`.
const transform = `translate(${translate.x}px, ${translate.y}px) scale(${scale})`
```

## API

### rectCover(viewport, image)

Returns a 2D affine transform defined by `{ scale: Number, translate: { x: Number, y: Number } }` such that the given `image` will fully cover the `viewport` while maintaining its original aspect ratio.

Note that you'll want to apply the `scale` transform first followed by the `translate`.

#### viewport

Type: `{ width: Number, height: Number }`

The viewport you want to draw the image into.

#### image

Type: `{ width: Number, height: Number }`

The dimensions of the image to be drawn.

## Related

- [rect-contain](https://github.com/transitive-bullshit/rect-contain) is this module's sister, implementing `background-size: contain`.
- [rect-crop](https://github.com/gre/rect-crop) if you need to mimic rect-cover with a `zoom` ratio and `center` point (eg, for [kenburns effects](https://github.com/gre/kenburns))
- [css background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
