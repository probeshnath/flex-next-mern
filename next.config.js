/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        // appDir: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    images:{
        domains: ['cdni.iconscout.com',"images.businessnewsdaily.com","occ-0-3933-116.1.nflxso.net"],
    }
}

module.exports = nextConfig
