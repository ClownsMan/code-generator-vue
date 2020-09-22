import { fetch, post } from '@/utils/request';

// 获取字典
export const dictionary = data =>
    post('/dictionary/dictionaryChild', data)

// 充值账单分页
export const getListPageRecharge = data =>
    post(`/recharge/listPageRecharge`, data);

// 获取该机构下的组织架构
export const getListOrganization = () =>
    fetch(`/pms/organization/v1/listUserOrganizationByCompany`);

// 获取资金总览
export const getOverview = data =>
    post(`/account/money/overview/${data.id}`, {
        createTime: data.createTime,
        createTimeYear: data.createTimeYear
    });

// 添加提款申请
export const drawingsInsert = data =>
    post(`/drawings/insert`, data);

// 获取机构下的部门
export const getOrgDepartment = () =>
    fetch('/pms/organization/v1/listUserAdminOrganization')

// 默认选择部门和申请人
export const defineApplyUserOrg = data =>
    fetch(`/pms/organizationUser/v1/getInfo/${data}`)

// 默认收款信息
export const defineInvoiceInfo = data =>
    fetch(`/pms/organization/v1/getOrganizationInvoice/${data}`)

// 添加回款申请
export const receivableInsert = data =>
    post(`/receivable/insert`, data);

// 获取机构信息
export const getOrgInfo = data =>
    fetch(`/v1/finance/organizationValue/getInfo/${data}`)

// 获取项目
export const getProjectList = data =>
    post('/project/listProject', data)

// 充值
export const recharge = data =>
    post(`/recharge/insert`, data);

// 获取收支详情
export const getDetails = data =>
    post(`/account/money/detail`, data);

// 获取预冻结详情
export const getPrefreezingDetails = data =>
    post(`/prefreezing/listPageprefreezing`, data);

// 获取收支分析
export const getAnalysis = data =>
    post(`/account/money/analyze`, data);

// 获取顶级机构资金总览
export const getOverviewForHead = data =>
    post(`/account/money/general/${data.id}`, {
        createTime: data.createTime,
        createTimeYear: data.createTimeYear
    });

// overview
export const overview = data =>
    post('/account/prepaidManage/overview', data)

// 详情
export const overviewDetail = data =>
    post('/account/prepaidManage/detail', data)

// 获取表格数据
export const tableData = data =>
    post('/task/finance/invoice/receivable/page', data)

// 充值账单分详情
export const getRechargedetail = data =>
    fetch(`/recharge/getInfo/${data}`);

// 查询税务
export const taxAssetsSelect = data =>
    fetch(`/account/tax/overview/${data}`);



