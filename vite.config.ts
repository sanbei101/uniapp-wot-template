import { defineConfig } from "vite";
import Uni from "@dcloudio/vite-plugin-uni";
import { WotResolver } from "@uni-helper/vite-plugin-uni-components/resolvers";
import UniHelperComponents from "@uni-helper/vite-plugin-uni-components";
export default async () => {
  const UnoCSS = (await import("unocss/vite")).default;

  return defineConfig({
    plugins: [
      UniHelperComponents({
        resolvers: [WotResolver()],
      }),
      Uni(),
      UnoCSS(),
    ],
  });
};
