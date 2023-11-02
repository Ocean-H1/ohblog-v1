/**
 * @Description:  导航栏配置项
 * @Author: OceanH
 * @Date: 2023-08-07 23:55:23
 */
const navList = [
  { text: '首页', link: '/', icon: 'reco-home' },
  {
    text: '项目',
    items: [
      {
        text: '在线简历制作平台', link: 'http://182.92.114.250',
      },
      {
        text: '客运售票平台(伪)', link: 'http://station.oceanh.top',
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
        text: '我的经历(暂无)', link: '', icon: 'reco-account'
      }
    ]
  },
  { text: '留言板', link: '/messageboard/', icon: 'reco-suggestion' },

  { text: '其他(暂无)', link: '', icon: 'reco-other' },
];

module.exports = {
  navList
};