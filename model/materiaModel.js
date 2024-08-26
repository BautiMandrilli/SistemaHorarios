import { readJSON } from "./utils/utils.js"
import {randomUUID} from 'node:crypto'
const materias = readJSON('../database/datosPrueba.json')




export class materiaModel {
    static async getAll  ({ Anio }) {
        if (Anio) {
            const materiasFiltradas = materias.filter(materia => materia.Anio === Anio)
            return materiasFiltradas
        }
        else {
            return materias
        }
    }

    static async getById ({ id }){
        const materiaBuscada =  materias.find(materia => materia.id === id)
    if (materiaBuscada){
        return materiaBuscada
    }
   
    }

    static async create ({id}) {
        const newMateria = {
            id: randomUUID(),
            ...input
        };
            
        materias.push(newMateria);
        return newMateria   
    }

    static async delete ({id}){
        const materiaIndex = materias.findIndex(materia => materia.id === id);
        if (materiaIndex === -1) return false;
        materias.splice(materiaIndex, 1)
        return true
    }

    static async update({ id, input }){
        const materiaIndex = materias.findIndex(materia => materia.id === id);

        if (materiaIndex === -1) {
            return false
        }
    
        
        materias[materiaIndex] = {
            ...materias[materiaIndex],
            ...input,
        };
    
        return 
    }
}