const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Singlepagetiago',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Singlepagetiago',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/ewz/Documentos/Projetos/poc/Work_with_documentation',
          templates:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/node_modules/docz-core/dist/templates',
          docz:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/.docz',
          cache:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/.docz/.cache',
          app:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/.docz/app',
          appPackageJson:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/package.json',
          appTsConfig:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/tsconfig.json',
          gatsbyConfig:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/gatsby-config.js',
          gatsbyBrowser:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/gatsby-browser.js',
          gatsbyNode:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/gatsby-node.js',
          gatsbySSR:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/gatsby-ssr.js',
          importsJs:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/.docz/app/imports.js',
          rootJs:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/.docz/app/root.jsx',
          indexJs:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/.docz/app/index.jsx',
          indexHtml:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/.docz/app/index.html',
          db:
            '/home/ewz/Documentos/Projetos/poc/Work_with_documentation/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
