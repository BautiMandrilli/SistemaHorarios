import  z  from 'zod'

const FClaseSchema = z.object({
    id: z.number({
        invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato",   
    }).max(1),
    name: z.string()
})

export function validateFClase(object){
    return FClaseSchema.safeParse(object)
}

export function validatePartialFClase(object){
    return FClaseSchema.partial().safeParse(object)
}
