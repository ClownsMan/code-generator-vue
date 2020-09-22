import {
    fetch,
    post
} from '@/utils/request';

// 获取字典
export const dictionary = data =>
    post("/dictionary/dictionaryChild", data)

// 获取委托单位
export const getEntruUnit = data =>
    post("/client_organization/admin/listAllClientOrganization", data)

// 催办
export const rush = data =>
    post('/workbench/instance/urge', data)

// 获取合同管理列表数据
export const getContractList = data =>
    post("/contract/admin/listPageContract", data)

// 发起审批
export const initiateApproval = data =>
    post("/workbench/instance/updateStateS/start", data)

// 审批通过
export const approvalPass = data =>
    post("/workbench/node/examineAndApprove/pass", data)

// 审批不通过
export const approvalFail = data =>
    post("/workbench/node/examineAndApprove/fail", data)

// 作废
export const invalidate = data =>
    post("/workbench/instance/updateState/prohibit", data)

// 检查是下一个程序
export const checkIsNextProcess = data =>
    fetch(`/task/core/checkIsNextProcess?nodeUuid=${data}`)

// 获取合同列表数据
export const contractInfo = data =>
    post('/contract/admin/listContract', data)

// 获取客户列表
export const clientList = data =>
    post('/client/admin/listClient', data)

// 查询所有的审批过的流程记录
export const approvalProcess = data =>
    post('/task/log/listFind', data)

// 查看关联的项目
export const contractProjectList = data =>
    post('/project/listContractProject', data)

// 获取流水号
export const getReport = data =>
    post("/report/sys/getReport", data)

// 获取项目列表
export const projectList = data =>
    post("/project/listProject", data)

// 添加合同
export const insertContract = data =>
    post("/contract/admin/insertContract", data)

// 修改合同
export const updateContract = data =>
    post("/contract/admin/updateContract", data)

// 保存流水号
export const saveReport = data =>
    post("/report/sys/saveReport", data)






