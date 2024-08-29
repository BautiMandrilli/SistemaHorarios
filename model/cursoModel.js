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
   
const Curso = sequelize.define('Cursos', {
    id: {
    type: DataTypes.STRING,
    primaryKey: true,
    },
    turno: {
        type: DataTypes.STRING,
        allowNull: false
    }
       
}, {
        tableName:'Cursos',
        timestamps: false
    })
sequelize.sync()
.then(() => console.log(''))
.catch(error => console.log('Error al sincronizar', error))

export class cursoModel {
    static async getAll(){
        return await Curso.findAll()
    }

    static async getById({ id }){
        return await Curso.findByPk(id)
    }

    static async create( input ){
        const {id, turno} = input
        const newCurso = await Curso.create({id, turno})
        return newCurso
    }

    static async update( input ){
        const [updated] = await Curso.update(input, {
            where: {id},
            returning: true
        })
        return updated ? input : ({message: "No se pudo actualizar el curso"})
    }

    static async delete({id}){
        const result = await Curso.destroy({
            where: { id }
        })
        return result > 0
    }
}