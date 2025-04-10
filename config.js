SystemJS.config({
  baseURL: '/',
  defaultExtension: true,
  packages: {
    '.': {
      main: './app.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      babelOptions: {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'https://cdn.jsdelivr.net/npm/systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'https://cdn.jsdelivr.net/npm/systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'https://unpkg.com/react@17.0.1/umd/react.development.js',
    'react-dom': 'https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js',
    'react-router-dom': 'https://unpkg.com/react-router-dom@5.1.0/umd/react-router-dom.min.js'
  },
  transpiler: 'plugin-babel'
});

// Dynamically import the app
SystemJS.import('./app.js')
  .catch(console.error.bind(console));