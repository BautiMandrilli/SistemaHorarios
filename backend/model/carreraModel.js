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
   
const Carrera = sequelize.define('Carrera', {
    id: {
    type: DataTypes.STRING,
    primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
       
}, {
        tableName:'Carrera',
        timestamps: false
    })
sequelize.sync()
.then(() => console.log(''))
.catch(error => console.log('Error al sincronizar', error))

export class carreraModel {
    static async getAll(){
        return await Carrera.findAll()
    }

    static async getById({ id }){
        return await Carrera.findByPk(id)
    }

    static async create( input ){
        const {id, turno} = input
        const newCarrera = await Carrera.create({id, turno})
        return newCarrera
    }

    static async update( input ){
        const [updated] = await Carrera.update(input, {
            where: {id},
            returning: true
        })
        return updated ? input : ({message: "No se pudo actualizar la Carrera"})
    }

    static async delete({id}){
        const result = await Carrera.destroy({
            where: { id }
        })
        return result > 0
    }
}