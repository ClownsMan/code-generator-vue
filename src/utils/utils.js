/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

/**
 * 根据时间判断上中下午
 */
export function timeJudge () {
  const time = new Date().getHours();
  console.log(time, time)
  return time < 12 ? '上午好' : time < 13 ? '中午好' : time < 19 ? '下午好' : '晚上好';
}