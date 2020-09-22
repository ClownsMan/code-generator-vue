// 定义status
const statusList = {
  data: null,
  approval: [
    {
      name: '我待办',
      key: 'await',
    },
    {
      name: '我申请',
      key: 'apply',
    },
    {
      name: '我处理',
      key: 'approval',
    },
    {
      name: '抄送我',
      key: 'carbonCopy',
    },
    {
      name: '全部',
      key: '',
    },
  ],
  handlerApproval: [
    {
      name: "我待办",
      key: "AWAIT",
    },
    {
      name: "我发起",
      key: "APPLY",
    },
    {
      name: "我处理",
      key: "APPROVAL",
    },
    {
      name: "抄送我",
      key: "CARBONCOPY",
    },
    {
      name: "已作废",
      key: "INVALID",
    },
  ]
};


export default function toJson(a, b, c, d) {
  let status = handlerStatus(c);
  let jsonData = {
    config: a,
    button: b,
    status,
    table: d
  }
  return jsonData
}

// function handlerBasic(data) {
//   return Object.defineProperty({}, 'config', data)
// }

// function handlerButton(data) {
//   return Object.defineProperty({}, 'button', data)
// }

function handlerStatus(data) {
  return {
    ...data,
    filterStatus: statusList[data.type]
  }
}

// function handlerTable(data) {
//   return Object.defineProperty({}, 'table', data)
// }
