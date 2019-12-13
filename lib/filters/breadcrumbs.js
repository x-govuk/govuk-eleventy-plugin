module.exports = function (breadcrumbs, app, page, title) {
  const array = []

  let post
  if (!page.outputPath.includes('index.html')) {
    post = {
      text: title,
      href: page.url
    }
  }

  const items = array.concat({
    text: app.serviceName || app.productName,
    href: '/'
  }, breadcrumbs, post).filter(Boolean)
  return items
}
