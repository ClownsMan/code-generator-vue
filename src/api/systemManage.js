import {
    fetch,
    post,
    del,
    put
} from '@/utils/request';

// 获取部门用户列表
export const getInfo = () =>
    fetch('/pms/organization/v1/listUserAdminOrganization')
// 禁用或启用
export const orgIsDisabled = (data) =>
    post('/department/admin/updateDepartmentState', data)

// 删除
export const dele = (data) =>
    fetch(`/pms/organization/v1/delete/${data}`)

// 提交添加  部门
export const insertDepart = (data) =>
    post('/pms/organization/v1/insert', data)

// 提交更新
export const updateDepart = (data) =>
    post('/department/admin/updateDepartment', data)

// 提交新增  机构
export const insertOrg = (data) =>
    post('/organization/admin/insertOrganization', data)

// 提交更新   
export const updateOrg = (data) =>
    post('/organization/admin/updateOrganization', data)

// 获取表格数据
export const getUserList = (data) =>
    post('/pms/organizationUser/v1/listPageByOrganizationUuid', data)

// 禁用用户
export const disabledUser = (data) =>
    fetch(`/pms/organizationUser/v1/updateState/${data}`)

// 删除用户
export const delUser = data => fetch(`/pms/organizationUser/v1/delete/${data}`)

// 获取用户详情信息
export const getUserInfo = (data) =>
    fetch(`/pms/organizationUser/v1/getInfo/${data}`)

// 新增用户
export const insertUser = (data) =>
    post('/pms/organizationUser/v1/insert', data)

// 修改用户信息
export const updateUser = (data) =>
    post('/pms/organizationUser/v1/update', data)

// 获取字典
export const getMajorList = data =>
    post('/dictionary/dictionaryChild', data)

// 获取资格证
export const getMajor = (data) =>
    post('/userCertificate/admin/listUserCertificate', data)

// 新增资格证书
export const insterMajor = data =>
    post('/userCertificate/admin/insertUserCertificate', data)

// 修改资格证   保存
export const saveMajor = data =>
    post('/userCertificate/admin/updateUserCertificate', data)

// 删除证书
export const delMajor = data =>
    post('/userCertificate/admin/deleteUserCertificate', data)

// 获取角色列表
export const roleList = data =>
    fetch(`/pms/organizationRole/v1/listByUserAdmin/${data}`)

// 获取机构列表
export const orgList = data =>
    fetch(`/pms/organization/v1/listUserDescendantDepartmentTree/${data}`)

// 获取角色
export const getRoleList = data =>
    post('/role/admin/listRole', data)

// 编辑人员
export const editUser = (data, params) =>
    put(`/sys/userGroup/groupTag/${params}`, data)

// 添加人员
export const insertUserGroup = data =>
    post('/sys/userGroup/groupTag', data)

// 获取部门用户列表
export const orgUserList = data =>
    post("/sys/userGroup/groupTag/treeFind", data)

// 删除分组
export const delGroup = data =>
    del(`/sys/userGroup/groupTag/${data}`)

// 获取人员标签用户列表数据
export const userGroupList = data =>
    post("/sys/userGroup/groupMember/page", data)

// 删除人员标签人员
export const delGroupMember = data =>
    del(`/sys/userGroup/groupMember/${data}`)

// 新增或编辑人员
export const editGroupMember = data =>
    post('/sys/userGroup/groupMember', data)

// 获取角色管理中的表格数据
export const roleTableList = data =>
    post('/pms/organizationRole/v1/pageByUserAdmin', data)

// 新增角色
export const insterRole = data =>
    post("/pms/organizationRole/v1/insert", data)

// 修改角色
export const updateRole = data =>
    post("/pms/organizationRole/v1/update", data)

// 角色授权
export const rolePermission = data =>
    fetch(`/pms/organizationRole/v1/getInfo/${data}`)

// 确认授权
export const permissionSubmit = (data, params) =>
    post(`/pms/organizationRole/v1/insertMenuRelation/${params}`, data)

// 停用启用
export const updateRoleState = data =>
    fetch(`/pms/organizationRole/v1/updateState/${data}`)

// 删除角色
export const deleRole = data =>
    fetch(`/pms/organizationRole/v1/delete/${data}`)

// 分页
export const pagination = data =>
    post('/pms/organizationRole/v1/pageByUserAdmin', data)

