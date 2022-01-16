import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    dts: true,
    entryPoints: ["src/index.ts"],
    outDir: "out",
    format: ["esm", "cjs"],
    minify: true,
    skipNodeModulesBundle: true,
    sourcemap: true,
    target: "ES2020"
});