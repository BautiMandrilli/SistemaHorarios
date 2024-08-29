import { tipoCorModel } from "../model/tipoCorModel.js";
import { validatetipoCor, validatePartialtipoCor } from "../Schemas/tipoCorSchema.js";

export class tipoCorController {
    static async getAll(req, res) {
        try { const tipoCors = await tipoCorModel.getAll()
        res.json(tipoCors)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todos los tipoCors", error})
        }
    }

    static async getById (req, res) {
        try {
        const { id } = req.params
        const tipoCor = await tipoCorModel.getById({ id })
        if (tipoCor) {
            return res.json(tipoCor)}
        res.status(400).json({message :"tipoCor no encontrada"})
        }
        
        catch(error) {
            res.status(500).json({ message: "Error al obtener la tipoCor", error})
        }
    }

    static async create (req, res) {
        try {
        const result = validatetipoCor(req.body);
        console.log(result)
        
        if (result.error){
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const newtipoCor = await tipoCorModel.create(result.data)
        
        res.status(201).json(newtipoCor)
        }

        catch(error) {
            res.status(500).json({ message: "Error al crear la tipoCor", error})
        }
    }

    static async update(req, res){
        try {
            const { id } = req.params;
            const result = validatePartialtipoCor(req.body);
            if (result.error) {
            return res.status(400).json({error :JSON.parse(result.error.message)})
            }
            const updatedtipoCor = await tipoCorModel.update({ id, input: result.data })
            return res.json(updatedtipoCor);
         }
        
        catch(error) {
            res.status(500).json({ message: "Error al actualizar la tipoCor", error})
        }
    }


    static async delete(req, res){
      try {
            const { id } = req.params 
            const result = await tipoCorModel.delete({ id })
            if (result === false){
            res.status(400).json({ message :"No se encontro la tipoCor a eliminar" })
             }
        return res.json({ message:"tipoCor eliminada" })
      }
      catch(error) {
        res.status(500).json({ message: "Error al eliminar la tipoCor", error})
      }  
    }
  }
