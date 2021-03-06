import qs from 'qs'

export function getStrapiURL(path = '') {
  return `${
    process.env.NODE_ENV === 'production'
      ? 'https://fawaz-cms.herokuapp.com'
      : 'http://localhost:1337'
  }${path}`
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }

  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`,
  )}`

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occurred please try again`)
  }
  const data = await response.json()
  return data
}

export function getStrapiMedia(media) {
  const {url} = media.data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return imageUrl
}
