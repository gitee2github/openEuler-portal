import data from './download';
export default {
  RELEASE_DESC: 'Описание релиза',
  INSTALL_GUIDENCE: 'Руководство по установке',
  SEEK_HELP: 'Справка',
  GET_ISO: 'Получить ISO',
  LIFE_CYCLE: 'Жизненный цикл',
  DOWNLOAD_BTN_NAME: 'Загрузить',
  OUTSIDE_TITLE: 'ISO',
  SELECT: 'фильтр',
  ALL_DATA: 'весь',
  MANUFACTURER: 'Поставщик',
  WHITE_PAPER: 'информационный документ',
  PUBLISH_DATE: 'Дата выпуска релиза  ',
  WEBSITE_SELECT: 'Select Mirror',
  COPY_SUCCESSFULLY: 'copied successfully.',
  BTNSURE: 'Подтвердить',
  BTNRESET: 'сбросить',
  DOWNLOAD_LIST: data.ru.DOWNLOAD_LIST,
  MIRROR_SELECT: {
    TITLE: 'Selected Mirrors',
    RANK: 'Rank：',
    NAME: 'Mirror Name：',
    URL: 'URL：',
    COUNTRY: 'Area：',
    CONTINENT: 'Continent：',
    DISTANCE: 'Distance(KM)：',
    CONTENT: [
      'You are connecting from IP address: ',
      ', which belongs to ',
      '. We believe you are somewhere in ',
      ' and have selected the applicable mirrors.',
    ],
  },
  MIRROR_ALL: {
    TITLE: 'Mirrors Lists',
    NAME: 'Mirror Name：',
    LOCATION: 'Location：',
    SPONSOR: 'Sponsor：',
    HTTPS: 'Http(s)：',
    RSNC: 'RSYNC：',
    FTP: 'FTP：',
    Mbs: 'NetworkBandwidth(Mb/s)：',
    TIME: 'Last Sync time：',
    CONTENT: [
      'openEuler welcomes new mirror sites. If you are considering to set up a public mirror site for openEuler, please follow the mirror guidelines to make sure that your mirror is consistent with the other mirror sites. Any questions, feel free to',
      'contact us',
    ],
  },
};
