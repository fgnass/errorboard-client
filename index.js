function qs(params) {
  var p = []
  for (var n in params) {
    var v = params[n]
    if (v) p.push(n + '=' + encodeURIComponent(v))
  }
  return p.join('&')
}

module.exports = function(host) {
  if (!host) host = 'localhost:3000'
  window.onerror = function(message, url, line, column, error) {
    (new Image()).src = '//'+host+'/error?' + qs({
      message: message,
      url: url,
      line: line,
      stack: error && error.stack,
      column: column
    })
  }
}
