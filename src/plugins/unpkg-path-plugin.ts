import * as esbuild from "esbuild-wasm";

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: esbuild.OnResolveArgs) => {
        console.log("onResole", args);
        if (args.path === "index.js") {
          return { path: args.path, namespace: "a" };
        }

        if (args.path.includes("./")) {
          return {
            path: new URL(
              args.path,
              "https://www.unpkg.com" + args.resolveDir + "/"
            ).href,
            namespace: "a",
          };
        }

        return {
          path: `https://www.unpkg.com/${args.path}`,
          namespace: "a",
        };
      });

      build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: `
              import { useState } from 'react';
              console.log(useState);
            `,
          };
        }

        const response = await fetch(args.path);
        const data = await response.text();
        return {
          loader: "jsx",
          contents: data,
          resolveDir: new URL("./", response.url).pathname,
        };
      });
    },
  };
};
