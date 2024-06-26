type AvailableStatus = 'available' | 'unavailable'

export interface DateItem {
  date: string
  spots?: TimeObj[]
  selected?: boolean
  available?: boolean
  isToday?: boolean
}

export interface TimeObj {
  time: string
  invitees_remaining?: number
  selected?: boolean
  available?: boolean
}

export interface ServerDateItem {
  date: string
  spots: ServerTimeItem[]
  status: AvailableStatus
}

export interface ServerTimeItem {
  InviteesRemaining: number
  start_time: string
  status: AvailableStatus
}

export interface EventSchedulingFormData {
  email: string
  event_type_id: string
  name: string
  phone: string
  start_time: string
  note?: string
}
