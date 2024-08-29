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
   
const tipoCor = sequelize.define('TipoCorrelativa', {
    id: {
    type: DataTypes.STRING,
    primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
       
}, {
        tableName:'tipoCorRELATIVA',
        timestamps: false
    })
sequelize.sync()
.then(() => console.log(''))
.catch(error => console.log('Error al sincronizar', error))

export class tipoCorModel {
    static async getAll(){
        return await tipoCor.findAll()
    }

    static async getById({ id }){
        return await tipoCor.findByPk(id)
    }

    static async create( input ){
        const {id, turno} = input
        const newtipoCor = await tipoCor.create({id, turno})
        return newtipoCor
    }

    static async update( input ){
        const [updated] = await tipoCor.update(input, {
            where: {id},
            returning: true
        })
        return updated ? input : ({message: "No se pudo actualizar la tipoCor"})
    }

    static async delete({id}){
        const result = await tipoCor.destroy({
            where: { id }
        })
        return result > 0
    }
}