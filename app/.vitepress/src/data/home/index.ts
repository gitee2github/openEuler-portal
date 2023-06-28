import eulerSky_pc from '@/assets/category/home/banner/euler-sky_pc.jpg';
import eulerSky_mo from '@/assets/category/home/banner/euler-sky_mo.png';

import kunpeng_pc from '@/assets/category/home/banner/kunpeng_pc.jpg';
import kunpeng_mo from '@/assets/category/home/banner/kunpeng_mo.jpg';

import easyEdit_pc from '@/assets/category/home/banner/easy-edit_pc.jpg';
import easyEdit_mo from '@/assets/category/home/banner/easy-edit_mo.jpg';

import techDay_pc from '@/assets/category/home/banner/tech-day_pc.png';
import techDay_mo from '@/assets/category/home/banner/tech-day_mo.png';
// import base_pc from '@/assets/category/home/banner/base_pc.jpg';
// import base_mo from '@/assets/category/home/banner/base_mo.jpg';

import eur_mo from '@/assets/category/home/banner/eur-banner_mo.jpg';
import eur_pc from '@/assets/category/home/banner/eur-banner_pc.jpg';

export default {
  // 首页banner  targetTap:1 新页签打开
  HOMEBANNER: {
    zh: [
      {
        pcBanner: eulerSky_pc,
        moBanner: eulerSky_mo,
        link: '/zh/community/program/',
        id: 'euler-sky',
        title: ['openEuler Call for X 计划'],
        desc: ['热衷实践 乐于分享 多元贡献'],
        btn: '查看详情',
        targetTap: 1,
      },
      {
        pcBanner: kunpeng_pc,
        moBanner: kunpeng_mo,
        link: 'https://www.hikunpeng.com/developer/contests/kunpeng-competition2023?tab=4',
        id: '',
        targetTap: 1,
      },
      {
        pcBanner: easyEdit_pc,
        moBanner: easyEdit_mo,
        link: '/zh/blog/20230506-EasyEditor/20230506-EasyEditor.html',
        title: ['社区SIG主页支持自编辑'],
        desc: ['欢迎使用EasyEditor'],
        btn: '查看详情',
        id: 'easy-edit',
        targetTap: 1,
      },
      {
        pcBanner: eur_pc,
        moBanner: eur_mo,
        link: '/zh/blog/waaagh/openEuler-user-repo-intro.html',
        id: 'eur',
        title: ['openEuler', '用户软件仓（EUR）发布'],
        targetTap: 1,
      },
      // {
      //   pcBanner: base_pc,
      //   moBanner: base_mo,
      //   targetTap: 1,
      //   link: 'https://hiss.shixizhi.huawei.com/portal/1643780836745113602?pageId=1644269448177651714&activeIndex=-1&sxz-lang=zh_CN',
      //   id: '',
      // },
    ],
    en: [
      {
        pcBanner: techDay_pc,
        moBanner: techDay_mo,
        id: '',
        link: `https://www.openeuler.org/en/blog/openeuler-techday/openEuler%20TechDay%20Invitation.html`,
        targetTap: 1,
      },
    ],
  },
};
