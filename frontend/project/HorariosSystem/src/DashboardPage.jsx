
const MateriaItem = ({ materiaName, acronimo }) => {
    return (
        <li type="none">
            <span type="text" id={acronimo} className="subject-checkbox" />
            <label htmlFor={acronimo}>{materiaName}</label>
            <button id="regular-button">Regular</button>
            
        </li>
    );
};

const AnioItem = ({ anioName, materias }) => {
    return (
        <li type="none">
            <button className="drop-down-button">{anioName}</button>
            <ul className="drop-down-conteiner">
                {materias.map((materia) => (
                    <MateriaItem key={materia.id} materiaName={materia.name} acronimo={materia.id} />
                ))}
            </ul>
        </li>
    );
};



export function Dashboard() {
    const primerAnioMaterias = [
        { id: 'f1', name: 'Física 1' },
        { id: 'aed', name: 'Algoritmo y estructura de datos' },
        { id: 'aga', name: 'Álgebra y geometría analítica' },
        { id: 'am1', name: 'Análisis matemático 1' },
        { id: 'ig1', name: 'Inglés 1' },
        { id: 'log', name: 'Lógica y estructura discreta' },
        { id: 'aco', name: 'Arquitectura de computadoras' },
        { id: 'syp', name: 'Sistemas y procesos de negocios' },
    ];

    const segundoAnioMaterias = [

        { id: 'sop', name: 'Sistemas Operativos' },
        { id: 'f2', name: 'Física 2' },
        { id: 'asi', name: 'Análisis de Sistemas' },
        { id: 'am2', name: 'Análisis matemático 2' },
        { id: 'pye', name: 'Probabilidad y estadística' },
        { id: 'ppr', name: 'Paradigmas de programación' },
        { id: 'ssl', name: 'Sintaxis y semántica de los lenguajes' },
        { id: 'ig2', name: 'Inglés 2' },
    ];

    const tercerAnioMaterias = [
        { id: 'eco', name: 'Economía' },
        { id: 'bda', name: 'Bases de datos' },
        { id: 'dds', name: 'Desarrollo de software' },
        { id: 'com', name: 'Comunicación de datos' },
        { id: 'dsi', name: 'Diseño de sistemas de información' },
        { id: 'anm', name: 'Análisis numérico' },
        { id: 'back', name: 'Backend de aplicaciones' },
    ];

    const cuartoAnioMaterias = [
        { id: 'iop', name: 'Investigación Operativa' },
        { id: 'leg', name: 'Legislación' },
        { id: 'isw', name: 'Ingeniería y calidad de software' },
        { id: 'red', name: 'Redes de datos' },
        { id: 'sim', name: 'Simulación' },
        { id: 'ta', name: 'Tecnología para la automatización' },
        { id: 'as', name: 'Administración de sistemas de información' },
        { id: 'gre', name: 'Green software' },
        { id: 'gmp', name: 'Gestión de la mejora de procesos' },
        { id: 'gi', name: 'Gestión industria de la producción' },
        { id: 'dev', name: 'Desarrollo y operaciones DevOps' },
        { id: 'cms', name: 'Comunicación multimedial en el desarrollo de software' },
    ];

    const quintoAnioMaterias = [
        { id: 'ia', name: 'Inteligencia artificial' },
        { id: 'sgo', name: 'Sistemas de gestión' },
        { id: 'cdd', name: 'Ciencia de datos' },
        { id: 'gg', name: 'Gestión gerencial' },
        { id: 'ssi', name: 'Seguridad en los sistemas de información' },
        { id: 'pf', name: 'Proyecto final' },
        { id: 'cii', name: 'Creatividad e innovación en ingeniería' },
        { id: 'ge', name: 'Gerenciamiento estratégico' },
        { id: 'iaw', name: 'Integración de aplicaciones en entorno web' },
        { id: 'con', name: 'Consultoría en negocios digitales' },
        { id: 'sds', name: 'Seguridad en el desarrollo de software' },
        { id: 'emp', name: 'Emprendimientos tecnológicos' },
        { id: 'aud', name: 'Auditoría SI-TI' },
        { id: 'dec', name: 'Decisiones en escenarios complejos' },
        { id: 'tst', name: 'Testing de Software' },
        { id: 'btc', name: 'Desarrollo con tecnologías blockchain' },
    ];

    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Dashboard de horarios</h1>
            <div className="regulares-selector">
                <button className="drop-down-button">Materias Regulares</button>
                <ul className="menu">
                    <AnioItem anioName="1 año" materias={primerAnioMaterias} />
                    <AnioItem anioName="2 año" materias={segundoAnioMaterias} />
                    <AnioItem anioName="3 año" materias={tercerAnioMaterias} />
                    <AnioItem anioName="4 año" materias={cuartoAnioMaterias} />
                    <AnioItem anioName="5 año" materias={quintoAnioMaterias} />
                </ul>
            </div>
        </div>
    );
}
