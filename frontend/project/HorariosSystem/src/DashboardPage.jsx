import { useState } from "react";

const MateriaItem = ({ materiaName, acronimo, subjectCondition, setSubjectCondition }) => {
  const handleConditionClick = (condition) => {
    if (condition === subjectCondition) {
      setSubjectCondition(''); // Deselecciona si el mismo botón se vuelve a clicar
    } else {
      setSubjectCondition(condition); // Selecciona el nuevo estado
    }
  };

  return (
    <li>
      <span id={acronimo} className="subject-checkbox" />
      <label htmlFor={acronimo} id="materiaName">{materiaName}</label>
      <input
        type="checkbox"
        id={`${acronimo}-regular`}
        checked={subjectCondition === 'regular'}
        onChange={() => handleConditionClick('regular')}
        style={{ display: 'none' }} // Oculta el checkbox original
      />
      <label htmlFor={`${acronimo}-regular`} className={`custom-button ${subjectCondition === 'regular' ? 'active' : ''}`}>
        Regular
      </label>
      <input
        type="checkbox"
        id={`${acronimo}-aprobada`}
        checked={subjectCondition === 'aprobada'}
        onChange={() => handleConditionClick('aprobada')}
        style={{ display: 'none' }} // Oculta el checkbox original
      />
      <label htmlFor={`${acronimo}-aprobada`} className={`custom-button ${subjectCondition === 'aprobada' ? 'active' : ''}`}>
        Aprobada
      </label>
    </li>
  );
};

const AnioItem = ({ anioName, materias, subjectConditions, setSubjectConditions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMarkAll = (condition) => {
    const newConditions = {};
    materias.forEach(materia => {
      newConditions[materia.id] = condition;
    });
    setSubjectConditions(newConditions);
  };

  return (
    <li>
      <button className="drop-down-button" onClick={handleOpenClick}> {anioName} </button>
      {isOpen && (
        <ul className="drop-down-container">
          <li>
            <label id="all-button">Marcar todas</label>
            <button className="all-button" onClick={() => handleMarkAll('regular')}>Regular</button>
            <button className="all-button" onClick={() => handleMarkAll('aprobada')}>Aprobada</button>
          </li>
          {materias.map((materia) => (
            <MateriaItem
              key={materia.id}
              materiaName={materia.name}
              acronimo={materia.id}
              subjectCondition={subjectConditions[materia.id]}
              setSubjectCondition={(condition) => {
                setSubjectConditions((prev) => ({
                  ...prev,
                  [materia.id]: condition
                }));
              }}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export function DashboardList() {
  const [subjectConditions, setSubjectConditions] = useState({});

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
      <div className="Activees-selector">
        <ul className="menu">
          <AnioItem anioName="1 año" materias={primerAnioMaterias} subjectConditions={subjectConditions} setSubjectConditions={setSubjectConditions} />
          <AnioItem anioName="2 año" materias={segundoAnioMaterias} subjectConditions={subjectConditions} setSubjectConditions={setSubjectConditions} />
          <AnioItem anioName="3 año" materias={tercerAnioMaterias} subjectConditions={subjectConditions} setSubjectConditions={setSubjectConditions} />
          <AnioItem anioName="4 año" materias={cuartoAnioMaterias} subjectConditions={subjectConditions} setSubjectConditions={setSubjectConditions} />
          <AnioItem anioName="5 año" materias={quintoAnioMaterias} subjectConditions={subjectConditions} setSubjectConditions={setSubjectConditions} />
        </ul>
      </div>
    </div>
  );
}
