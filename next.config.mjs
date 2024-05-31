import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin("./i18n.ts");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ['api.trade4go.com','cdn-new.tridge.com','t4.ftcdn.net','bizweb.dktcdn.net','images.tridge.com','0c6c-27-72-146-36.ngrok-free.app', 'intphcm.com', 'www.vietnamworks.com', '64.176.220.144','media-cdn-v2.laodong.vn','localhost', 'cdn.tridge.com', 'daed-2001-19f0-0-4566-5400-4ff-feae-9232.ngrok-free.app'],
  },
  output: 'standalone'
};

export default withNextIntl(nextConfig);