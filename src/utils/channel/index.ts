import { PATH_CHANNEL_MAP, ChannelType } from './config'

/**
 * 是否是合法渠道
 * @param value 传入的渠道（config的键而不是值）
 * @returns boolean
 */
function isLegalChannel(value: string): value is ChannelType {
  const values = Object.keys(PATH_CHANNEL_MAP)
  if (values.includes(value)) return true
  else return false
}

/**
 * 获取渠道
 * @returns 渠道（config的键而不是值）
 */
function getChannel(): ChannelType | undefined {
  // URLSearchParams只支持现代浏览器，因为用了VUE3就默认只支持现代浏览器
  const urlParams = new URLSearchParams(window.location.search)
  const localChannel = urlParams.get('pathchannel')
  if (typeof localChannel === 'string' && isLegalChannel(localChannel)) return localChannel
  else return undefined
}

// 渠道
const CHANNEL = getChannel()
const SERVER_CHANNEL = CHANNEL ? PATH_CHANNEL_MAP[CHANNEL] : undefined

export { CHANNEL, SERVER_CHANNEL, isLegalChannel }
