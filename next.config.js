/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    STRIPE_SECRET_KEY:process.env.STRIPE_SECRET_KEY,
    NEXT_STRIPE_PUBLISH_KEY:process.env.NEXT_STRIPE_PUBLISH_KEY,
  },
 
}

module.exports = nextConfig
