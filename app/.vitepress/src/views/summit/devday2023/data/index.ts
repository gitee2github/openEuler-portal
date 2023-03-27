import bannerDevdayMo from '../img/banner-devday_mo.png';
import bannerDevdayPc from '../img/banner-devday_pc.jpg';
import bgCollection1 from '../img/collection-bg1.png';
import bgCollection2 from '../img/collection-bg2.png';
import bgCollection3 from '../img/collection-bg3.png';
import bgCollection4 from '../img/collection-bg4.png';
export default {
  banner: {
    img_pc: bannerDevdayPc,
    img_mo: bannerDevdayMo,
    title: 'openEuler Developer Day 2023',
    subtitle: '4月20-21日  中国·上海浦东嘉里酒店',
  },
  detail: [
    'openEuler Developer Day 2023 （简称 ODD 2023）—— openEuler社区年度顶级会议，是开放原子开源基金会旗下 openEuler 社区发起的开发者峰会。 旨在持续推动操作系统乃至基础软件的创新和突破。本次 ODD 2023 将全面展示全新发布的23.03创新版本特性、多样性计算和全场景协同的技术成果、分享各行各业基于欧拉的商业实践、展示openEuler与国际开源社区和高校的合作以及研究进展。同时ODD也是社区的年度大型工作会议，协同讨论版本路线以及联合创新。openEuler 始终与开发者在一起，用欧拉构筑坚实的软件根基，成就属于每位开发者的欧拉时代。',
  ],
  collection: [
    {
      title: '议题征集',
      img_bg: bgCollection1,
      titleEn: 'CALL FOR SPEAKER',
      link: 'https://shimo.im/forms/DirYOOhoFb04bATr/fill',
    },
    {
      title: '赞助征集',
      img_bg: bgCollection2,
      titleEn: 'CALL FOR SPONSOR',
      link: 'https://shimo.im/forms/Y7JhE038Of0B25Hx/fill',
    },
    {
      title: 'SIG 征集',
      img_bg: bgCollection3,
      titleEn: 'CALL FOR SIG',
      link: 'https://shimo.im/forms/ajofLUZ8Wac7lOJY/fill',
    },
    {
      title: 'DEMO征集',
      img_bg: bgCollection4,
      titleEn: 'CALL FOR DEMO',
      link: 'https://shimo.im/forms/uUCSaEbkkt8GyGLL/fill',
    },
  ],
  previous: {
    title: '精彩回顾',
    content: [
      {
        title: 'openEuler Summit 2022',
        link: '/zh/interaction/summit-list/summit2022/',
      },
      {
        title: '湖南欧拉操作系统生态大会',
        link: '/zh/interaction/summit-list/summit2022-changsha/',
      },
      {
        title: 'openEuler Developer Day 2022',
        link: 'https://v1.openeuler.org/zh/interaction/summit-list/devday2022/',
      },
      {
        title: 'openEuler Summit 2021',
        link: 'https://v1.openeuler.org/zh/interaction/summit-list/summit2021/',
      },
      {
        title: 'openEuler Developer Day 2021',
        link: 'https://v1.openeuler.org/zh/interaction/summit-list/devday2021/',
      },
      {
        title: 'openEuler Summit 2020',
        link: 'https://v1.openeuler.org/zh/interaction/summit-list/',
      },
      {
        title: 'openEuler Virtual Summit 2020',
        link: 'https://v1.openeuler.org/zh/interaction/summit-list/list/',
      },
    ],
  },
};