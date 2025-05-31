const IMAGE_SIZES = {
  backdropSizes: ["w300", "w780", "w1280", "original"],
  posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
}

const imageSizeForType = {
  backdrop: IMAGE_SIZES.backdropSizes[2],
  poster: IMAGE_SIZES.posterSizes[4],
}

export const getFullImageUrl = (
  url?: string,
  type: keyof typeof imageSizeForType = "poster",
) => {
  if (!url) return ""

  const baseUrl = `https://image.tmdb.org/t/p/${imageSizeForType[type]}/`
  if (url.startsWith("http")) return url // If the URL is already complete
  return `${baseUrl}${url}`
}
