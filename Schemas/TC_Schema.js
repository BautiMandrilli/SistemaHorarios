import  z  from 'zod'

const TC_Schema = z.object({
    id: z.number({
        invalid_type_error: "El tipo de dato es erroneo",
        required_error: "se debe ingresar algun dato",   
    }),
    name: z.string(),

    fechaInicio: z.string().date({message :" Tiene que ser con el formato YYYY-MM-DD"}),

    fechaFin: z.string({
        required_error:"Hay que ingresar algun dato"
    }).date({message :" Tiene que ser con el formato YYYY-MM-DD"})
})

export function validateTC(object)
{   
    return TC_Schema.safeParse(object)
}

export function validatePartialTC(object){
    return TC_Schema.partial().safeParse(object)
}
