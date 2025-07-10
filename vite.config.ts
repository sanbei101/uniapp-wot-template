import { defineConfig } from "vite";
import Uni from "@dcloudio/vite-plugin-uni";
import { WotResolver } from "@uni-helper/vite-plugin-uni-components/resolvers";
import UniHelperComponents from "@uni-helper/vite-plugin-uni-components";
import UniPages from "@uni-helper/vite-plugin-uni-pages";
export default async () => {
  const UnoCSS = (await import("unocss/vite")).default;

  return defineConfig({
    plugins: [
      UniPages(),
      // https://github.com/uni-helper/vite-plugin-uni-components
      UniHelperComponents({
        resolvers: [WotResolver()],
      }),
      Uni(),
      UnoCSS(),
    ],
  });
};
