/**
 * vant采用了按需工程化引入，大多数组件可以不注册直接使用
 * 例外：showToast、showDialog、showNotify、showImagePreview
 * 例外的使用方式：业务页面 import方法（如：import { showToast } from 'vant'）
 */

// Toast
import 'vant/es/toast/style'

// Dialog
import 'vant/es/dialog/style'

// Notify
import 'vant/es/notify/style'

// ImagePreview
import 'vant/es/image-preview/style'
