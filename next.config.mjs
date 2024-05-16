import { fileURLToPath } from 'url';
import path from 'path'; 
import { dirname } from 'path';

/** @type {import('next').NextConfig} */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const nextConfig = {
webpack:(config,{isServer})=>{
  if(!isServer){
    config.module.rules.push({
      test:/\.tsx?$/,
     // loader: 'vite-plugin-react/dist/entry'
    });
  }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, 'components'),
      '@/styles': path.resolve(__dirname, 'styles'),
       '@/app': path.resolve(__dirname, 'app'),
    };

  return config;
}

};

export default nextConfig;
