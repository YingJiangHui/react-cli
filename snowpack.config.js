// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
const path = require('path')

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* src被编译成 "/dist"
    *  public 被编译成 "/" static: true不经过编译，直接从磁盘复制到浏览器
    * */
    src: {url: '/dist'},
    public: {url: '/', static: true},
  },
  plugins: [
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-webpack',
      {
        htmlMinifierOptions: true, // disabled entirely,
        extendConfig: (config) => {
          // Default Webpack Config
          // config.plugins.push(/* ... */);
          return config;
        },
      },
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eslint src --ext .js,.jsx,.ts,.tsx',
        // Optional: Use npm package "eslint-watch" to run on every file change
        watch: 'esw -w --clear src --ext .js,.jsx,.ts,.tsx',
      },
    ],

  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
    bundle: true,
    minify: true,
    treeshake:true,
    splitting: true,
    manifest: true,
    target: 'es2017',
  },
  alias: {
    "src": path.resolve(__dirname, './src/'),
  }
};
