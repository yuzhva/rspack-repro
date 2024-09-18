# rspack-repro

# Investigating Source Map issue:

To see the results of Source MAp investigation just open:
For v1.0.5:
- webpack: [./webpack-dist-v105/webpack-dist_main.js-Source_Map_Explorer.html](https://htmlpreview.github.io/?https://github.com/yuzhva/rspack-repro/blob/main/webpack-dist-v105/webpack-dist_main.js-Source_Map_Explorer.html)
- rspack: [./rspack-dist-v105/rspack-dist-v105_main.js-Source_Map_Explorer.html](https://htmlpreview.github.io/?https://github.com/yuzhva/rspack-repro/blob/main/rspack-dist-v105/rspack-dist-v105_main.js-Source_Map_Explorer.html)
- rsbuil: [./rsbuild-dist-v105/rsbuild-dist-v105_static_js_index.1a9c415f.js-Source_Map_Explorer.html](https://htmlpreview.github.io/?https://github.com/yuzhva/rspack-repro/blob/main/rsbuild-dist-v105/rsbuild-dist-v105_static_js_index.1a9c415f.js-Source_Map_Explorer.html)

To run the source map check please
For v1.0.5:
- webpack: `npx source-map-explorer --no-border-checks webpack-dist-v105/main.js*`
- rspack: `npx source-map-explorer --no-border-checks rspack-dist-v105/main.js*`
- rsbuil: `npx source-map-explorer --no-border-checks rsbuild-dist-v105/static/js/index.1a9c415f.js*`

- [Rspack website](https://www.rspack.dev/)
- [Rspack repo](https://github.com/web-infra-dev/rspack)

A GitHub template for creating a Rspack minimal reproducible example.

Webpack is included for comparing the outputs.

## versions

```
    "@rspack/cli": "nightly",
    "webpack-cli": "^5.0.1",
    "webpack": "^5.79.0",
```

## Usages

`pnpm run build` would both run Webpack and Rspack with config `./config.mjs`

- Webpack will emits output in `./webpack-dist`
- Rspack will emits output in `./rspack-dist`

`./webpack-dist` and `./rspack-dist` are purposely not added to `.gitignore`.
It is recommended to commit these files so we quickly compare the outputs.
