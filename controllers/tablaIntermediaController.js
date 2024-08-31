import { tablaIntermediaModel } from "../model/tablaIntermediaPrincpModel.js";


export class MatXCursoXTCXClaseController {
    static async getAll(req, res) {
        try { const all = await tablaIntermediaModel.getAll()
        res.json(all)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todos los tablaIntermediaModels", error})
        }
    }
    static async findAllCorrelativas(req, res) {
        try {
            
        } catch (error) {
            console.error('Error al obtener correlativas:', error);
            res.status(500).json({ message: "Error al obtener correlativas", error });
        }
    }
    
    static async create(req, res){
        
    }
    
    static async delete(req, res) {
        try {
            
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar", error });
        }
    }
 }
    
    

