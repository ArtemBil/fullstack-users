// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// module.exports = function (app) {
//     app.use(
//         'api',
//         createProxyMiddleware({
//             target: 'http://localhost:3001',
//             changeOrigin: true,
//         })
//     )
// }
//
// // import {createProxyMiddleware} from 'http-proxy-middleware';
// // import {Express} from 'express';
// //
// // export default function (app) {
// //     app.use(
// //         'api',
// //         createProxyMiddleware({
// //             target: 'http://localhost:3001',
// //             changeOrigin: true,
// //         })
// //     )
// // }