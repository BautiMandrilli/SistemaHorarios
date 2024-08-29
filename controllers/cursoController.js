import { cursoModel } from "../model/cursoModel.js";
import { validateCurso, validatePartialCurso } from "../Schemas/cursoSchema.js";

export class cursoController {
    static async getAll(req, res) {
        try { const cursos = await cursoModel.getAll()
        res.json(cursos)
        }
        catch(error){
            res.status(500).json({ message: "Error al obtener todos los cursos", error})
        }
    }

    static async getById (req, res) {
        try {
        const { id } = req.params
        const curso = await cursoModel.getById({ id })
        if (curso) {
            return res.json(curso)}
        res.status(400).json({message :"curso no encontrado"})
        }
        
        catch(error) {
            res.status(500).json({ message: "Error al obtener el curso", error})
        }
    }

    static async create (req, res) {
        try {
        const result = validateCurso(req.body);
        console.log(result)
        
        if (result.error){
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const newCurso = await cursoModel.create(result.data)
        
        res.status(201).json(newCurso)
        }

        catch(error) {
            res.status(500).json({ message: "Error al crear el curso", error})
        }
    }

    static async update(req, res){
        try {
            const { id } = req.params;
            const result = validatePartialCurso(req.body);
            if (result.error) {
            return res.status(400).json({error :JSON.parse(result.error.message)})
            }
            const updatedCurso = await cursoModel.update({ id, input: result.data })
            return res.json(updatedCurso);
         }
        
        catch(error) {
            res.status(500).json({ message: "Error al actualizar el curso", error})
        }
    }


    static async delete(req, res){
      try {
            const { id } = req.params /// <-- saca bien los datos
            const result = await cursoModel.delete({ id })
            if (result === false){
            res.status(400).json({ message :"No se encontro el curso a eliminar" })
             }
        return res.json({ message:"curso eliminado" })
      }
      catch(error) {
        res.status(500).json({ message: "Error al eliminar el curso", error})
      }  
    }
  }
