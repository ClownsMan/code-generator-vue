// 获取不同的表单元素的基本配置
import { inputOptions } from '../control/Input';
import { selectOptions } from '../control/Select';
import { gridOptions } from '../control/Grid';

const formStr = [
  {
    name: '输入框',
    el: 'a-input',
    options: inputOptions
  },
  {
    name: '选择器',
    el: 'a-select',
    options: selectOptions
  },
  {
    name: '时间选择器',
    el: 'a-date-picker'
  },
  {
    name: '栅格',
    el: 'grid',
    options: gridOptions
  }
];

export default formStr;