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
  title: '酒店巡检',
  startTime: '6月7日',
  endTime: '7月3日',
  note: '相关注意事项',
  // warning: true,
  facilities
};

const screenProps = {
  homeScreenProps: {
    taskListProps: {
      incompleteTasks,
      completeTasks
    },
    taskDetailsProps: {
      task
    }
  }
};

export default screenProps;
