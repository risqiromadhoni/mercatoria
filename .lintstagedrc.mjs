export default {
  "./**/*.ts": (files) => [
    "tsc --noEmit",
    `biome check --apply ${files.join(" ")}`,
  ],
  "./**/*.{tsx,js,json}": (files) => `biome check --apply ${files.join(" ")}`,
}