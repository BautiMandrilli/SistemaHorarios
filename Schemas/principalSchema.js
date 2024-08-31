import  z  from 'zod'

const principalSchema = z.object({
    idMateria: z.string({
        invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato",   
    }),
    idCurso: z.string(),

    idTipoCuatri: z.number().lte(2),
    idFechaClase: z.number().lte(6),
    horaInicio : z.string().time(),
    horaFin: z.string().time()
})

export function validatePrincipal(object)
{   
    return principalSchema.safeParse(object)
}

export function validatePartialMXC(object){
    return principalSchema.partial().safeParse(object)
}
