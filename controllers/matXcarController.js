import { matXcarModel } from "../model/matXcarModel.js";
import { validatematXcar } from "../Schemas/matXcarSchema.js";

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
    static async create(req, res){

        const result = validatematXcar(req.body)
        
        if(result.error){
            return res.status(400).json({ error: JSON.parse(result.error.message)})
        }
        const newMXC = await matXcarModel.create(result.data)
        res.status(200).json(newMXC)
    }

    static async delete(req, res) {
        try {
            const { idMateria, idCarrera } = req.params; 
            
            const result = await matXcarModel.delete(idMateria, idCarrera);
    
            if (!result) { 
                return res.status(400).json({ message: "No se pudo eliminar" });
            }
    
            
            return res.json({ message: "Eliminado" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar", error });
        }
    }
}