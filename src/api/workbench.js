import { fetch, post } from '@/utils/request';

// 获取表格数据
export const tableData = data =>
    post(`/workbench/instance/pageFindInstance/${data.params}`, data.data)

// 作废
export const prohibit = data =>
    post('/workbench/instance/updateState/prohibit', data)

// 催办 
export const urge = data =>
    post("/workbench/instance/urge", data)

// 通过审批
export const passApproval = data =>
    post('/workbench/node/examineAndApprove/pass', data)

// 审批不通过
export const failApproval = data =>
    post('/workbench/node/examineAndApprove/fail', data)

// checkIsNextProcess
export const checkIsNextProcess = data =>
    fetch(`/task/core/checkIsNextProcess?nodeUuid=${data}`)

// 梯形人员选择
export const getProjectLeader = data =>
    post('/department/listTree', data)

// 获取消息中心
export const msgList = data =>
    post('/notice/body/listPage', data)

// 添加消息
export const insertMsg = data =>
    post('/notice/body/insertMsg', data)

// 查看消息
export const lookMsg = data =>
    post('/notice/body/lookMsg', data)

// 删除消息
export const delMsg = data =>
    post('/notice/body/delMsg', data)

// 获取表格数据
export const reportedList = data =>
    post("/task/finance/loan/listFindPage", data)

// 检验是否重复
export const checkRepeat = data =>
    fetch(`/task/finance/expense/checkRepeatBillNumber?organization=${data.orgId}&billNumber=${data.value}`)

// 获取表格数据
export const dedicatedList = data =>
    post('/task/finance/expense/charge/listFindPage', data)

// 获取表格数据 
export const businessTripList = data =>
    post('/task/finance/businessTrip/page', data)

// 获取合同
export const projectList = data =>
    post("/project/listProject", data)

// 行政用章申请
export const adminiChapter = data =>
    post('/taskAdministrativeSeal/insert', data)

// 默认选择部门和申请人
export const getInfo = data =>
    fetch(`/pms/organizationUser/v1/getInfo/${data}`)

// 默认收款信息
export const defineInvoiceInfo = data =>
    fetch(`/pms/organization/v1/getOrganizationInvoice/${data}`)

// 提交
export const loan = data =>
    post("/task/finance/loan", data)

// 提交
export const businessTrip = data =>
    post("/task/finance/businessTrip", data)

// 提交
export const expense = data =>
    post('/task/finance/expense', data)

// 提交
export const claim = data =>
    post("/task/finance/claim", data)

// 委托单位
export const listAllClientOrganization = data =>
    post('/client_organization/admin/listAllClientOrganization', data)

// 获取委托单位
export const selectCostProjectUnit = data =>
    post('/costProjectUnit/admin/selectCostProjectUnit', data)

// 获取项目编号
export const selectReportDocument = data =>
    post("/reportNumber/report/selectReportDocument", data)

// 获取invoice
export const invoiceList = data =>
    post("/task/finance/invoice/page", data)

// 获取合同列表
export const contractList = data =>
    post('/contract/admin/listContract', data)

// 提交invoice
export const invoiceSubmit = data =>
    post("/task/finance/invoice", data)

// 提交  insertRcPaay
export const insertRcPay = data =>
    post("/bill/insertRcPay", data)

// 获取机构
export const listUserOrganizationByCompany = () =>
    fetch('/pms/organization/v1/listUserOrganizationByCompany')

// 查询项目付款的详细信息
export const billInfo = data =>
    fetch(`/bill/getInfo/${data}`)

// getRefund
export const getRefund = data =>
    fetch(`/task/finance/refund/${data}`)

// 提交 Refund
export const refundSubmit = data =>
    post('/task/finance/refund', data)

// repaymen
export const repaymen = data =>
    post("/task/finance/repaymen", data)

// 选择差旅费
export const businessTripPlan = data =>
    fetch(`/task/finance/businessTrip/plan/${data}`)

// 添加差旅费
export const insertreimbursement = data =>
    post('/task/finance/reimbursement', data)

// 工资申请提交
export const insertSalary = data =>
    post("/salary/insert", data)

// 获取信息
export const gettaskAdministrativeSeal = data =>
    fetch(`/taskAdministrativeSeal/getInfo/${data}`)

// 添加确认行政盖章
export const updateStadeProcessInstanceNode = data =>
    post('/processInstanceNode/process/updateStadeProcessInstanceNode', data)

// 查看所有审批过的流程记录
export const lookTaskLog = data =>
    post('/task/log/listFind', data)

// 提交用章文件
export const handleProcessChapter = data =>
    post("/processChapter/task/selectChapter", data)

// 获取数据
export const getLoanData = data =>
    fetch(`/task/finance/loan/${data}`)

// 获取详情信息
export const getBusinessTripDetail = data =>
    fetch(`/task/finance/businessTrip/${data}`)

// 获取expense详情信息
export const getExpenseDetail = data =>
    fetch(`/task/finance/expense/${data}`)

// 获取claim详情信息
export const getClaimDetail = data =>
    fetch(`/task/finance/claim/${data}`)

// taskApproved
export const taskApproved = data =>
    fetch(`/task/finance/loan/taskApproved/${data}`)

// 获取repaymen详细信息
export const getRepaymenDetail = data =>
    fetch(`/task/finance/repaymen/${data}`)

// 获取表格数据
export const getReportedList = data =>
    post(`/task/finance/loan/listFindPage/${data.params}`, data.query)

// 获取reimbursement详细信息
export const getReimbursementDetail = data =>
    fetch(`/task/finance/reimbursement/${data}`)

// 添加
export const insertChapter = data =>
    post("/processChapter/task/insertChapter", data)

// 获取保证金申请信息
export const getBillInfo = data =>
    post(`/bill/getInfo/${data.params}`, data.query)

// 获取充值详情信息
export const getRechargeInfo = data =>
    fetch(`/recharge/getInfo/${data}`)

// 获取工资申请详情信息
export const getSalaryInfo = data =>
    fetch(`/salary/getInfo/${data}`)

// selectProjectBidApply
export const selectProjectBidApply = data =>
    post('/bidApply/selectProjectBidApply', data)

// getBidEnroll
export const getBidEnroll = data =>
    post('/bidEnroll/getBidEnroll', data)

// 回款申请详情
export const getReceivableInfo = data =>
    fetch(`/receivable/getInfo/${data}`)

// 获取项目开票详情信息
export const getInvioceDetail = data =>
    fetch(`/task/finance/invoice/${data}`)

// selectAllProcessInstanceNode
export const selectAllProcessInstanceNode = data =>
    post("/processInstanceNode/process/selectAllProcessInstanceNode", data)

// 获取提款申请信息
export const getDrewingsInfo = data =>
    post(`/drawings/getInfo/${data}`)


