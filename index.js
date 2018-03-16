'use strict'

module.exports = (viewport, image) => {
  const { width: w, height: h } = viewport
  const { width: W, height: H } = image

  const R = W / H

  const W0 = h * R
  const H0 = w / R

  if (H0 > h) {
    // constrain width; H0 is larger axis
    return {
      scale: [ w, H0 ],
      crop: [ 0, ((H0 - h) / 2), w, h ]
    }
  } else {
    // constrain height; W0 is larger axis
    return {
      scale: [ W0, h ],
      crop: [ ((W0 - w) / 2), 0, w, h ]
    }
  }
}
