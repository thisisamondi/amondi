export const defaultImage = (imageUrlBuilder, options) => {
  const height = Math.round(
    options.width / options.originalImageDimensions.aspectRatio
  )

  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 800)
    )
    .height(height)
    .fit("crop")
    .auto("format")
}

export const squaredImage = (imageUrlBuilder, options) => {
  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 800)
    )
    .height(
      options.width || Math.min(options.originalImageDimensions.width, 800)
    )
    .fit("crop")
    .auto("format")
}

export const mediumImage = (imageUrlBuilder, options) => {
  const heigth = Math.round(options.width / 1.36)

  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 800)
    )
    .height(heigth)
    .fit("crop")
    .auto("format")
}

export const verticalImage = (imageUrlBuilder, options) => {
  const heigth = Math.round(options.width * 1.36)
  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 800)
    )
    .height(heigth)
    .fit("crop")
    .auto("format")
}

export const horizontalImage = (imageUrlBuilder, options) => {
  const heigth = Math.round(options.width / 2.2)

  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 1920)
    )
    .height(heigth)
    .fit("crop")
    .auto("format")
}
