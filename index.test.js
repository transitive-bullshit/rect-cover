'use strict'

const { test } = require('ava')
const rectCover = require('.')

const viewports = [
  { width: 1280, height: 720 },
  { width: 200, height: 200 },
  { width: 1000, height: 1000 },
  { width: 400, height: 800 },
  { width: 1, height: 1 }
]

const images = [
  { width: 460, height: 360 },
  { width: 100, height: 200 },
  { width: 500, height: 5000 },
  { width: 400, height: 800 },
  { width: 1, height: 1 },
  { width: 2400, height: 10 }
]

viewports.forEach((viewport) => {
  images.forEach((image) => {
    const name = `viewport ${viewport.width}x${viewport.height}; image ${image.width}x${image.height}`
    test(name, async (t) => {
      const {
        scale,
        crop
      } = rectCover(viewport, image)

      t.truthy(scale[0] > 0)
      t.truthy(scale[1] > 0)
      t.truthy(scale[0] >= viewport.width)
      t.truthy(scale[1] >= viewport.height)

      t.truthy(crop[0] >= 0)
      t.truthy(crop[1] >= 0)
      t.truthy(crop[2] > 0)
      t.truthy(crop[3] > 0)

      console.log({
        viewport,
        image,
        scale,
        crop
      })
    })
  })
})
