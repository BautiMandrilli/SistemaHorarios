import  z  from 'zod'

const carerraSchema = z.object({
    id: z.string({
        invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato",   
    }).length(1),
    name: z.string()
})

export function validateCarrera(object){
    return carerraSchema.safeParse(object)
}

export function validatePartialCarrera(object){
    return carerraSchema.partial().safeParse(object)
}
