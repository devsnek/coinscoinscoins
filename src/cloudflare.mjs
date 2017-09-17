export default fetch('https://cloudflare.com/cdn-cgi/trace')
  .then((r) => r.text())
  .then((t) => t
    .split('\n')
    .map((p) => p.split('=')).reduce((o, p) => { o[p[0]] = p[1]; return o; }, {}));
