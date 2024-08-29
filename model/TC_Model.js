import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/materias.db',
})


    try {
        await sequelize.authenticate();
        console.log('Conexion establecida correctamente (TCs)')
    }
    catch(error){
        console.error('Problema al conectar con la base de datos', error)
    }    
   
const TC = sequelize.define('TipoCuatrimestre', {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaInicio: {
        type:DataTypes.STRING,
        allowNull: false

    },

    fechaFin :{
        type: DataTypes.STRING,
        allowNull: false
    }
       
}, {
        tableName:'TipoCuatrimestre',
        timestamps: false
    })

sequelize.sync()
.then(() => console.log('Modelo materia sincronizado (TipoCuatri)'))
.catch(error => console.log('Error al sincronizar', error))

export class TC_Model {
    static async getAll(){
        return await TC.findAll()
    }

    static async getById({ id }){
        return await TC.findByPk(id)
    }

    static async create( input ){
        const {id, name, fechaInicio, fechaFin} = input
        if (new Date(fechaInicio) < new Date(fechaFin)){
            const newTC = await TC.create({id, name, fechaInicio, fechaFin})
            return newTC, ({message: "TC creado correctamente"})
        }

        throw new Error('La fecha de inicio debe ser menor que la fecha de fin')
    }

    static async update( input ){
        const [updated] = await TC.update(input, {
            where: {id},
            returning: true
        })
        return updated ? input : ({message: "No se pudo actualizar el TC"})
    }

    static async delete({id}){
        const result = await TC.destroy({
            where: { id }
        })
        return result > 0
    }
}