import { spawn } from "node:child_process";
import { createRequire } from "node:module";

// Accept the supervised preview's Vite-style flags while retaining real Next.js.
const require = createRequire(import.meta.url);
const args = process.argv.slice(2).filter(arg => arg !== "--strictPort").map(arg => arg === "--host" ? "--hostname" : arg);
if (!args.includes("--hostname")) args.push("--hostname", "0.0.0.0");
if (!args.includes("--port") && !args.includes("-p")) args.push("--port", "4173");
const child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "dev", ...args], { stdio: "inherit", env: process.env });
child.on("exit", code => process.exit(code ?? 1));
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => child.kill(signal));
