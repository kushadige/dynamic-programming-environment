import * as esbuild from "esbuild-wasm";
import { useState, useEffect } from "react";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const startService = async () => {
    // Avoid calling initialize() more than once
    try {
      esbuild.build({});
    } catch (error) {
      if (error instanceof Error && error.message.includes("initialize")) {
        await esbuild.initialize({
          worker: true,
          wasmURL: "node_modules/esbuild-wasm/esbuild.wasm",
        });
      } else {
        throw error;
      }
    }
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    const result = await esbuild.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        global: "window",
      },
    });

    setCode(result.outputFiles[0].text);
  };

  return (
    <div>
      <div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <div>
          <button onClick={onClick} type="submit">
            Submit
          </button>
        </div>
        <pre>{code}</pre>
      </div>
    </div>
  );
};

export default App;
