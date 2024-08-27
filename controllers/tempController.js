import { materiaModel } from "../model/materiaModel.js"
import {validateMateria, validatePartialMateria} from '../Schemas/materiasSchema.js'

export class materiaController {
    static async getAll(req, res) {
        try { const materias = await materiaModel.getAll()
        res.json(materias)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todas las materias", error})
        }
    }

    static async getById (req, res) {
        try {
        const { id } = req.params
        const materia = await materiaModel.getById({ id })
        if (materia) {
            return res.json(materia)}
        res.status(400).json({message :"Materia no encontrada"})
        }
        
        catch(error) {
            res.status(500).json({ message: "Error al obtener la materia", error})
        }
    }

    static async create (req, res) {
        try {
        const result = validateMateria(req.body);
        
        if (result.error){
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const newMateria = await materiaModel.create({ input: result.data })
        res.status(201).json(newMateria)
        }

        catch(error) {
            res.status(500).json({ message: "Error al crear la materia", error})
        }
    }

    static async update(req, res){
        try {
            const { id } = req.params;
            const result = validatePartialMateria(req.body);
            if (result.error) {
            return res.status(400).json({error :JSON.parse(result.error.message)})
            }
            const updatedMateria = await materiaModel.update({ id, input })
            return res.json(updatedMateria);
         }
        
        catch(error) {
            res.status(500).json({ message: "Error al actualizar la materia", error})
        }
    }


    static async delete(req, res){
      try {
            const { id } = req.params /// <-- saca bien los datos
            const result = await materiaModel.delete({ id })
            if (result === false){
            res.status(400).json({ message :"No se encontro la materia a eliminar" })
             }
        return res.json({ message:"Materia eliminada" })
      }
      catch(error) {
        res.status(500).json({ message: "Error al eliminar la materia", error})
      }  
    }
  }
