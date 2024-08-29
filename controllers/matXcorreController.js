import { matXcorreModel } from "../model/matXcorreModel.js";
//import { validatematXcorreModel, validatePartialmatXcorreModel } from "../Schemas/matXcorreModelSchema.js";

export class matXcorreController {
    static async getAll(req, res) {
        try { const matXcorre = await matXcorreModel.getAll()
        res.json(matXcorre)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todos los matXcorreModels", error})
        }
    }
}
