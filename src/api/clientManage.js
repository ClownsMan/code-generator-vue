import {
    fetch,
    post
} from '@/utils/request';

// 获取字典
export const directionary = data =>
    post("/dictionary/dictionaryChild", data)

// 获取客户管理列表
export const clientList = data =>
    post("/client_organization/admin/listPageClientOrganization", data)

// 删除客户
export const delClient = data =>
    post("/client_organization/admin/deleteClientOrganization", data)

// 启用禁用
export const isDisabledClient = data =>
    post("/client_organization/admin/updateClientOrganizationState", data)

// 获取客户所有列表
export const listAllClientOrganization = data =>
    post("/client_organization/admin/listAllClientOrganization", data)

// 添加客户
export const insertClient = data =>
    post("/client_organization/admin/insertClientOrganization", data)

// 修改客户
export const updateClient = data =>
    post("/client_organization/admin/updateClientOrganization", data)

// 获取表格数据
export const corporatesList = data =>
    post("/client/admin/listPageClient", data)

// 添加客户
export const insertCorClient = data =>
    post("/client/admin/insertClient", data)

// 修改客户
export const updateCorClient = data =>
    post("/client/admin/updateClient", data)

// 删除客户
export const delCorClient = data =>
    post("/client/admin/deleteClient", data)

// 启用禁用
export const isDisabledCor = data =>
    post("/client/admin/updateClientState", data)

// 获取机构下的部门
export const getInfo = () =>
    fetch('/pms/organization/v1/listUserAdminOrganization')

