const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const fs = require('fs')
const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0
const now = new Date()

/**
 * Configuración de compilación de vue
 * @see https://cli.vuejs.org/config/
 */
module.exports = defineConfig({
  /**
   * @property {boolean|Array<string|RegExp>} [transpileDependencies=false] Transpilar todas las
   * dependencias podría ralentizar el proceso de compilación. Si el rendimiento de la compilación
   * es una preocupación, puede transpilar explícitamente solo algunas de las dependencias pasando
   * una matriz de nombres de paquetes o patrones de nombres a esta opción.
   *
   * @see https://cli.vuejs.org/config/#transpiledependencies
   */
  transpileDependencies: [],

  /**
   * @property {boolean} [productionSourceMap=true] Establecer esto en falso puede acelerar las
   * compilaciones de producción si no necesita source maps para la producción.
   *
   * @see https://cli.vuejs.org/config/#productionsourcemap
   */
  productionSourceMap: false,

  /**
   * @property {object} [css.extract=true(en producción)|false(en desarrollo)] Al construir como
   * una biblioteca, puede establecer esto en falso para evitar que sus usuarios tengan que
   * importar el CSS ellos mismos.
   *
   * @see https://cli.vuejs.org/config/#css-extract
   */
  css: { extract: false },

  /**
   * @property {object} [] Si el valor es un Objeto, se fusionará en la configuración final usando
   * webpack-merge.
   *
   * @see https://cli.vuejs.org/config/#configurewebpack
   */
  configureWebpack: {
    devtool: false,
    performance: {
      hints: false,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PACKAGE_VERSION': `"${version}"`,
        'process.env.DATE_DEPLOY': `"${now.toLocaleString('es-MX', {
          timeZone: 'America/Mexico_City',
        })}"`,
        'process.env.ENV_DEPLOY': `"${process.env.NODE_ENV}"`,
      }),
    ],
  },
})
