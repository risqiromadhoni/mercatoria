export default {
  "./apps/web/*.{ts,tsx}": (files) => [
    "tsc -p ./apps/web/tsconfig.json --noEmit",
    `biome check --apply ${files.join(" ")}`,
  ],
  "./apps/api/*.ts": (files) => [
    "tsc -p ./apps/api/tsconfig.json --noEmit",
    `biome check --apply ${files.join(" ")}`,
  ],
  "./**/*.{js,json,cs}": (files) => `biome check --apply ${files.join(" ")}`,
}