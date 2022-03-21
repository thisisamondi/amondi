import { urlFor } from '../../utils/client'
import { getImageDimensions } from '@sanity/asset-utils'
import {
  SanityImageObject,
  SanityImageSource,
} from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import {
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
} from 'sanity-codegen'
import { UseNextSanityImageDimensions } from '../../types/next-figure'
import { Figure, FlexibleImage } from '../../types/sanity-types'

type IImage = {
  _type: 'image' | 'figure' | 'flexibleImage'
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
  customRatio?: FlexibleImage['customRatio']
}

interface INextFigure {
  image: FlexibleImage | Figure
  width?: number
  height?: number
  className?: string
  sizes?: string
  captionClassName?: string
}

export default function NextFigure({
  image,
  width,
  height,
  className,
  sizes,
  captionClassName,
}: INextFigure) {
  if (!image || !image?.asset) return null
  const { caption, alt } = image
  return (
    <>
      <figure className={`${className}`}>
        <NextImage
          alt={alt}
          image={image}
          sizes={sizes}
          width={width}
          height={height}
        />
        {caption && (
          <figcaption
            className={`border-gray border-b py-1 text-sm ${
              captionClassName && captionClassName
            }`}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    </>
  )
}

interface IINextImage {
  image: IImage | any
  width?: number
  height?: number
  alt?: string
  sizes?: string
}

export function NextImage({
  image,
  width,
  height,
  alt,
  sizes = '(max-width: 500px) 50vw, 500px',
}: IINextImage) {
  const base = getImageDimensions(image)

  const realAlt = image?.alt ?? alt ?? ''

  const cropped = getCroppedDimensions(image, base)
  if ('customRatio' in image && image.customRatio !== '0') {
    const { width: cWidth, height: cHeight } = getRatioDimension(
      image.customRatio
    )
    const aspect = cHeight / cWidth
    const blurHeight = Math.round(64 * aspect)
    return (
      <Image
        alt={realAlt}
        placeholder="blur"
        blurDataURL={
          urlFor(image).width(64).height(blurHeight).quality(30).blur(50).url()!
        }
        sizes={sizes}
        layout="responsive"
        src={urlFor(image).width(cWidth).height(cHeight).url()!}
        width={cWidth}
        height={cHeight}
      />
    )
  }

  if (width && height) {
    const aspect = height / width
    const blurHeight = Math.round(64 * aspect)
    return (
      <Image
        alt={realAlt}
        placeholder="blur"
        blurDataURL={
          urlFor(image).width(64).height(blurHeight).quality(30).blur(50).url()!
        }
        sizes={sizes}
        layout="responsive"
        src={urlFor(image).width(width).height(height).url()!}
        width={width}
        height={height}
      />
    )
  }

  // Auto format
  return (
    <Image
      alt={realAlt}
      placeholder="blur"
      sizes={sizes}
      blurDataURL={urlFor(image).width(64).quality(30).blur(50).url()!}
      layout="responsive"
      src={urlFor(image).width(cropped.width).height(cropped.height).url()!}
      width={cropped.width}
      height={cropped.height}
    />
  )
}

export function getRatioDimension(customRatio: FlexibleImage['customRatio']) {
  switch (customRatio) {
    case '1':
      return { width: 1000, height: 1000 }
    case 'medium':
      return { width: 1500, height: 1100 }
    case 'horizontal':
      return { width: 2600, height: 1000 }
    case 'vertical':
      return { width: 1100, height: 1500 }
    default:
      return { width: 1000, height: 1000 }
  }
}

export function getCroppedDimensions(
  image: SanityImageSource,
  baseDimensions: UseNextSanityImageDimensions
): UseNextSanityImageDimensions {
  const crop = (image as SanityImageObject).crop

  if (!crop) {
    return baseDimensions
  }

  const { width, height } = baseDimensions
  const croppedWidth = width * (1 - (crop.left + crop.right))
  const croppedHeight = height * (1 - (crop.top + crop.bottom))

  return {
    width: Math.floor(croppedWidth),
    height: Math.floor(croppedHeight),
    aspectRatio: croppedWidth / croppedHeight,
  }
}
