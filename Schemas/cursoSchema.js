import  z  from 'zod'

const cursoSchema = z.object({
    id: z.string({
        invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato",   
    }).min(2).max(3),
    turno: z.string()
})

export function validateCurso(object){
    return cursoSchema.safeParse(object)
}

export function validatePartialCurso(object){
    return cursoSchema.partial().safeParse(object)
}
