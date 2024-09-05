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
   
const MatXCursoCtipoXClase = sequelize.define('Intermedia', {
    idMateria: {
    type: DataTypes.STRING,
    primaryKey: true
    },
    idCurso: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    idTipoCuatri: {
        type:DataTypes.INTEGER,
        primaryKey: true

    },

    idFechaClase :{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    horaInicio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horaFin: {
        type:DataTypes.STRING,
        allowNull: false
    }
       
}, {
        tableName:'MatXCursoXTipoCuaXClase',
        timestamps: false
    })

sequelize.sync()
.then(() => console.log(''))
.catch(error => console.log('Error al sincronizar', error))

export class tablaIntermediaModel {
   static async getAll(){
    return await MatXCursoCtipoXClase.findAll()
   }

   static async getByPk(){

   }

   static async create(){

   }

   static async update(){

   }

   static async delete(){

   }
}