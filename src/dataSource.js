// fake data source
const completeTasks = [
  {
    id: 'task20170607001',
    title: '节能大厦1层例行巡检',
    startTime: '6月7日',
    endTime: '6月13日'
  },
  {
    id: 'task20170607002',
    title: '节能大厦2层例行巡检',
    startTime: '6月20日',
    endTime: '6月23日'
  },
  {
    id: 'task20170607003',
    title: '节能大厦3层例行巡检',
    startTime: '6月9日',
    endTime: '6月9日'
  },
  {
    id: 'task20170607004',
    title: '节能大厦4层例行巡检',
    startTime: '6月20日',
    warning: true,
    endTime: '6月15日'
  },
  {
    id: 'task20170607005',
    title: '节能大厦5层例行巡检',
    startTime: '6月4日',
    endTime: '6月4日'
  },
  {
    id: 'task20170607006',
    title: '节能大厦6层例行巡检',
    startTime: '6月1日',
    endTime: '6月1日'
  },
  {
    id: 'task20170607007',
    title: '节能大厦7层例行巡检',
    startTime: '6月2日',
    endTime: '6月5日'
  },
  {
    id: 'task20170607008',
    title: '节能大厦8层例行巡检',
    startTime: '5月20日',
    endTime: '6月3日'
  }
];

const incompleteTasks = [
  {
    id: 'task20170607001',
    title: '节能大厦1层例行巡检',
    startTime: '7月7日',
    endTime: '7月13日'
  },
  {
    id: 'task20170607002',
    title: '节能大厦2层例行巡检',
    startTime: '6月20日',
    endTime: '7月3日'
  },
  {
    id: 'task20170607003',
    title: '节能大厦3层例行巡检',
    startTime: '6月7日',
    endTime: '6月13日',
    warning: true
  }
];

const facilities = [
  { id: 'f20150031', name: '节能大厦1层31灭火器', checked: true },
  { id: 'f20150032', name: '节能大厦1层32灭火器', checked: false },
  { id: 'f20150034', name: '节能大厦1层34灭火器', checked: false },
  { id: 'f20150035', name: '节能大厦1层35灭火器', checked: false },
  { id: 'f20150036', name: '节能大厦1层36灭火器', checked: false },
  { id: 'f20150037', name: '节能大厦1层37灭火器', checked: false },
  { id: 'f20150038', name: '节能大厦1层38灭火器', checked: false },
  { id: 'f20150033', name: '节能大厦1层33灭火器', checked: true }
];

const task = {
  title: '节能大厦1层例行巡检',
  startTime: '7月7日',
  endTime: '7月13日',
  note: '请按相关消防设施法规进行检查',
  // warning: true,
  facilities
};

const checkList = [
  {
    id: 'c201423#jinan#201706030001',
    content: '灭火器的铭牌是否无残缺，并清晰明了；',
    checkState: 'init'
  },
  {
    id: 'c201423#jinan#201706030002',
    content: '灭火器铭牌上关于灭火剂、驱动气体的种类、充装压力、总质量、灭火级别、制造厂名和生产日期或维修日期等标志及操作说明是否齐全；',
    checkState: 'init'
  },
  {
    id: 'c201423#jinan#201706030003',
    content: '灭火器的铅封、销闩等保险装置是否未损坏或遗失；',
    checkState: 'init'
  },
  {
    id: 'c201423#jinan#201706030004',
    content: '灭火器的筒体是否无明显的损伤（磕伤、划伤）、缺陷、锈蚀（特别是筒底和焊缝）、泄漏；',
    checkState: 'init',
    needRecord: true
  },
  {
    id: 'c201423#jinan#201706030005',
    content: '灭火器喷射软管是否完好，无明显龟裂，喷嘴不堵塞；',
    checkState: 'init',
    needRecord: true
  },
  {
    id: 'c201423#jinan#201706030006',
    content:
      '灭火器的驱动气体压力是否在工作压力范围内（贮压式灭火器查看压力指示器是否指示在绿区范围内，二氧化碳灭火器和储气瓶式灭火器可用称重法检查）；',
    checkState: 'init',
    needRecord: true
  },
  {
    id: 'c201423#jinan#201706030007',
    content: '灭火器的零部件是否齐全，并且无松动、脱落或损伤；',
    checkState: 'init'
  },
  {
    id: 'c201423#jinan#201706030008',
    content: '灭火器是否未开启、喷射过。',
    checkState: 'init'
  }
];

const userInfo = {
  name: '乔峰',
  email: 'qiaofeng@mail.com',
  overDueNum: '1',
  completeNum: '16',
  incompleteNum: '3'
};

const notices = [
  {
    id: 'note2017050300001',
    content: '培训通知： 请各部门员工于2017年6月5日下午3点在公司会议室参加防火器材日常巡检技术培训。'
  },
  { id: 'note2017050500001', content: '放假通知： 公司五一长假按国家标准放假时间调休。' }
];

const screenProps = {
  homeScreenProps: {
    taskListProps: {
      incompleteTasks,
      completeTasks
    },
    taskDetailsProps: {
      task
    }
  },
  scanScreenProps: {
    checkProps: {
      checkList
    }
  },
  notificationScreenProps: {
    notificationListProps: {
      notices
    }
  },
  meScreenProps: {
    meDetailProps: {
      userInfo
    }
  }
};

export default screenProps;
