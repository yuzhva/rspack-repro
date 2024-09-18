import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    sourceMap: {
      js: 'source-map'
    },
    distPath: {
      root: "./rsbuild-dist",
    },
  },
});
