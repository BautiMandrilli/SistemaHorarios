import { DataTypes, INTEGER, Sequelize } from "sequelize";

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
   
const matXcorre = sequelize.define('matXcorre', {
    idMateriaAInscribir: {
    type: DataTypes.STRING,
    primaryKey: true
    
    },
    idMateriaCorrelativa: {
        type: DataTypes.STRING,
        primaryKey: true
        
    },
    idTipoCorrelativa:{
        type: DataTypes.INTEGER,
        references:{
            model: 'tipoCor',
            key: 'id'
        }
    }
}, {
        tableName:'MateriaXCorrelativa',
        timestamps: false
    })
sequelize.sync()
.then(() => console.log(''))
.catch(error => console.log('Error al sincronizar', error))

export class matXcorreModel {
    static async getAll(){
        return await matXcorre.findAll()
    }

}