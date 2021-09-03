import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  theme: {
    fontFamily: {
      display: ['"Source Sans Pro"'],
      body: ['"Source Sans Pro"'],
    },
    extend: {
      colors: {
        color1: {
          DEFAULT: '#336699',
          '50': '#C6D9EC',
          '100': '#B3CCE6',
          '200': '#8CB2D9',
          '300': '#6699CC',
          '400': '#407FBF',
          '500': '#336699',
          '600': '#284F77',
          '700': '#1C3854',
          '800': '#112132',
          '900': '#050A0F',
        },
        color2: {
          DEFAULT: '#2F4858',
          '50': '#A0BBCC',
          '100': '#90AFC3',
          '200': '#6E97B2',
          '300': '#537E9A',
          '400': '#416379',
          '500': '#2F4858',
          '600': '#243844',
          '700': '#1A2730',
          '800': '#0F171C',
          '900': '#040708',
        },
        color3: {
          DEFAULT: '#86BBD8',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FAFCFD',
          '300': '#D3E6F1',
          '400': '#ADD1E4',
          '500': '#86BBD8',
          '600': '#5FA5CC',
          '700': '#3C8FBC',
          '800': '#307195',
          '900': '#24546E',
        },
        success: {
          DEFAULT: '#9EE493',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#E7F8E5',
          '400': '#C3EEBC',
          '500': '#9EE493',
          '600': '#79DA6A',
          '700': '#55D041',
          '800': '#3EB22C',
          '900': '#308922',
        },
      },
    },
  },
  plugins: [formsPlugin],
})
