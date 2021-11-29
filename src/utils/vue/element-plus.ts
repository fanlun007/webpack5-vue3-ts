import type { App } from 'vue'

import {
  ElButton,
  ElSelect,
  ElCollapseTransition,
  ElSubMenu,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElRow,
  ElCol,
  ElProgress,
  ElDialog,
  ElCheckboxGroup,
  ElCheckbox,
  ElTabs,
  ElTabPane,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElOption,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElDrawer,
  ElMessageBox,
  ElMessage,
  ElLoading,
  ElTag,
  ElTree,
  ElScrollbar,
  ElSwitch,
  ElRadio,
  ElIcon,
  ElPopover,
  ElDescriptions,
  ElDescriptionsItem,
  ElTooltip,
  ElUpload,
  ElBreadcrumb,
  ElBreadcrumbItem,
} from 'element-plus'

const components = [
  ElButton,
  ElSelect,
  ElCollapseTransition,
  ElSubMenu,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElRow,
  ElCol,
  ElProgress,
  ElDialog,
  ElCheckboxGroup,
  ElCheckbox,
  ElTabs,
  ElTabPane,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElOption,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElDrawer,
  ElMessageBox,
  ElMessage,
  ElLoading,
  ElTag,
  ElTree,
  ElScrollbar,
  ElSwitch,
  ElRadio,
  ElIcon,
  ElPopover,
  ElDescriptions,
  ElDescriptionsItem,
  ElTooltip,
  ElUpload,
  ElBreadcrumb,
  ElBreadcrumbItem,
]

const option = {
  size: 'medium',
}

export default function introduceElement(app: App): void {
  components.forEach((component) => {
    app.use(component)
  })
  // eslint-disable-next-line no-param-reassign
  app.config.globalProperties.$ELEMENT = option
}