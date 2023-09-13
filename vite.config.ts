import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginEslint from 'vite-plugin-eslint'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const plugins = [
    vue(),
    vitePluginEslint(),
    Components({
      resolvers: [VantResolver()]
    })
  ]
  const isStats = mode === 'stats'
  const SERVER_API = loadEnv(mode, process.cwd()).VITE_API_BASE_URL
  // 性能检查
  if (isStats) {
    plugins.push(
      visualizer({
        open: true
      })
    )
  }

  return defineConfig({
    server: {
      open: '/?pathchannel=test',
      proxy: {
        '/mobile': {
          target: SERVER_API,
          changeOrigin: true
        }
      },
      hmr: {
        overlay: false
      }
    },
    plugins,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 750, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            landscape: false // 是否处理横屏情况
          })
        ]
      },
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/style/config.less')}";`
          },
          javascriptEnabled: true
        }
      }
    }
  })
}
