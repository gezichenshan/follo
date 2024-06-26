import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

/**
 * 获取传入时间当月并且不早于Date.now()的日期
 * @param date
 * @returns string
 */
export function getMonthStartAvailableDateOfGivenDate(date: string | Dayjs) {
  const theMonthFirstDay = dayjs(date).startOf('month')

  const now = dayjs()
  if (theMonthFirstDay.isBefore(now)) {
    return now.format('YYYY-MM-DD')
  }
  return theMonthFirstDay.format('YYYY-MM-DD')
}
/**
 * 获取传入带时间该月第一天的日期
 * @param date
 * @returns string
 */
export function getMonthStartDateOfGivenDate(date: string | Dayjs) {
  return dayjs(date).startOf('month').format('YYYY-MM-DD')
}
/**
 * 获取传入带时间该月最后一天的日期
 * @param date
 * @returns string
 */
export function getMonthEndDateOfGivenDate(date: string | Dayjs) {
  return dayjs(date).endOf('month').format('YYYY-MM-DD')
}

function parseDayToCnFormat(day: number) {
  if (day === 0)
    return 6
  else
    return day - 1
}
/**
 * 获取传入时间该月第一天的星期几
 * 0代表星期一
 * @param date
 * @returns string
 */
export function getMonthStartWorkingDayOfGivenDate(date: string | Dayjs) {
  return parseDayToCnFormat(dayjs(date).startOf('month').day())
}
/**
 * 获取传入时间该月最后一天的星期几
 * 0代表星期一
 * @param date
 * @returns string
 */
export function getMonthEndWorkingDayOfGivenDate(date: string | Dayjs) {
  return parseDayToCnFormat(dayjs(date).endOf('month').day())
}

/**
 * 获取传入时间的星期几
 * 0代表星期一
 * @param date
 * @returns string
 */
export function getWorkingDayOfGivenDate(date: string | Dayjs) {
  return parseDayToCnFormat(dayjs(date).day())
}

/**
 * 获取YYYY-MM-DD中的D
 * @param date h
 * @returns string
 */
export function getDayFromDate(date: string) {
  if (!date)
    return
  return dayjs(date).format('D')
}

/**
 * 获取YYYY-MM-DD中的D并变成星期几
 * @param date h
 * @returns string
 */
export function getFormatedDayFromDate(date?: string) {
  const dayMap = ['日', '一', '二', '三', '四', '五', '六']
  if (!date)
    return

  return `星期${dayMap[dayjs(date).day()]}`
}
