module.exports = {
    devServer: {
        // 端口号
        port: 8081,
        // 配置不同的后台API地址
        proxy: {
            '/api': {
                target: 'http://www.dzm.com',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
};
