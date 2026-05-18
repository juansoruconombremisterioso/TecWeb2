
import {useEffect, useState,} from "react";
import {getStudents,createStudent,updateStudent,deleteStudent,type Student,} from "../services/crudStudentService";

function CrudEstudiantes() {

  const [estudiantes, setEstudiantes]=useState<Student[]>([]);
  const [loading, setLoading]=useState(false);
  const [error, setError]=useState("");
  const [editing, setEditing]=useState(false);
  const [codigo, setCodigo]=useState<number|null>(null);
  const [nombres, setNombres]=useState("");
  const [carrera, setCarrera]=useState("");
  const [correo, setCorreo]=useState("");
  const [edad, setEdad]=useState(0);

  const loadEstudiantes = async () => {
    try {
      setLoading(true);
      setError("");
      const data=await getStudents();
      setEstudiantes(data);
    } catch (error) {
      setError(
        "Error al cargar productos"
      );
    } finally {
      setLoading(false);
    }
  };

useEffect(()=>{loadEstudiantes();}, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const estudiante: Student = {
        codigo: codigo || undefined,
        nombres,
        carrera,
        correo,
        edad,
      };

      // EDITAR
      // Actualiza producto.
      //el formulario es reutilizado para:
      //registrar productos
      //editar productos
      if (editing) 
      {
        await updateStudent(estudiante);
      }
      else 
      {
        // CREAR
        await createStudent(estudiante);
      }
      loadEstudiantes();
      resetForm();
    } catch (error) {
      setError(
        "Error al guardar"
      );
    }
  };

  const handleDelete = async (codigo: number) => {
    if (!confirm("¿Eliminar estudiante?"))
    {
      return;
    }

    try {
      await deleteStudent(codigo);
      loadEstudiantes();
    } catch (error) {
      setError(
        "Error al eliminar"
      );
    }
  };


  const handleEdit = (estudiante: Student) => {
    setEditing(true);
    setCodigo(estudiante.codigo || null);
    setNombres(estudiante.nombres);
    setCarrera(estudiante.carrera);
    setCorreo(estudiante.correo);
    setEdad(estudiante.edad);
  };

  const resetForm = () => {
    setEditing(false);
    setCodigo(null);
    setNombres("");
    setCarrera("");
    setCorreo("");
    setEdad(0);
  };

  return (

    <div>

      <h1>
        CRUD Estudiantes
      </h1>

      <hr />

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombres" value={nombres} onChange={(e)=>setNombres(e.target.value)} />
        <br /><br />
        <input type="text" placeholder="Carrera" value={carrera} onChange={(e)=>setCarrera(e.target.value)} />
        <br /><br />
        <input type="email" placeholder="Correo" value={correo} onChange={(e)=>setCorreo(e.target.value)} />
        <br /><br />
        <input type="number" placeholder="Edad" value={edad} onChange={(e)=>setEdad(Number(e.target.value))} />
        <br /><br />

        <button type="submit">
          {editing ? "Actualizar":"Guardar"}
        </button>

        {" "}

        <button type="button" onClick={resetForm}>
          Limpiar
        </button>

      </form>

      <hr />

      {loading && <p>Cargando...</p>}

      {error&&<p>{error}</p>}

      <h2>
        Lista Estudiantes
      </h2>

      <ul>
        {estudiantes.map((e) => (
          <li key={e.codigo}>
            <strong>{e.nombres}</strong>
            <br />
            Carrera: {e.carrera}
            <br />
            Correo: {e.correo}
            <br />
            Edad: {e.edad}
            <br /><br />
            <button onClick={()=>handleEdit(e)}>
              Editar
            </button>

            {" "}

            <button onClick={()=>handleDelete(e.codigo!)}>
              Eliminar
            </button>

            <hr />

          </li>
        ))}

      </ul>

    </div>
  );
}

export default CrudEstudiantes;