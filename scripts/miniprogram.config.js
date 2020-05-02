/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
    origin: 'https://miniprogram.com',
    entry: '/login',
    router: {
        login: ['/login'],
        main: ['/main'],
        tunnel: ['/tunnel/:tunnelId'],
        batch: ['/batch/:batchId'],
        stage: ['/stage/:stageId'],
        room: ['/room/:roomId'],
        stageManage: ['/stage-manage/:stageType'],
        indicatorManage: ['/indicator-manage/:indicatorType'],
        userPowerManage: ['/user-power-manage'],
        addStage: ['/add-stage/:environment'],
        addIndicator: ['/add-indicator/:environment']
    },
    redirect: {
        notFound: 'login',
        accessDenied: 'login'
    },
    generate: {
        autoBuildNpm: 'npm',
        subpackages: {
            package1: ['main'],
            package2: ['tunnel'],
            package3: ['batch'],
            package4: ['stage'],
            package5: ['stageManage'],
            package6: ['indicatorManage'],
            package7: ['userPowerManage']
        },
        preloadRule: {
            login: {
                network: 'all',
                packages: [
                    'package1',
                    'package2',
                    'package3',
                    'package4',
                    'package5',
                    'package6'
                ]
            }
        }
    },
    app: {
        navigationBarTitleText: '双孢菇生产管理系统'
    },
    appExtraConfig: {
        sitemapLocation: 'sitemap.json'
    },
    global: {},
    pages: {},
    optimization: {
        domSubTreeLevel: 10,

        elementMultiplexing: true,
        textMultiplexing: true,
        commentMultiplexing: true,
        domExtendMultiplexing: true,

        styleValueReduce: 5000,
        attrValueReduce: 5000
    },
    projectConfig: {
        projectname: '双孢菇生产管理系统',
        appid: 'wxe7de0046998773b8'
    }
}
