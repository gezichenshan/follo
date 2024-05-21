import request from './request'
import type { ServerDateItem } from '@/model'

export function getAvailableDates({ event_type_id, range_start, range_end }: { event_type_id: string, range_start: string, range_end: string }): Promise<{ days: ServerDateItem[] }> {
  return request.get(`/booking/calendar/range?event_type_id=${event_type_id}&range_start=${range_start}&range_end=${range_end}`).then(res => res.data)
}
