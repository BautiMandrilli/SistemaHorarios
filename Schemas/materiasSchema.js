 import z from 'zod'
 const materiaSchema = z.object({
    name: z.string({
        invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato"}),    
    
    acronimo: z.string().length(3, {message: "Son necesarios 3 caracteres"}),
    tipo: z.string({ message: "debe ingresar el tipo de materia"})
   
    });



export function validateMateria(object){
    return materiaSchema.safeParse(object)
}

export function validatePartialMateria(object){
    return materiaSchema.partial().safeParse(object)
}

