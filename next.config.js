const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    images: {
        domains: ['dummyimage.com']
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/welcome',
                permanent: true,
            },
        ]
    },
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        register: 'true',
        skipWaiting: 'true',
        runtimeCaching,
    }
})
