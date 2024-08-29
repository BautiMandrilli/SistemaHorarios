import { error } from 'node:console';
import {randomUUID} from 'node:crypto'
import { DataTypes, Sequelize, STRING, UUID } from "sequelize"

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/materias.db'
});

try {
    await sequelize.authenticate();
    console.log('Conexion establecida correctamente(Materias)')
}
catch(error){
    console.error('Problema al conectar con la base de datos', error)
}


const Materia = sequelize.define('Materia', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => randomUUID() 
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    acronimo: {
       type: DataTypes.STRING(3),
        allowNull: false
    }
}, {
        tableName:'Materias',
        timestamps: false
    })

sequelize.sync()
.then(() => console.log('Modelo materia sincronizado'))
.catch(error => console.log('Error al sincronizar', error))



export class materiaModel {
    static async getAll() {

       return await Materia.findAll();
    }

    static async getById ({ id }){
        return await Materia.findByPk(id)  
    }

    static async create (input) {

        const {name, acronimo} = input
        console.log(name, acronimo)
        console.log(input)
        const newMateria = await Materia.create( {name, acronimo} )
        return newMateria
        
    }

    static async delete ({ id }){
        const result  = await Materia.destroy({
            where: { id }
        })
        return result > 0; //Devuelve true si se elimino una fila
    }

    static async update({ id, input }) {
       

        const [updated] = await Materia.update(input, {
            where: { id },
            returning: true,
        });

        return updated ? input : ({message: "No se encontro la materia a actualizar"})
    }
}