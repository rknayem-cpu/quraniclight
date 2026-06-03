/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // এটি করলে প্রোডাকশন বিল্ডের সময় ESLint এররগুলো চেক করবে না
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig