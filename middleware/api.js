import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (req, res, next) {
    const apiProxy = createProxyMiddleware({
        target: 'http://localhost:8000', // replace with your Symfony server URL
        changeOrigin: true,
    });

    apiProxy(req, res, next);
}
