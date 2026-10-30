import type { KnipConfig } from "knip";

const config = {
  $schema: "https://unpkg.com/knip@5/schema.json",
  ignore: ["**/_meta.ts", "starter/**"],
  ignoreDependencies: ["gitzy", "sharp"],
} satisfies KnipConfig;

export default config;
