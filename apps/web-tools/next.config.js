/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^electron$/,
      }),
    );
    config.resolve.fallback = { fs: false, tls: false, net: false, dns: false };
    return config;
  },
};

module.exports = nextConfig;
