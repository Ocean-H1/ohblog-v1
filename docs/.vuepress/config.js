/**
 * @Description: 主配置文件
 * @Author: OceanH
 * @Date: 2023-08-07 23:48:07
 */

const { valineConfig } = require('../../secret');
const { plugins } = require('../../plugins');
const { navList } = require('../../navList');
const { friendLink } = require('../../friendLink');

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
    ['link', { rel: 'stylesheet', href: '/assets/css/global.css' }],
    // 百度分析
    [
      'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2b0f52427ccfc446eb6912b5b6a40f5c";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })(); 
      `
    ]
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
    nav: navList,
    // 设置昵称
    author: "OceanH",
    // 设置首页右侧信息栏头像
    authorAvatar: '/assets/img/avatar.png',
    // 友情链接
    friendLink,
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
  plugins,
  markdown: {
    lineNumbers: true
  },
};