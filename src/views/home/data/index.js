const GeneratInfo = {
  "config": {
    "path": "1111"
  },
  "button": [
    {
      "name": "111",
      "type": "add",
      "path": "1111"
    }
  ],
  "status": {
    "type": "approval",
    "filterStatus": [
      {
        "name": "我待办",
        "key": "await"
      },
      {
        "name": "我申请",
        "key": "apply"
      },
      {
        "name": "我处理",
        "key": "approval"
      },
      {
        "name": "抄送我",
        "key": "carbonCopy"
      },
      {
        "name": "全部",
        "key": ""
      }
    ]
  },
  "table": {
    "url": "/bidDocumentComment/listPage",
    "method": "post",
    "columns": [
      {
        title: '序列',
        customRender: (text, record, index) => {
          return index + 1;
        },
      },
      {
        title: '项目名称',
        dataIndex: 'projectInfo.projectName',
      },
      {
        title: '项目编号',
        dataIndex: 'projectInfo.projectNumber',
      },
      {
        title: '业务类型',
        dataIndex: 'bidInfo[0].businessSignName',
      },
      {
        title: '招标方式',
        dataIndex: 'bidInfo[0].bidAtureSignName',
      },
      {
        title: '投资额',
        dataIndex: 'projectInfo.projectInvestment',
      },
      {
        title: '申请人',
        dataIndex: 'bidInfo[0].reportUserName',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
      },
      {
        title: '标书评审',
        dataIndex: 'commentTask',
        scopedSlots: { customRender: 'commentTask' },
      },
      {
        title: '投标保证金',
        dataIndex: 'bidBondTask',
        scopedSlots: { customRender: 'bidBondTask' },
      },
      {
        title: '标书费',
        dataIndex: 'bidDocumentTask',
        scopedSlots: { customRender: 'bidDocumentTask' },
      },
      {
        title: '操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
      },
    ]
  }
}

export default GeneratInfo;