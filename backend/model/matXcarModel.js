import { DataTypes, Sequelize, Op} from "sequelize";

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
   
const matXcar = sequelize.define('MatXCar', {
    idMateria: {
    type: DataTypes.STRING,
    primaryKey: true
    },
    idCarrera: {
        type: DataTypes.STRING,
        primaryKey: true
        
    }
    
       
}, {
        tableName:'MateriaXCarrera',
        timestamps: false
    })
sequelize.sync()
.then(() => console.log(''))
.catch(error => console.log('Error al sincronizar', error))

export class matXcarModel {
    static async getAll(){
        return await matXcar.findAll()
    }

    static async getByFilter(input){
        const {idMat, idCar} = input
        const upperCar = idCar.toUpperCase()
        
        return await matXcar.findAll({
            where: {
                [Op.or]: [
                    {idMateria: idMat},
                    {idCarrera: upperCar}
                ]
            }
        })
    }

    static async create( input ){
        const {idMateria, idCar} = input
        const newMatXcar = await matXcar.create({idMateria, idCar})
        return newMatXcar
    }

    static async update( input ){
        const [updated] = await matXcar.update(input, {
            where: {id},
            
        })
        return updated ? input : ({message: "No se pudo actualizar la matXcar"})
    }

    static async delete(idMateria, idCarrera){
        
        const result = await matXcorre.destroy({
            where : {
                idMateriaAInscribir : idMateria,
                idCarrera : idCarrera
            }
        })
        return result > 0
     }
}