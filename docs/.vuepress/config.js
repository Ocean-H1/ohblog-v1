// 不要忘了安装 moment
const moment = require('moment')
const { valineConfig } = require('../../secret')
module.exports = {
    theme: 'reco',
    title: '南山以南',
    description: '目标是太阳,就不必留恋萤火之光',
    head: [
        // 移动端优化
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'Keywords', content: 'Ocean的个人博客,Web前端,笔记,日常,项目,vue,javascript,程序员,数据结构与算法' }],
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['link', { rel: 'stylesheet', href: '/assets/css/global.css' }]
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.png',
        type: 'blog',
        // 备案
        record: '陕ICP备2022001580号-1',
        recordLink: 'https://beian.miit.gov.cn',
        // 项目开始时间，只填写年份
        startYear: '2022',
        // 顶部导航栏
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            {
                text: '项目',
                items: [
                    {
                        text: '电商后台管理系统', link: '/',
                    },
                    {
                        text: '客运售票伪系统', link: 'http://station.oceanh.top',
                    }
                ]
            },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            {
                text: '关于我', link: '/about',
                items: [
                    {
                        text: '个人简历', link: '/myresume/', icon: 'reco-lock'
                    },
                    {
                        text: '我的经历', link: '', icon: 'reco-account'
                    }
                ]
            },
            { text: '留言板', link: '/messageboard/', icon: 'reco-suggestion' },

            { text: '其他', link: '', icon: 'reco-other' },
        ],
        // 设置昵称
        author: "OceanH",
        // 设置首页右侧信息栏头像
        authorAvatar: '/assets/img/avatar.gif',
        // 友情链接
        friendLink: [
            {
                title: 'Cai.',
                desc: 'Enjoy when you can, and endure when you must.',
                link: 'https://www.awesomeboy.cn/'
            },
        ],
        // 博客设置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类', // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签',      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                {
                    icon: 'reco-mayun', link: 'https://gitee.com/Ocean0128'
                },
                {
                    icon: 'reco-github', link: 'https://github.com/Ocean-H1'
                }
            ]
        },
        // 评论
        valineConfig: valineConfig,
    },
    // 插件
    plugins: {
        // 分页插件
        '@vuepress-reco/vuepress-plugin-pagation': {
            perPage: 8,
        },
        // 页面第一次载入的动画插件
        "@vuepress-reco/vuepress-plugin-loading-page": {},
        // 自动生成侧边栏
        "vuepress-plugin-auto-sidebar": {
            collapse: {
                open: true,
            },
        },
        // 樱花(可以改其他图片)插件
        // "sakura": {
        //     "num": 15,  // 默认数量
        //     "show": true, //  是否显示
        //     "zIndex": 0,   // 层级
        //     "img": {
        //         "replace": false,  // false 默认图 true 换图 需要填写httpUrl地址
        //         "httpUrl": '...'     // 绝对路径
        //     }
        // },
        // 彩带插件
        "ribbon-animation": {
            "size": 90,   // 默认数据
            "opacity": 0.3,  //  透明度
            "zIndex": -1,   //  层级
            "opt": {
                // 色带HSL饱和度
                "colorSaturation": "80%",
                // 色带HSL亮度量
                "colorBrightness": "60%",
                // 带状颜色不透明度
                "colorAlpha": 0.65,
                // 在HSL颜色空间中循环显示颜色的速度有多快
                "colorCycleSpeed": 6,
                // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
                "verticalPosition": "center",
                // 到达屏幕另一侧的速度有多快
                "horizontalSpeed": 200,
                // 在任何给定时间，屏幕上会保留多少条带
                "ribbonCount": 2,
                // 添加笔划以及色带填充颜色
                "strokeSize": 0,
                // 通过页面滚动上的因子垂直移动色带
                "parallaxAmount": -0.5,
                // 随着时间的推移，为每个功能区添加动画效果
                "animateSections": true
            },
            "ribbonShow": false, //  点击彩带  true显示  false为不显示
            "ribbonAnimationShow": true  // 滑动彩带
        },
        // 最后更新时间
        "@vuepress/last-updated": {
            transformer: (timestamp, lang) => {
                moment.locale("zh-cn")
                return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
            }
        },
        // pwa
        "@vuepress/pwa": {
            "serviceWorker": true,
            "updatePopup": {
                "message": "发现新内容可用！",
                "buttonText": "刷新"
            }
        },
        // 中文目录转换为音译链接
        "permalink-pinyin": {
            lowercase: true,
            separator: "-",
        },
        // bgm插件
        "meting": {
            meting: {
                auto: 'https://music.163.com/#/playlist?id=7324368135', //歌单地址
                server: "netease", // netease:网易云，tencent:qq音乐，xiami:虾米音乐
                type: "palylist",
                mid: "7324368135",//歌单或音乐id
            },
            aplayer: {
                autoplay: true,
                mini: true,
                theme: '#282c34',
                order: 'random',
                volume: 0.15
            },
            mobile: {
                cover: false,
                lrc: false,
            },

        },
        // 鼠标点击特效插件
        "cursor-effects": {
            size: 2,
            shape: 'star',
            zIndex: 999999999
        },
        // 复制代码的插件
        "vuepress-plugin-nuggets-style-copy": {
            copyText: "复制代码",
            tip: {
                content: "生命不息，CV不止！"
            }
        },
        // 公告插件
        '@vuepress-reco/vuepress-plugin-bulletin-popover': {
            title: '公告',
            body: [
                {
                    type: 'title',
                    content: '欢迎加我的QQ/Vx一起交流学习 🎉🎉',
                    style: 'text-aligin: center;',
                },
                {
                    type: 'text',
                    content: 'QQ：1404939185',
                    style: 'text-align: center;'
                },
                {
                    type: 'text',
                    content: 'VX:',
                    style: 'text-align: center;'
                },
                {
                    type: 'image',
                    src: '/assets/img/weChat.jpg',
                },
                {
                    type: 'text',
                    content: '友链或疑问均可在留言板给我留言',
                    style: 'text-align: center;'
                }
            ],
            footer: [
                {
                    type: 'button',
                    text: '留言',
                    link: '/messageboard/'
                }
            ]

        }
    },
    markdown: {
        lineNumbers: true
    },
}