import _ from 'lodash'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import * as TimeUtil from '@/utils/time'

const dateStringFormat = 'YYYY-MM-DD'
export function getTableDateTdArr(date: string | Dayjs): { day: number, workingDay?: number, isToday?: boolean }[][] {
  const startDateOfMonth = TimeUtil.getMonthStartDateOfGivenDate(date)
  const startDayOfMonth = TimeUtil.getMonthStartWorkingDayOfGivenDate(date)
  const endDateOfMonth = TimeUtil.getMonthEndDateOfGivenDate(date)
  const endDayOfMonth = TimeUtil.getMonthEndWorkingDayOfGivenDate(date)

  const monthWholeDaysLen = dayjs(endDateOfMonth).diff(dayjs(startDateOfMonth), 'd') + 1

  const LastWeekDay = 6// 星期日
  const arr = []
  // 填充本月1号之前的
  for (let i = 0; i < startDayOfMonth; i++) {
    arr.push({ day: null })
  }
  // 填充本月的
  for (let i = 1; i <= monthWholeDaysLen; i++) {
    const theDateInCurrentLoop = dayjs(startDateOfMonth).add(i - 1, 'd')
    const isToday = dayjs().format(dateStringFormat) === theDateInCurrentLoop.format(dateStringFormat)
    const workingDay = TimeUtil.getWorkingDayOfGivenDate(theDateInCurrentLoop)
    arr.push({ day: i, workingDay, isToday })
  }
  // 填充本月之后的
  for (let i = 0; i < LastWeekDay - endDayOfMonth; i++) {
    arr.push({ day: null })
  }

  return _.chunk(arr, 7)
}
