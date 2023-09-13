import * as esbuild from "esbuild-wasm";
import { useState, useEffect } from "react";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const startService = async () => {
    await esbuild.initialize({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    const result = await esbuild.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()],
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
