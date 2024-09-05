import  z  from 'zod'

const materiaXcarreraSchema = z.object({
    idMateria: z.string({
        invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato",   
    }),
    idCarrera: z.number()
})

export function validatematXcar(object)
{   
    return materiaXcarreraSchema.safeParse(object)
}

