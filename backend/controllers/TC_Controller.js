import { TC_Model } from "../model/TC_Model.js";
import { validateTC, validatePartialTC } from "../Schemas/TC_Schema.js";

export class TC_Controller {
    static async getAll(req, res) {
        try { const TCs = await TC_Model.getAll()
        res.json(TCs)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todos los TCs", error})
        }
    }

    static async getById (req, res) {
        try {
        const { id } = req.params
        const TC = await TC_Model.getById({ id })
        if (TC) {
            return res.json(TC)}
        res.status(400).json({message :"TC no encontrado"})
        }
        
        catch(error) {
            res.status(500).json({ message: "Error al obtener el TC", error})
        }
    }

    static async create (req, res) {
        try {
        const result = validateTC(req.body);
        console.log(req.body)
        console.log(result)
        if (result.error){
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const newTC = await TC_Model.create(result.data)
        res.status(201).json(newTC)
        }

        catch(error) {
            res.status(500).json({ message: "Error al crear el TC", error})
        }
    }

    static async update(req, res){
        try {
            const { id } = req.params;
            const result = validatePartialTC(req.body);
            if (result.error) {
            return res.status(400).json({error :JSON.parse(result.error.message)})
            }
            const updatedTC = await TC_Model.update({ id, input: result.data })
            return res.json(updatedTC);
         }
        
        catch(error) {
            res.status(500).json({ message: "Error al actualizar el TC", error})
        }
    }


    static async delete(req, res){
      try {
            const { id } = req.params /// <-- saca bien los datos
            const result = await TC_Model.delete({ id })
            if (result === false){
            res.status(400).json({ message :"No se encontro el TC a eliminar" })
             }
        return res.json({ message:"TC eliminado" })
      }
      catch(error) {
        res.status(500).json({ message: "Error al eliminar el TC", error})
      }  
    }
  }
