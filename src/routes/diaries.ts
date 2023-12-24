import express from 'express' // ESModules
import * as diaryServices from '../services/diaryServices' // Usando todo de diaryServices.ts
import toNewDiaryEntry from '../utils/utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

// =============   Crear DATO   ==================
// Seguimos usando 'diaryServices' , y además vamos a usar una funcion personalizada en Utils, Vamos a CONTROLAR LOS TIPOS DE DATOS, ingresados por el cliente.
router.post('/', (req, res) => {
  // Hay que validar los tipos de datos, que se pueden Aceptar, ya que Typescript no lo sabe
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
  // El objeto desestructurado de abajo, si no lo validamos antes, seran del tipo "any".
})

// Usando la funcion 'findById', de Services.
// parsear el REQ, de string a number.
router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

export default router
