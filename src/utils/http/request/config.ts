const BASE_URL = '/'
const TIME_OUT = 10 * 1000

// 后端请求状态码
enum RES_CODE {
  SUCCESS = 0, // 成功
  UNAUTHORIZED = 101, // 未授权
  NOT_LOGIN = 102, // 未登录
  UNBIND = 104, // 微信登录未绑定
  UNCONCERNED = 105, // 未关注公众号访问
  BOUND = 106, // 已绑定其他微信
  ORDER_NOT_EXIST = 2101, // 订单不存在
  CANCELED = -1, // 已取消请求
  PATIENT_BOUND = 201, // 就诊人被绑定
  // ONETHOUSAND历史遗留问题：一般接口走报错toast逻辑，特殊接口（/save）特殊处理当作成功并返回了数据
  ONETHOUSAND = 1000, // 您2022年05月09日已存在相同订单或已超出1个号源的预约限制，请选择其它时段或其它日期的号源。
  RETRY = 429 // 请5秒钟后重试
}

export { BASE_URL, TIME_OUT, RES_CODE }
