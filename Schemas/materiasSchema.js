 import z from 'zod'
 const materiaSchema = z.object({
        acronimo: z.string().length(3, {message: "Son necesarios 3 caracteres"}),
          
        name: z.string({
            invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato"}),
        
        notaPromocion: z.number().int().positive().min(6).max(10),

        notaRegularidad: z.number().int().positive().min(4).max(6),

        tipoCursado: z.number().int().min(0).max(2),
        curso: z.array(z.string()).nonempty(),
        anio: z.number().int().positive().min(1).max(5)
    });



export function validateMateria(object){
    return materiaSchema.safeParse(object)
}

export function validatePartialMateria(object){
    return materiaSchema.partial().safeParse(object)
}

