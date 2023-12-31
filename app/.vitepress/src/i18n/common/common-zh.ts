export default {
  MEETINGS_TIME: '会议时间：',
  MEETINGS_REPLAY: '回放链接',
  SEARCH_PLACE_HOLDER: '输入内容',
  COOKIE_LEGAL_TEXT: '本站点使用Cookies，继续浏览表示您同意我们使用Cookies。',
  COOKIE_LEGAL_LINK_TEXT: 'Cookies和隐私政策。',
  NAV_ROUTER: {
    DOWNLOAD: '下载',
    ISO: 'ISO',
    MIRRORLIST: '镜像仓列表',
    LEARNING: '学习',
    DOCS: '文档',
    MOOC: '慕课',
    INTERNSHIP: '实习',
    CONNECT: '互动',
    NEWS: '新闻',
    BLOG: '博客',
    LIVE: '直播',
    SALON: '活动',
    SUMMIT: '峰会',
    COMMUNITY: '社区',
    CONTRIBUTION: '贡献攻略',
    CONVENTION: '行为准则',
    MAILINGLIST: '邮件列表',
    CERTIFICATION: '个人认证',
    TALENT: '人才评测',
    STATISTICS: '贡献看板',
    SIG: 'SIG',
    SIGLIST: '查看SIG',
    APPLICATION: '申请流程',
    ROLES: '角色说明',
    MEETINGGUIDE: '会议指南',
    DISCOVERY: '探索',
    ATUNE: 'A-Tune',
    BISHENGJDK: 'BiSheng JDK',
    ISULA: 'iSula',
    SECGEAR: 'secGear',
    STRATOVIRT: 'StratoVirt',
    COMPASSCI: 'Compass-CI',
    COMPLIANCE: 'Compliance',
    PKGSHIP: 'Pkgship',
    SUPPORT: '支持',
    VULNERABILITY: '漏洞管理',
    SAFETY: '安全公告',
    CVE: 'CVE',
    COMPATIBILITY_EVALUATION: '兼容性技术测评',
    APPROVE: 'OSV技术测评列表',
    COMPATIBILITY: '兼容性列表',
    MIGRATION: '迁移专区',
  },
  NAV_ROUTER_CONFIG: [
    {
      PATH: '',
      NAME: '下载',
      ID: 'download',
      CHILDREN: [
        {
          NAME: 'ISO',
          ID: 'iso',
          PATH: '/download/',
        },
        {
          NAME: '镜像仓列表',
          ID: 'mirror-list',
          PATH: '/mirror/list/',
        },
      ],
      CLASS: ['download', 'mirror'],
    },
    {
      NAME: '学习',
      ID: 'learning',
      CHILDREN: [
        {
          NAME: '文档',
          PATH: '/zh/',
          ID: 'docs',
          IS_OPEN_WINDOW: 1,
        },
        {
          NAME: '慕课',
          ID: 'mooc',
          PATH: '/learn/mooc/',
        },
        {
          NAME: '实习',
          ID: 'internship',
          PATH: '/internship/',
        },
        {
          NAME: '学习培训',
          ID: 'training-assessment',
          PATH: 'https://training-assessment.osinfra.cn/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'MoocStudio',
          ID: 'MoocStudio',
          PATH: 'https://moocstudio.openeuler.org/zh',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['learn', 'internship', 'learning'],
    },
    {
      PATH: '',
      NAME: '互动',
      ID: 'connect',
      CHILDREN: [
        {
          NAME: '新闻',
          ID: 'news',
          PATH: '/interaction/news-list/',
        },
        {
          NAME: '博客',
          ID: 'blog',
          PATH: '/interaction/blog-list/',
        },
        {
          NAME: '直播',
          ID: 'live',
          PATH: '/interaction/live-list/',
        },
        {
          NAME: '活动',
          ID: 'event',
          PATH: '/interaction/event-list/',
        },
        {
          NAME: '峰会',
          ID: 'summit',
          PATH: '/interaction/summit-list/devday2023/',
        },
        {
          NAME: '论坛',
          ID: 'forum',
          PATH: 'https://forum.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'QuickIssue',
          ID: 'QuickIssue',
          PATH: 'https://quickissue.openeuler.org/zh/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['news', 'blog', 'live', 'salon'],
    },
    {
      PATH: '',
      NAME: '社区',
      ID: 'community',
      CHILDREN: [
        {
          NAME: '关于我们',
          ID: 'about-us',
          PATH: '/community/organization/',
        },
        {
          NAME: '贡献攻略',
          ID: 'contribution',
          PATH: '/community/contribution/',
        },
        {
          NAME: '邮件列表',
          ID: 'mailing-list',
          PATH: '/community/mailing-list/',
        },
        {
          NAME: '人才评定',
          ID: 'talent-assessment',
          PATH: 'https://talent-assessment.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: '贡献看板',
          ID: 'statistics',
          PATH: 'https://datastat.openeuler.org/zh/overview',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: '社区荣誉',
          ID: 'honor',
          PATH: '/community/honor/',
        },
      ],
      CLASS: ['contribution', 'conduct', 'mailing-list', 'certification'],
    },
    {
      PATH: '',
      NAME: 'SIG',
      ID: 'sig',
      CHILDREN: [
        {
          NAME: '查看SIG',
          ID: 'sig-list',
          PATH: '/sig/sig-list/',
        },
        {
          NAME: '申请流程',
          ID: 'application',
          PATH: '/sig/sig-guidance/',
        },
        {
          NAME: '角色说明',
          ID: 'roles',
          PATH: '/sig/role-description/',
        },
        {
          NAME: '会议指南',
          ID: 'meeting-guide',
          PATH: '/sig/meeting-guide/',
        },
      ],
      CLASS: ['sig-list', 'sig-guidance', 'role-description', 'meeting-guide'],
    },
    {
      PATH: '',
      NAME: '探索',
      ID: 'discovery',
      CHILDREN: [
        {
          NAME: 'A-Tune',
          ID: 'atune',
          PATH: '/other/projects/atune/',
        },
        {
          NAME: 'BiSheng JDK',
          ID: 'bishengjdk',
          PATH: '/other/projects/bishengjdk/',
        },
        {
          NAME: 'iSula',
          ID: 'isula',
          PATH: '/other/projects/isula/',
        },
        {
          NAME: 'secGear',
          ID: 'secgear',
          PATH: '/other/projects/secgear/',
        },
        {
          NAME: 'StratoVirt',
          ID: 'stratovirt',
          PATH: '/other/projects/stratovirt/',
        },
        {
          NAME: 'Compass-CI',
          ID: 'compass-ci',
          PATH: 'https://compass-ci.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'Compliance',
          ID: 'compliance',
          PATH: 'https://compliance.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'Pkgship',
          ID: 'pkgship',
          PATH: 'https://pkgmanage.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'radiaTest',
          ID: 'radiaTest',
          PATH: 'https://radiatest.openeuler.org',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'NestOS',
          ID: 'NestOS',
          PATH: 'https://nestos.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['atune', 'bishengjdk', 'isula', 'secgear', 'stratovirt'],
    },
    {
      PATH: '',
      NAME: '支持',
      ID: 'support',
      CHILDREN: [
        {
          NAME: '漏洞管理',
          ID: 'vulnerability-reporting',
          PATH: '/security/vulnerability-reporting/',
        },
        {
          NAME: '安全公告',
          ID: 'security-bulletins',
          PATH: '/security/security-bulletins/',
        },
        {
          NAME: 'CVE',
          ID: 'cve',
          PATH: '/security/cve/',
        },
        {
          NAME: 'OSV技术评测',
          ID: 'approve',
          PATH: '/approve/',
        },
        {
          NAME: '兼容性技术测评',
          ID: 'compatibility-test',
          PATH: 'https://certification.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: '兼容性列表',
          ID: 'compatibility',
          PATH: '/compatibility/',
        },
        {
          NAME: '迁移专区',
          ID: 'migration',
          PATH: '/migration/',
        },
      ],
      CLASS: [
        'security',
        'vulnerability-reporting',
        'safety-bulletin',
        'approve',
        'cve',
        'compatibility',
        'migration',
      ],
    },
    {
      PATH: '',
      NAME: '代码',
      ID: 'code',
      CHILDREN: [
        {
          NAME: '代码仓',
          PATH: 'https://gitee.com/openeuler',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: '软件包仓',
          PATH: 'https://gitee.com/src-openeuler',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'GitHub镜像仓',
          PATH: 'https://github.com/openeuler-mirror',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['code'],
    },
  ],
  NAV_ROUTER_INFO: [
    {
      NAME: '动态',
      CHILDREN: [
        {
          NAME: '新闻',
          LABEL: '',
          PATH: '/interaction/news-list/',
        },
        {
          NAME: '博客',
          LABEL: '',
          PATH: '/interaction/blog-list/',
        },
        {
          NAME: '活动',
          LABEL: '',
          PATH: '/interaction/event-list/',
        },
        {
          NAME: '峰会',
          LABEL: '',
          PATH: '/interaction/summit-list/devday2023/',
        },
      ],
    },
    {
      NAME: '交流',
      CHILDREN: [
        {
          NAME: '论坛',
          LABEL: '',
          PATH: 'https://forum.openeuler.org/',
        },
        {
          NAME: '邮件列表',
          LABEL: '',
          PATH: '/community/mailing-list/',
        },
        {
          NAME: '线上会议',
          LABEL: '',
          PATH: '',
        },
        {
          NAME: '社交媒体',
          LABEL: '',
          PATH: '',
        },
      ],
    },
  ],
  NAV_ROUTER_CONFIG_NEW: [
    {
      NAME: '用户',
      ID: 'user',
      CHILDREN: [
        {
          NAME: '技术展示',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: '用户案例',
              LABEL: '了解openEuler在各行业的最佳案例',
              PATH: '/showcase/',
            },
            {
              NAME: '行业白皮书',
              LABEL: '了解openEuler在行业的生态现状、业务场景的应用',
              PATH: '',
            },
            {
              NAME: '技术白皮书',
              LABEL: '了解openEuler各版本的技术详情',
              PATH: '',
            },
          ],
        },
        {
          NAME: '使用指南',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: '文档',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '课程中心',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '迁移中心',
              LABEL: '助力企业进行操作系统迁移的指南文档',
              PATH: '',
            },
          ],
        },
        {
          NAME: '支持与服务',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'OSV技术测评',
              LABEL: '帮助企业快速申请兼容性技术测评',
              PATH: '',
            },
            {
              NAME: '兼容性技术测评',
              LABEL: '帮助企业快速申请兼容性技术测评',
              PATH: '',
            },
            {
              NAME: '兼容性列表',
              LABEL: '查看openEuler兼容性列表',
              PATH: '',
            },
            {
              NAME: '安全中心',
              LABEL: '查看漏洞管理、安全公告等安全问题',
              PATH: '',
              CHILDREN: [
                {
                  NAME: '漏洞管理',
                  LABEL: '',
                  PATH: '',
                },
                {
                  NAME: '安全公告',
                  LABEL: '',
                  PATH: '',
                },
                {
                  NAME: 'CVE',
                  LABEL: '',
                  PATH: '',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      NAME: '开发者',
      ID: 'developer',
      CHILDREN: [
        {
          NAME: '学习与贡献',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: '文档',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '课程中心',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '贡献攻略',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: 'SIG中心',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '开源实习',
              LABEL: '',
              PATH: '',
            },
          ],
        },
        {
          NAME: '开发openEuler',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'QuickIssue',
              LABEL: '简易快捷地查询、提交社区Issues',
              PATH: '',
            },
            {
              NAME: 'Pkgship',
              LABEL: '管理操作系统软件包信息和依赖项的查询工具',
              PATH: '',
            },
            {
              NAME: '软件包贡献',
              LABEL: '为全球开发者提供简便顺畅的软件包贡献流程',
              PATH: '',
            },
            {
              NAME: 'License兼容性检查工具',
              LABEL: '帮助快速检测License兼容性',
              PATH: '',
            },
            {
              NAME: 'radiaTest',
              LABEL: '基于openEuler环境开发的测试管理平台',
              PATH: '',
            },
            {
              NAME: 'X2openEuler',
              LABEL: '简介简介简介简介简介',
              PATH: '',
            },
            {
              NAME: 'Compass-CI',
              LABEL: '开放式测试服务平台',
              PATH: '',
            },
            {
              NAME: 'EulerMaker',
              LABEL: '简介简介简介简介简介',
              PATH: '',
            },
            {
              NAME: 'OEPKGS',
              LABEL: 'oepkgs软件托管平台',
              PATH: '',
            },
          ],
        },
        {
          NAME: '在openEuler上开发',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: 'EulerVM',
              LABEL: '跨平台openEuler虚拟机管理工具',
              PATH: '',
            },
            {
              NAME: 'openEuler on WSL',
              LABEL: '在Microsotf WSL中使用openEuler',
              PATH: '',
            },
            {
              NAME: 'openEuler SDK',
              LABEL: 'x',
              PATH: '',
            },
            {
              NAME: '用户软件仓(EUR)',
              LABEL: '开发者易用的软件包托管分发平台',
              PATH: '',
            },
          ],
        },
        {
          NAME: '源码',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: '代码仓',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '软件包仓',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: 'Github镜像仓',
              LABEL: '',
              PATH: '',
            },
          ],
        },
      ],
    },
    {
      NAME: '社区',
      ID: 'community',
      CHILDREN: [
        {
          NAME: '关于社区',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: '组织架构',
              LABEL: '了解openEuler的委员会成员',
              PATH: '',
            },
            {
              NAME: '成员单位',
              LABEL: '了解openEuler的捐赠单位',
              PATH: '',
            },
            {
              NAME: '社区章程',
              LABEL: '了解openEuler的章程、条例、行为准则、License策略',
              PATH: '',
            },
            {
              NAME: '社区荣誉',
              LABEL: '了解openEuler的荣誉奖项',
              PATH: '',
            },
            {
              NAME: '贡献看板',
              LABEL: '查看openEuler社区数据',
              PATH: '',
            },
            {
              NAME: '社区基础设施赞助人',
              LABEL: '了解企业设备投入',
              PATH: '',
            },
          ],
        },
        {
          NAME: '学习与贡献',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: '文档',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '课程中心',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '贡献攻略',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: 'SIG中心',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '培训认证',
              LABEL: '',
              PATH: '',
            },
          ],
        },
        {
          NAME: '项目',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'A-Tune',
              LABEL: '一款基于AI开发的智能优化引擎',
              PATH: '',
            },
            {
              NAME: 'BiSheng JDK',
              LABEL: 'ARM上最好用的JDK',
              PATH: '',
            },
            {
              NAME: 'iSula',
              LABEL: '容器技术方案',
              PATH: '',
            },
            {
              NAME: 'secGear',
              LABEL: '供开发者开发安全应用的机密计算框架',
              PATH: '',
            },
            {
              NAME: 'StratoVirt',
              LABEL: '面向云数据中心的企业级虚拟化VMM',
              PATH: '',
            },
          ],
        },
      ],
    },
    {
      NAME: '下载',
      ID: 'download',
      CHILDREN: [
        {
          NAME: '最新版本',
          TYPE: 1,
          CHILDREN: [
            {
              NAME: 'openEuler 22.03 LTS SP1',
              LABEL:
                'openEuler 22.03 LTS SP1 是openEuler 22.03 LTS的补丁版本，基于5.10内核构建，实现了服务器、云、边缘和嵌入式的全场景支持',
              PATH: '',
              CHILDREN: [
                {
                  NAME: '服务器',
                  LABEL: '',
                  PATH: '',
                },
                {
                  NAME: '边缘计算',
                  LABEL: '',
                  PATH: '',
                },
                {
                  NAME: '云计算',
                  LABEL: '',
                  PATH: '',
                },
                {
                  NAME: '嵌入式',
                  LABEL: '',
                  PATH: '',
                },
              ],
            },
            {
              NAME: 'openEuler 22.09',
              LABEL:
                'openEuler 22.09 充分释放多样性算力，持续深化全场景创新，打造极致迁移能力，实现欧拉鸿蒙互联互通',
              PATH: '',
              CHILDREN: [
                {
                  NAME: '服务器',
                  LABEL: '',
                  PATH: '',
                },
                {
                  NAME: '边缘计算',
                  LABEL: '',
                  PATH: '',
                },
                {
                  NAME: '云计算',
                  LABEL: '',
                  PATH: '',
                },
                {
                  NAME: '嵌入式',
                  LABEL: '',
                  PATH: '',
                },
              ],
            },
          ],
        },
        {
          NAME: '其他版本',
          TYPE: 0,
          CHILDREN: [
            {
              NAME: '社区发行版',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '商业发行版',
              LABEL: '',
              PATH: '',
            },
            {
              NAME: '企业自用版',
              LABEL: '',
              PATH: '',
            },
          ],
        },
      ],
    },
  ],
  LANG: '中文',
  LANG_LIST: ['中文', 'English', 'Русский'],
  USER_CENTER: '个人中心',
  LOGOUT: '退出登录',
  PLEASE: '请先',
  LOGIN: '登录',
  GITTE: '源码',
  CODE: '代码',
  FOOTER: {
    ATOM_TEXT:
      'openEuler 是由开放原子开源基金会（OpenAtom Foundation）孵化及运营的开源项目',
    ATOM_PC: '/atom-pc.png',
    ATOM_MO: '/atom-mo.png',
    MAIL: 'contact@openeuler.io',
    COPY_RIGHT: '版权所有 © 2023 openEuler 保留一切权利',
    RIGHT_LIST: [
      {
        NAME: '品牌',
        URL: '/other/brand/',
      },
      {
        NAME: '隐私政策',
        URL: '/other/privacy/',
      },
      {
        NAME: '法律声明',
        URL: '/other/legal/',
      },
      {
        NAME: '服务状态',
        URL: 'https://status.openeuler.org/',
      },
    ],
    LINKS: [],
    QR_CODE: 'openEuler公众号',
    QR_ASSISTANT: 'openEuler小助手',
  },
  BUILDING: {
    BUILDING: '建设中',
    BUILDINGMES: '敬请期待...',
  },
  SEARCH: {
    BROWSEHISTORY: '历史记录',
    CLEAN: '清除',
    TOPSEARCH: '热门搜索',
    CHANGE: '换一批',
    PLEACHOLDER: '请输入内容',
  },
  PREV: '上一页',
  NEXT: '下一页',
};
