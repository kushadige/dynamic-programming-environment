import * as esbuild from "esbuild-wasm";

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      // Handle root entry file "index.js"
      build.onResolve(
        { filter: /(^index\.js$)/ },
        (args: esbuild.OnResolveArgs) => {
          return { path: args.path, namespace: "a" };
        }
      );

      // Handle relative paths in a module
      build.onResolve(
        { filter: /^\.\.?\/\w+/ },
        (args: esbuild.OnResolveArgs) => {
          return {
            path: new URL(
              args.path,
              "https://www.unpkg.com" + args.resolveDir + "/"
            ).href,
            namespace: "a",
          };
        }
      );

      // Handle exact main file of a module
      build.onResolve({ filter: /.*/ }, (args: esbuild.OnResolveArgs) => {
        return {
          path: `https://www.unpkg.com/${args.path}`,
          namespace: "a",
        };
      });
    },
  };
};
