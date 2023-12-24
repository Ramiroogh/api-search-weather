import { Weather, Visibility } from './enums'

// Tipos para mi Json, en './services/diaries.json'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

// ----- Este tipo, nos sirve para crear nueva entrada, desde Services -------
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
