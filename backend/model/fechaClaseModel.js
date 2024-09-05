import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/materias.db',
})

    try {
        await sequelize.authenticate();
        console.log('')
    }
    catch(error){
        console.error('Problema al conectar con la base de datos', error)
    }    
   
const FechaClase = sequelize.define('FechaClase', {
    id: {
    type: DataTypes.STRING,
    primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
       
}, {
        tableName:'FechaClase',
        timestamps: false
    })
sequelize.sync()
.then(() => console.log(''))
.catch(error => console.log('Error al sincronizar', error))

export class fechaClaseModel {
    static async getAll(){
        return await FechaClase.findAll()
    }

    static async getById({ id }){
        return await FechaClase.findByPk(id)
    }

    static async create( input ){
        const {id, turno} = input
        const newFechaClase = await FechaClase.create({id, turno})
        return newFechaClase
    }

    static async update( input ){
        const [updated] = await FechaClase.update(input, {
            where: {id},
            returning: true
        })
        return updated ? input : ({message: "No se pudo actualizar la FechaClase"})
    }

    static async delete({id}){
        const result = await FechaClase.destroy({
            where: { id }
        })
        return result > 0
    }
}