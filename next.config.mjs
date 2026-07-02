/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  output: "export", // important for out folder

  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;