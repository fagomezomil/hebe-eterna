/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  }
}
module.exports = {
  webpack: (config, { isServer }) => {
    // Agregar excepción para el módulo "fs" en el servidor
    if (isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}
module.exports = nextConfig