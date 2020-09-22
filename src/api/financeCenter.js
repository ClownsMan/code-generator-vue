import {
    fetch,
    post
} from '@/utils/request';

// 获取左侧公司数据
export const getCompanyList = () =>
    fetch('/pms/organization/v1/listUserDescendantCompanyTree')

// 获取公司增值税信息
export const getOrgInfo = data =>
    post('/task/finance/invoice/vat/page', data)

// 获取开票历史
export const getInvoiceInfo = data =>
    post('/task/finance/invoice/page', data)

// 获得开票详情信息
export const getInvoiceDetail = data =>
    fetch(`/task/finance/invoice/${data}`)

// 获取公司所得税信息
export const getIncomeTaxInfo = data =>
    post(`/incometax/getMoppingUpLog`, data)

// 季度预缴
export const incomeTaxPrepay = data =>
    post('/incometax/insert/prepay', data)

// 年度清缴
export const incomeTaxMoppingUp = data =>
    post('/incometax/insert/moppingUp', data)

// 获取当前年份的预缴总额
export const getPrepayRental = data =>
    post('/incometax/getPrepayRental', data)

// 获取发票表格数据
export const getInvioceList = data =>
    post('/task/finance/invoice/page', data)

// 催办
export const instanceUrge = data =>
    post('/workbench/instance/urge', data)

// 获取消息中心
export const getMsgList = data =>
    post('/msg/body/listPage', data)

// 撤回
export const withdraw = data =>
    fetch(`/workbench/instance/updateState/withdraw/${data}`)

// 发起审批
export const initiateApproval = data =>
    post(`/workbench/instance/updateState/start/${data}`)

// 作废
export const prohibit = data =>
    post("/workbench/instance/updateState/prohibit", data)

// 通过审批
export const passApproval = data =>
    post("/workbench/node/examineAndApprove/pass", data)

// 不通过审批
export const faliApproval = data =>
    post("/workbench/node/examineAndApprove/fail", data)

// updateStadeProcessInstanceNode
export const updateStadeProcessInstanceNode = data =>
    post("/processInstanceNode/process/updateStadeProcessInstanceNode", data)

// selectAllProcessInstanceNode
export const selectAllProcessInstanceNode = data =>
    post("/processInstanceNode/process/selectAllProcessInstanceNode", data)

// 查看所有审批过的流程记录
export const lookTaskLog = data =>
    post('/task/log/listFind', data)

// 获取用户
export const getUser = data =>
    post('/user/admin/list', data)

// 获取开票单位
export const getUnitList = data =>
    post('/client_organization/admin/listAllClientOrganization', data)

// 获取合同列表
export const getContractList = data =>
    post('/contract/admin/listContract', data)

// 获取流程历史
export const selectAllProcessType = data =>
    post('/processType/process/selectAllProcessType', data)

// 改变流程类型
export const selectProcess = data =>
    post('/process/process/selectProcess', data)

// 获取节点信息
export const selectAllProcess = data =>
    post('/process/process/selectAllProcess', data)

// 添加发票申请
export const insertInvoiceInstance = data =>
    post('/processInvoiceInstance/invoice/insertInvoiceInstance', data)

// 获取汇款记录
export const getReceivableLog = data =>
    post('/receivable/registration/pageReceivable', data)

// 获取关联发票
export const getProcessInvoiceInstance = data =>
    post('/processInvoiceInstance/invoice/selectHistory', data)

// 获取回款详情
export const getCollectMoneyInfo = data =>
    fetch(`/processInvoiceInstance/invoice/selectInvoiceInstance/${data}`)

// 添加回款
export const insertReceivable = data =>
    post('/receivable/registration/insertReceivable', data)

// 更新回款
export const updateReceivable = data =>
    post('/receivable/registration/updateReceivable', data)

// 获取回款详情信息
export const listReceivable = data =>
    post('/receivable/registration/listReceivable', data)

// 财务审批表格
export const getFinancialApproval = data =>
    post(`/workbench/instance/pageFindInstance/financa/${data.params}`, data.query)

// 获取信息
export const getBillInfo = data =>
    post(`/bill/getInfo/${data.params}`, data.query)

export const getBidDocumentInfo = data =>
    post(`/bill/getBidDocumentInfo/${data.params}`, data.query)

// 借款申请
export const loanRequest = data =>
    fetch(`/task/finance/loan/${data}`)

// 还款申请
export const repaymenApply = data =>
    fetch(`/task/finance/repaymen/${data}`)

// taskApproval
export const taskApproval = data =>
    fetch(`/task/finance/loan/taskApproved/${data}`)

// getLoanData
export const getLoanData = data =>
    post(`/task/finance/loan/listFindPage/${data.params}`, data.query)

// 获取到账登记列表
export const getAccountList = data =>
    post('/registerConfirm/listPageRechargeRegisterConfirm', data)

// 关联ok
export const binding = data =>
    post('/registerConfirm/binding', data)

// 用户机构查询
export const getUserOrg = data =>
    fetch(`/registerConfirm/getInfo/${data}`)

// getReport 
export const getReport = data =>
    post('/report/sys/getReport', data)

// 添加
export const insertAccount = data =>
    post('/registerConfirm/insert', data)

// 更新
export const updateAccount = data =>
    post('/registerConfirm/update', data)

// 获取信息
export const getReceivableInfo = data =>
    fetch(`/receivable/getInfo/${data}`)

// recharge
export const getRechargeInfo = data =>
    fetch(`/recharge/getInfo/${data}`)

// 获取列表数据
export const getRefundList = data =>
    post('/task/finance/refund/listPageFindAll', data)

// 获取机构
export const getOrgList = () =>
    fetch('/pms/organization/v1/listUserOrganizationByCompany')

// 获取列表数据
export const getReceivableList = data =>
    post('/receivable/listPageReceivable', data)

// 获取列表数据
export const getRechargeList = data =>
    post('/recharge/listPageRecharge', data)

// 获取列表数据
export const getPutinfo = data =>
    post('/v1/finance/putinfo/input/pageByInfoState', data)

// 作废
export const invalid = data =>
    fetch(`/v1/finance/putinfo/input/invalid/${data}`)






