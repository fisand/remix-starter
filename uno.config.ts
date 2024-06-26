import { defineConfig, presetIcons, presetUno, presetWind, UserConfig } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

const config = {
  presets: [
    presetUno(),
    presetWind(),
    presetIcons(),
    presetAnimations(),
    presetShadcn({
      color: 'violet',
    }),
  ],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [],
  theme: {},
}

export default defineConfig(config) as UserConfig<(typeof config)['theme']>
