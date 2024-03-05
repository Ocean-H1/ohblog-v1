/**
 * @Description: 插件配置
 * @Author: OceanH
 * @Date: 2023-08-07 23:46:44
 */
const moment = require('moment');

const plugins = {
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
      moment.locale("zh-cn");
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
      type: "playlist",
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
        style: 'text-align: center;',
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
        style: 'width: 100%;'
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

  },
  // 谷歌分析插件
  '@vuepress/google-analytics': {
    'ga': 'G-LJCEK2R37J'
  }
};

module.exports = {
  plugins
};