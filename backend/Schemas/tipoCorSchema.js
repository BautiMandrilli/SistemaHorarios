import  z  from 'zod'

const tipoCorSchema = z.object({
    id: z.number({
        invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato",   
    }).max(1),
    name: z.string()
})

export function validateTipoCor(object){
    return tipoCorSchema.safeParse(object)
}

export function validatePartialTipoCor(object){
    return tipoCorSchema.partial().safeParse(object)
}
