export default {
  "./apps/web/*.{ts,tsx}": (files) => [
    "tsc -p ./apps/web/tsconfig.json --noEmit",
    `biome check --write ${files.join(" ")}`,
  ],
  "./apps/api/*.ts": (files) => [
    "tsc -p ./apps/api/tsconfig.json --noEmit",
    `biome check --write ${files.join(" ")}`,
  ],
  "./**/*.{js,css}": (files) => `biome check --write ${files.join(" ")}`,
}