/** @type {import('next').NextConfig} */
const nextConfig = {
webpack:(config,{isServer})=>{
  if(!isServer){
    config.module.rules.push({
      test:/\.tsx?$/,
      loader: 'vite-plugin-react/dist/entry'
    });
  }
  return config;
}

};

export default nextConfig;
