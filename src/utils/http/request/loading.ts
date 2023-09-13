import { showLoadingToast, ToastWrapperInstance } from 'vant'
let toastInstance: ToastWrapperInstance

function open() {
  toastInstance = showLoadingToast({
    message: '加载中...',
    type: 'loading',
    forbidClick: true,
    duration: 0
  })
}

function close() {
  if (toastInstance) {
    toastInstance.close()
  }
}

export default {
  open,
  close
}