// 获取该机构下的组织架构
export const getListOrganization = () =>
    fetch(`/pms/organization/v1/listUserOrganizationByCompany`);

// 子级机构参数分页查询
export const getParameterList = data =>
    post('/v1/finance/organizationValue/groupPageByOrganzationUuidList', data);

// 获取当前机构周期详情
export const getParameterDetails = data =>
    fetch(`/v1/finance/organizationValue/listInfoByOrganzationUuid/${data}`);

// 机构参数添加
export const addParameter = data =>
    post(`/v1/finance/organizationValue/insert`, data);

// 获取模板管理中的清单列表
export const templateList = data =>
    post("/template/organization/listTemplateOrg", data)

// 新增模板
export const insertTemplate = data =>
    post("/template/organization/insertTemplateOrg", data)

// 编辑模板
export const updateTemplate = data =>
    post("/template/organization/updateTemplateOrg", data)

// 减少模板条数
export const removeTemplateNumber = data =>
    post("/template/list/delTemplateList", data)

// 删除模板
export const delTemplate = data =>
    post("/template/organization/delTemplateOrg",
        data)

// 获取流水号页面
export const reportList = data =>
    post("/report/sys/selectReport", data)

// 删除流水号规则
export const delReport = data =>
    post("/report/sys/deleteResport", data)

// 添加流水号规则
export const insertReport = data =>
    post("/report/sys/insertReport", data)

// 修改流水号规则
export const updateReport = data =>
    post("/report/sys/updateReport", data)

// 获取流水账号类型
export const reportType = data =>
    post("/reportType/admin/selectAllReportType", data)

// 输入初始值之后预览流水号
export const previewReport = data =>
    post("/report/sys/genTemReportNumber", data)

// 点击响应的部门时查询是否有模板
export const projectNodeTemplate = data =>
    post("/projectNodeTemplate/sys/selectFind", data)

// 添加报告类型
export const insertTemplateType = data =>
    post("/projectNodeTemplate/sys/saveAllNodeTemplate", data)

// 修改报告类型
export const updateTemplateType = data =>
    post("/projectNodeTemplate/sys/updateAllNodeTemplate", data)

// 获取部门
export const departmentList = data =>
    post("/department/listTree", data)

// 获取报告类型数据
export const reporTypetList = data =>
    post("/reportType/admin/selectPageAll", data)

// 修改报告类型
export const editReportType = data =>
    post("/reportType/admin/updateReportType", data)

// 新增报告号类型
export const insertReportType = data =>
    post("/reportType/admin/insertReportType", data)

// 删除报告号类型
export const delReportType = data =>
    post("/reportType/admin/deleteReportType", data)

// 获取预警天数
export const selecWarn = data =>
    post('/sysWarning/before/selectWarn', data)

// 添加预警
export const insertWarn = data =>
    post("/sysWarning/before/insertWarn", data)

// 修改预警
export const updateWarn = data =>
    post("/sysWarning/before/updateWarn", data)

// 获取流程配置表格数据
export const processTable = data =>
    post('/task/core/taskDefinePage', data)

// 删除流程配置
export const delProcessConfig = data =>
    del(`/task/core/taskDefine?uuid=${data}`)

// 分页
export const flowConfigPage = data =>
    post("/task/core/taskDefinePage", data)

// 获取流程类型数据
export const flowTypeConfig = data =>
    post("/processType/process/selectAllProcessType", data)

// 获取节点信息
export const nodeInfo = data =>
    post("/process/process/selectAllProcess", data)

// 更新节点信息
export const updateNodeInfo = data =>
    post("/process/process/updateProcess", data)

// 获取默认属性
export const taskDefineRelation = data =>
    fetch(`/task/core/taskDefineRelation?defineUuid=${data}`)

export const taskDefine = data =>
    fetch(`/task/core/taskDefine?uuid=${data}`)

// 修改默认属性
export const updateTaskDefine = data =>
    post('/task/core/taskDefine', data)

// 编辑默认属性
export const editTaskDefine = data =>
    put('/task/core/taskDefine', data)

// 获取当前工作组的所属部门
export const getWorkOrg = data =>
    fetch(`/sys/userGroup/groupMember/deparment/${data}`)

// 获取流程模板主要信息
export const getFlowMain = data =>
    fetch(`/task/core/taskDefine?uuid=${data}`);

// 获取流程模板节点信息
export const getFlowNodeList = data =>
    fetch(`/task/core/taskDefineRelation?defineUuid=${data}`);


