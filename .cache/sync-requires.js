const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yanisberkani/LauzHack/eklass/.cache/dev-404-page.js"))),
  "component---src-pages-account-creation-js": hot(preferDefault(require("/Users/yanisberkani/LauzHack/eklass/src/pages/accountCreation.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/yanisberkani/LauzHack/eklass/src/pages/login.js")))
}

