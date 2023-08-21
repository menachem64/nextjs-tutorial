/** @type {import('next').NextConfig} */
const nextConfig = {
    node: {
        net: 'empty'
      },
    experimental: {
        appDir: true,
    },
    images:{
        domains: ['fakeimg.pl']
    }
}

module.exports = nextConfig
