import { matXcorreModel } from "../model/matXcorreModel.js";
import { validateMXC, validatePartialMXC } from "../Schemas/materiaXcorrelativaSchema.js";

export class matXcorreController {
    static async getAll(req, res) {
        try { const matXcorre = await matXcorreModel.getAll()
        res.json(matXcorre)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todos los matXcorreModels", error})
        }
    }
    static async findAllCorrelativas(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const correlativas = await matXcorreModel.findAllCorrelativas(id);
            if (correlativas) {
                return res.json(correlativas); // Responde con los resultados encontrados
            }
            return res.status(404).json({ message: "No se encontraron correlativas para el ID proporcionado." });
        } catch (error) {
            console.error('Error al obtener correlativas:', error);
            res.status(500).json({ message: "Error al obtener correlativas", error });
        }
    }
    
    static async create(req, res){

        const result = validateMXC(req.body)
        
        if(result.error){
            return res.status(400).json({ error: JSON.parse(result.error.message)})
        }
        const newMXC = await matXcorreModel.create(result.data)
        res.status(200).json(newMXC)
    }
    
    static async delete(req, res) {
        try {
            const { idMateriaAInscribir, idMateriaCorrelativa } = req.params; 
            
            const result = await matXcorreModel.delete(idMateriaAInscribir, idMateriaCorrelativa);
    
            if (!result) { 
                return res.status(400).json({ message: "No se pudo eliminar" });
            }
    
            
            return res.json({ message: "Eliminado" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar", error });
        }
    }
    
    
 }
    
    

