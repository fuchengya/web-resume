export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m YangXiaoLong', //英文标题
    title: '一个追梦在前端路上的小白', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'page1.jpg', // 作者头像
    xinhui: '我叫杨小龙，是一名在读的大四学生。', // 幸会
    qiuzhi: '前端开发', // 求职意向
    guanyuwo: '掌握了前端js、html、css、Nodejs、Axios、Ajax、TypeScript、Vue全家桶等等，希望可以和大家一起学习，共同进步！' // 关于我
  },
  // page3部分
  page3: [{
    icon: 'icon-tubiao-',
    title: '后端',
    msg: ['nodejs后台开发', 'MongoDB数据库操作']
  }, {
    icon: 'icon-diannao', // 图标
    title: '网页制作', // 标题
    msg: ['响应式页面', 'css3、less动画效果',] //介绍
  }, {
    icon: 'icon-qianbi1',
    title: '前端功能',
    msg: ['熟练编写语义化HTML', '深入理解ES6+新特性', 'JS完成常见的交互功能', '用Axios进行HTTP请求，实现前后端数据通信']
  }, {
    icon: 'icon-shouji',
    title: '框架',
    msg: ['vue框架',]
  }
  ],
  // page4部分
  page4: {
    // 我的历程
    course: [{
      date: '2021/9——2022/9',
      desc: {
        title: '吉首大学张家界学院',
        list: ['校级三等奖学金', '互联网+创新创业大赛市赛三等奖', '网页设计大赛个人三等奖']
      }
    },
    ],

    // 我的拓展技能掌握
    singlelist: [{
      title: 'bootsrap',
      text: '了解'
    }, {
      title: 'Element-ui',
      text: '掌握'
    }, {
      title: 'Typescript',
      text: '掌握'
    }, {
      title: 'less',
      text: '掌握'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'HTML、CSS、SCSS',
      value: '90%'
    }, {
      title: 'JS、JQ',
      value: '90%'
    }, {
      title: 'Vue',
      value: '90%'
    }, {
      title: 'Promise',
      value: '80%'
    }, {
      title: 'NodeJs',
      value: '80%'
    }, {
      title: 'mysql',
      value: '80%'
    }]
  },
  // page5部分
  page5: [{
    title: '浮城呀',
    content: '自己用来记录bug的博客~',
    image: 'box1.png',
    href: 'https://www.fuchengya.com'
  }, {
    title: '时尚购物广场',
    content: '综合性电商项目',
    image: 'box3.jpg',
    href: 'https://shopping.fuchengya.com'
  }, {
    title: '浮城音乐网',
    content: '用Vue开发的一个在线音乐平台',
    image: 'box5.jpg',
    href: 'https://music.fuchengya.com/'
  }],
  // page6部分
  page6: {
    github: 'https://github.com/fuchengya',
    bili: '',
    email: 'Mailto:?Subject=邮箱标题&Body=邮箱内容！',
    zhihu: '',
    weixin: "<img style='width:120px' src='' alt='加载失败'>",
    qq: "<img style='width:120px' src='' alt='加载失败'>"
  }
}
