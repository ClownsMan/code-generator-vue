import { fetch, post } from '@/utils/request';

// 登录
export const login = data =>
post('/pms/login/v1/organizationUserLogin', data)

// 登出
export const logout = data =>
get('/user/toLogin/user/toLoginOut')

// 获取菜单
export const getMenu = () =>
post('/pms/menu/v1/listUserFind')

// 获取个人信息
export const getInfo = () =>
post('/pms/organizationUser/v1/getInfo/' + null)

// 获取字典
export const dictionary = data =>
post("/dictionary/dictionaryChild", data)

// 查询当前组织下的人员列表
export const getOrgUser = () =>
fetch("/pms/organization/v1/listUserAdminOrganization")

// 通过组织的uuid查询下级的所有信息重新赋值
export const userListByOrgId = data =>
fetch(`/pms/organizationUser/v1/listByOrganizationUuid/${data}`)

// 根据人员的数组然后获取人员信息
export const getUserInfo = data =>
post('/pms/organizationUser/v1/listInfo', data)

// checkIsNextProcess
export const checkIsNextProcess = data =>
fetch(`/task/core/checkIsNextProcess?nodeUuid=${data}`)

// 梯形人员选择
export const userListTree = data =>
post("/department/listTree", data)

// 查询流程是否审批
export const selectInstance = data =>
post("/task/core/selectInstance", data)

// 点击确定按钮  通过
export const passApprove = data =>
post("/workbench/node/examineAndApprove/pass", data)

// 失败
export const failApprove = data =>
post("/workbench/node/examineAndApprove/fail", data)

// 流程配置
export const taskDefineRelation = data =>
fetch(`/task/core/taskDefineRelation?defineUuid=${data}`)

export const selectInstanceRelation = data =>
post('/task/core/selectInstanceRelation', data)

// 获取当前部门工作组的所属部门
export const groupMemberDepartment = data =>
fetch(`/sys/userGroup/groupMember/deparment/${data}`)

// 获取工作组列表
export const groupList = data =>
post('/sys/userGroup/groupTag/treeFind', data)

// 获取当前人的所属部门
export const listUserDescendantDepartmentTree = data =>
fetch(`/pms/organization/v1/listUserDescendantDepartmentTree/${data}`)

// 查询流程模板的具体信息
export const taskDefine = data =>
fetch(`/task/core/taskDefine?uuid=${data}`)

// 新的模板查询
export const newTaskDefine = data =>
fetch(`/task/user/taskDefine?backstageOrganization=${data.orgId}&belongType=${data.flowType}`)

// 查看所有审批过的流程记录
export const lookTaskLog = data =>
    post('/task/log/listFind', data)

// 获取合同
export const projectList = data =>
    post('/project/listProject', data)

