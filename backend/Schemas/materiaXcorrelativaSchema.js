import  z  from 'zod'

const materiaXcorrelativaSchema = z.object({
    idMateriaAInscribir: z.string({
        invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato",   
    }),
    idMateriaCorrelativa: z.string(),

    idTipoCorrelativa: z.number().lte(2)
})

export function validateMXC(object)
{   
    return materiaXcorrelativaSchema.safeParse(object)
}

export function validatePartialMXC(object){
    return materiaXcorrelativaSchema.partial().safeParse(object)
}
