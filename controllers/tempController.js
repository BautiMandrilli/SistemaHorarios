import { materiaModel } from "../model/materiaModel.js"
import {validateMateria, validatePartialMateria} from '../Schemas/materiasSchema.js'

export class materiaController {
    static async getAll(req, res) {
        const { Anio } = req.query
        const materias = await materiaModel.getAll({ Anio })
        res.json(materias)
    }

    static async getById (req, res) {
        const { id } = req.params
        const materia = await materiaModel.getById({ id })
        if (materia) return res.json(materia)
        res.status(400).json({message :"Materia no encontrada"})
    }

    static async create (req, res) {
        const result = validateMateria(req.body);
        if (result.error){
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        const newMateria = await materiaModel.create({ input : result.data })
        res.status(201).json(newMateria)
        
    }

    static async update(req, res){
        const { id } = req.params;

    const result = validatePartialMateria(req.body);
    if (result.error) {
        return res.status(400).json({error :JSON.parse(result.error.message)})
    }
    const updatedMateria = await materiaModel.update({ id, input })
    return res.json(updatedMateria);
    }

    static async delete(req, res){
        const {id} = req.params
        const result = await materiaModel.delete({ id })
        if (result === false){
            res.status(400).json({ message :"No se encontro la materia a eliminar" })
        }
        return res.json({ message:"Materia eliminada" })
    }
}