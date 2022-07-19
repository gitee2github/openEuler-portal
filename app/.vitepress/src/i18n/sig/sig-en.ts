export default {
  GUIDANCE_LIST: {
    GUIDE: {
      MOBILE_TITLE: 'SIG申请流程',
      TITLE: 'Application Process',
      LINE_CONTENT: [
        {
          LEFT: {
            LEFT_INFO:
              'Individuals or companies find two or three persons with common goals in the openEuler community to discuss and set up a SIG, which aims to maintain a specific type of software package in the openEuler community or to initiate an incubation project.',
            LEFT_CIRCLE: '01',
            MOBILE_CIRCLE: 'Find',
            LEFT_IMG: '/img/sig/sig1.png',
            LEFT_DESC: 'Find',
          },
          RIGHT: {
            RIGHT_INFO:
              "Create an application file on Gitee and initiate a pull request (PR) according to the <a target='_blank' href='https://gitee.com/openeuler/community/blob/master/en/technical-committee/governance/README.md'>procedure</a> for setting up a SIG. Make an appointment for attending the Technical Committee meeting. ",
            RIGHT_CIRCLE: '02',
            MOBILE_CIRCLE: 'Apply',
            LEFT_IMG: '/img/sig/sig2.png',
            RIGHT_DESC: 'Apply',
          },
        },
        {
          LEFT: {
            LEFT_INFO:
              'At the regular Technical Committee (TC) meeting, discuss and reach an agreement on the technical scope and maintenance objectives of the SIG.',
            LEFT_CIRCLE: '03',
            MOBILE_CIRCLE: 'Discuss',
            LEFT_IMG: '/img/sig/sig3.png',
            LEFT_DESC: 'Discuss',
          },
          RIGHT: {
            RIGHT_INFO:
              'The TC approves the establishment of the SIG. The corresponding PR is integrated into the code repository, and the infrastructure automatically establishes the corresponding repository.',
            RIGHT_CIRCLE: '04',
            MOBILE_CIRCLE: 'Approve',
            LEFT_IMG: '/img/sig/sig4.png',
            RIGHT_DESC: 'Approve',
          },
        },
        {
          LEFT: {
            LEFT_INFO:
              'The SIG starts to operate. Members use the mailing list and regular meetings for discussion and operation.',
            LEFT_CIRCLE: '05',
            MOBILE_CIRCLE: 'Operate',
            LEFT_IMG: '/img/sig/sig5.png',
            LEFT_DESC: 'Operate',
          },
          RIGHT: {
            RIGHT_INFO:
              'The TC periodically reviews the SIG operation and provides guidance.',
            RIGHT_CIRCLE: '06',
            MOBILE_CIRCLE: 'Improve',
            LEFT_IMG: '/img/sig/sig6.png',
            RIGHT_DESC: 'Improve',
          },
        },
      ],
    },
  },
  SIG_LIST: {
    HOME_PAGE: 'Go to Gitee home page',
    MAIL: 'E-mail',
    IRC: 'IRC Channel',
    MANAGER: 'Administrators',
    NAME: 'SIG',
    GITEE_PAGE: 'Gitee',
  },
  SIG_DESCRIPTION: {
    MEANING: 'The openEuler community is organized based on Special Interest Groups (SIGs) to better manage and improve the work processes.SIGs are open to everyone.',
    LI1: 'Each SIG comprises one or more projects on Gitee, and each project has repositories that store SIG deliverables. Registering with an SIG enables you to submit, discuss, and resolve issues with other members, as well as participate in reviews in an SIG repository.',
    LI2: 'An SIG is established for one or more specific technical topics. Core members of an SIG can manage each group, and members can contribute to the quality and the output of deliverables for the openEuler community.',
    LI3: 'In the README.md file on the project Gitee page, you can find project SIG information, members, and contact information. You can join specific SIGs by mailing the listed email addresses. Also, you can attend public meetings, join discussions or forums, or participate in other activities listed in the corresponding README.md file.'
  }
};