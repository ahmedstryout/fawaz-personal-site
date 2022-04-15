/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['localhost', 'picsum.photos', 'fawaz-cms.herokuapp'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
