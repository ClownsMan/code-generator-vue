export default {
  install (Vue) {
    //树形人员处理
    Vue.prototype.$handleTreeUser = function (treeData) {
      treeData.forEach(item => {
        if (item.departmnert) {
          item.selectable = false;
        }
        if (item.user) {
          item.departmnert.forEach(item1 => {
            item1.disableCheckbox = true;
          });
          item.departmnert = [...item.user, ...item.departmnert];
        }
        item.title = item.name;
        item.key = item.userUuid || item.uuid;
        // item.key = item.userUuid || item.organizationUuid;
        item.value = item.userUuid || item.uuid;
        item.children = item.departmnert;

        if (item.children) {
          this.$handleTreeUser(item.children);
        }
      });
      return treeData;
    };
    Vue.prototype.$handleTreeOrg = function (treeData) {
      treeData.forEach(item => {
        if (item.departmnert) {
          item.selectable = true;
        }
        if (item.user) {
          item.departmnert.forEach(item1 => {
            item1.disableCheckbox = true;
          });
          item.departmnert = [...item.user, ...item.departmnert];
        }
        item.title = item.name;
        item.key = item.userUuid || item.uuid;
        // item.key = item.userUuid || item.organizationUuid;
        item.value = item.userUuid || item.uuid;
        item.children = item.departmnert;

        if (item.children) {
          this.$handleTreeUser(item.children);
        }
      });
      return treeData;
    };
    Vue.prototype.$handleTreeOrgNew = function (treeData, dataType = 'org') {
      treeData = Array.isArray(treeData) ? treeData : Array(treeData);
      treeData.forEach(item => {
        item.selectable = dataType === 'org' ? false : true;
        // 用于判断是否是子节点不能再次点击加载
        item.isload = false;
        item.isLeaf = dataType === 'user' ? true : false;
        item.title = item.name;
        item.key = `${item.uuid}`;
        item.value = item.uuid;
        // 判断是否为底层的部门
        if (
          Array.isArray(item.subSet) &&
          item.subSet.length == 0 &&
          item.types === 'department'
        ) {
          item.isLast = true;
        } else {
          item.isLast = false;
        }
        // 处理子节点
        if (item.subSet) {
          this.$handleTreeOrgNew(item.subSet, dataType);
          item.children = item.subSet;
        }
      });
      return treeData;
    };
    Vue.prototype.$selectOrgAddUser = function (
      treeData,
      dataType = 'org',
      showOrgList = []
    ) {
      // treeData = Array.isArray(treeData) ? treeData : Array(treeData);
      treeData.forEach(item => {
        if (item.phone) {
          return;
        }
        // 处理子节点
        if (
          Array.isArray(item.children) &&
          item.children.length > 0 &&
          (item.types === 'department' || item.types === 'company')
        ) {
          this.$selectOrgAddUser(item.children, dataType, showOrgList);
        }
        // 如果编辑状态下将人员赋值
        if (
          Array.isArray(showOrgList) &&
          showOrgList.length > 0 &&
          item.types === 'department'
        ) {
          showOrgList.forEach(itm => {
            let hasPeople = item.children.some(i => i.phone);
            if (itm.uuid === item.uuid && !hasPeople) {
              item.children = [...itm.children, ...item.children];
              item.isload = true;
              return;
            }
          });
        }
      });
      return treeData;
    };
  },
};
