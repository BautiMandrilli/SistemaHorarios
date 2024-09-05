import { fechaClaseModel } from "../model/fechaClaseModel.js";
import { validateFClase, validatePartialFClase } from "../Schemas/fechaClaseSchema.js";

export class fechaClaseController {
    static async getAll(req, res) {
        try { const fechaClases = await fechaClaseModel.getAll()
        res.json(fechaClases)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todos los fechaClases", error})
        }
    }

    static async getById (req, res) {
        try {
        const { id } = req.params
        const fechaClase = await fechaClaseModel.getById({ id })
        if (fechaClase) {
            return res.json(fechaClase)}
        res.status(400).json({message :"fechaClase no encontrada"})
        }
        
        catch(error) {
            res.status(500).json({ message: "Error al obtener la fechaClase", error})
        }
    }

    static async create (req, res) {
        try {
        const result = validateFClase(req.body);
        console.log(result)
        
        if (result.error){
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const newfechaClase = await fechaClaseModel.create(result.data)
        
        res.status(201).json(newfechaClase)
        }

        catch(error) {
            res.status(500).json({ message: "Error al crear la fechaClase", error})
        }
    }

    static async update(req, res){
        try {
            const { id } = req.params;
            const result = validatePartialFClase(req.body);
            if (result.error) {
            return res.status(400).json({error :JSON.parse(result.error.message)})
            }
            const updatedfechaClase = await fechaClaseModel.update({ id, input: result.data })
            return res.json(updatedfechaClase);
         }
        
        catch(error) {
            res.status(500).json({ message: "Error al actualizar la fechaClase", error})
        }
    }


    static async delete(req, res){
      try {
            const { id } = req.params 
            const result = await fechaClaseModel.delete({ id })
            if (result === false){
            res.status(400).json({ message :"No se encontro la fechaClase a eliminar" })
             }
        return res.json({ message:"fechaClase eliminada" })
      }
      catch(error) {
        res.status(500).json({ message: "Error al eliminar la fechaClase", error})
      }  
    }
  }
