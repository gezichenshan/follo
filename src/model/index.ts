export interface DayItem {
  date: string
  selected?: boolean
  available?: boolean
  isToday?: boolean
}

export interface TimeObj { id: number, selected: boolean, time: string }
