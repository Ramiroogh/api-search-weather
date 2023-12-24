import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'

// ----------------   J S O N  -------------------------
// Aca estoy usando el JSON, junto a la Interfaz Tipada.
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

// Se debe mapear, porque Typescript no sabe que el objeto tiene un tipado especifico, en el que solo, unos tipos son los que seran accesibles.
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

// ------------  Buscar Entrada por ID  ------------
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

// ------------  Crear Entrada nueva  --------------

// Primera manera, CON MUCHO CODIGO, SIN REFACTORIZAR
// export const addEntry = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
//   const newDiaryEntry = {
//     // Ordena la nueva entrada de forma consecutiva
//     id: Math.max(...diaries.map(d => d.id)) + 1,
//     date,
//     weather,
//     visibility,
//     comment
//   }
//   diaries.push(newDiaryEntry)
//   return newDiaryEntry
// }

// --- REFACTORIZADO ---
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
