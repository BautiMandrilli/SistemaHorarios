import { carreraModel } from "../model/carreraModel.js";
import { validateCarrera, validatePartialCarrera } from "../Schemas/carreraSchema.js";

export class carreraController {
    static async getAll(req, res) {
        try { const carreras = await carreraModel.getAll()
        res.json(carreras)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todos los carreras", error})
        }
    }

    static async getById (req, res) {
        try {
        const { id } = req.params
        const carrera = await carreraModel.getById({ id })
        if (carrera) {
            return res.json(carrera)}
        res.status(400).json({message :"carrera no encontrada"})
        }
        
        catch(error) {
            res.status(500).json({ message: "Error al obtener la carrera", error})
        }
    }

    static async create (req, res) {
        try {
        const result = validateCarrera(req.body);
        console.log(result)
        
        if (result.error){
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const newcarrera = await carreraModel.create(result.data)
        
        res.status(201).json(newcarrera)
        }

        catch(error) {
            res.status(500).json({ message: "Error al crear la carrera", error})
        }
    }

    static async update(req, res){
        try {
            const { id } = req.params;
            const result = validatePartialCarrera(req.body);
            if (result.error) {
            return res.status(400).json({error :JSON.parse(result.error.message)})
            }
            const updatedcarrera = await carreraModel.update({ id, input: result.data })
            return res.json(updatedcarrera);
         }
        
        catch(error) {
            res.status(500).json({ message: "Error al actualizar la carrera", error})
        }
    }


    static async delete(req, res){
      try {
            const { id } = req.params 
            const result = await carreraModel.delete({ id })
            if (result === false){
            res.status(400).json({ message :"No se encontro la carrera a eliminar" })
             }
        return res.json({ message:"carrera eliminada" })
      }
      catch(error) {
        res.status(500).json({ message: "Error al eliminar la carrera", error})
      }  
    }
  }
