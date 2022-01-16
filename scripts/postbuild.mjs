/* Clean up out dir */

import { readdir, stat } from "node:fs/promises";
import rimraf from "rimraf";

const dirs = await readdir("./out");
const rimrafp = (path) => new Promise((resolve, reject) => {
    rimraf(path, (err) => err ? reject(err) : resolve());
});

for (const dirname of dirs) {
    const dir = await stat(`./out/${dirname}`, { throwIfNoEntry: false });
    if (!dir.isDirectory()) continue;
    await rimrafp(`./out/${dirname}`);
}