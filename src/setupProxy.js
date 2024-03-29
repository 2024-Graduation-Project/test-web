const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/torch",
        createProxyMiddleware({
            target: "http://192.168.179.148:8080",
            changeOrigin: true,
        })
    );
};