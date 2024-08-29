import { matXcarModel } from "../model/matXcarModel.js";
//import { validatematXcar, validatePartialmatXcar } from "../Schemas/matXcarSchema.js";

export class matXcarController {
    static async getAll(req, res) {
        try { const matXcars = await matXcarModel.getAll()
        res.json(matXcars)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todos los matXcars", error})
        }
    }

    static async getByFilter (req, res) {
        try {
        const { id } = req.params
        
        const matXcar = await matXcarModel.getByFilter( {idMat: id, idCar: id })
        if (matXcar) {
            return res.json(matXcar)}
        res.status(400).json({message :"matXcar no encontrada"})
        }
        
        catch(error) {
            res.status(500).json({ message: "Error al obtener la matXcar", error})
        }
    }
    static async delete(req, res){
        try {
              const input = req.params /// <-- saca bien los datos
              const result = await TC_Model.delete({input})
              if (result === false){
              res.status(400).json({ message :"No se pudo eliminar" })
               }
          return res.json({ message:" eliminado" })
        }
        catch(error) {
          res.status(500).json({ message: "Error al eliminar ", error})
        }  
      }
}