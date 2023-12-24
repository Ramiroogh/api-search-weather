import { NewDiaryEntry } from '../types'
import { Weather, Visibility } from '../enums'

// ----------- Validar Todos los Params del Json del lado del cliente -----------

// comentario del Json, parsear
const parseComment = (commentFromRequest: any): string => {
  // Validamos que el comentario, solo sea un string.
  if (typeof commentFromRequest !== 'string') {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  // Con "Weather" ya sabemos que devuelve un string, pero no cualquier string, solo lo que hemos tipado.
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing Visibility')
  }
  return visibilityFromRequest
}
// ------------ Validaciones que se usan en los Parseos -----------

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const isWeather = (params: any): boolean => {
  return Object.values(Weather).includes(params)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
  // retorna TRUE.
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

//    =========== CREAR REGISTRO ===========
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  // Lo que hemos hecho aca, para finalizar es: Hacer muchas tareas en runtime, por eso debemos controlarlo nosotros.
  // Hemos Validado y parseado los datos, asi el cliente no agrega cualquier cosa,
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
