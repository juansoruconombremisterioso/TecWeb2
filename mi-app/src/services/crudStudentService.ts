// ==========================================
// TYPE
// ==========================================
export type Student = {
  codigo?: number;
  nombres: string;
  carrera: string;
  correo: string;
  edad: number;
};
// Generalmente el id no se envía al crear un producto,
// porque la base de datos lo genera automáticamente.

// URL donde se encuentra la API PHP.
// Todas las peticiones fetch utilizarán esta dirección.
const URL = "https://libreriamanitas.com/api2/estudiantes.php";

// ==========================================
// RECUPERAR TODOS - GET ALL
// ==========================================

// Función asíncrona que retorna un arreglo
// de productos desde la API.
export const getStudents = async (): Promise<Student[]> => {
    try {
      const response=await fetch(URL);
      if (!response.ok) {
        throw new Error(
          "Error al obtener estudiantes"
        );
      }
       // Convierte la respuesta JSON a objeto JavaScript.
      const data=await response.json();
       // Retorna los datos obtenidos.
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export const getStudent = async(codigo: number): Promise<Student> => {
    try {
      // Se envía el id en la URL usando query string.
      const response=await fetch(`${URL}?codigo=${codigo}`);
      if (!response.ok) {
        throw new Error(
          "Error al obtener estudiante"
        );
      }

      const data=await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

// ==========================================
// CREAR - POST
// ==========================================

// Función para registrar un nuevo estudiante.
export const createStudent = async(student: Student) => {
    try {
      // Realiza una petición POST.
      // headers: Cabeceras de la petición.
      // Indica que se enviará JSON.
      const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(student),
        });
      // Convierte el objeto estudiante a JSON.
      if (!response.ok) {
        throw new Error(
          "Error al registrar estudiante"
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
};

// ==========================================
// ACTUALIZAR - PUT
// ==========================================

// Función para actualizar un producto existente.
export const updateStudent = async (student: Student) => {
    try {
      const response =
        await fetch(URL, {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(student),
        });

      if (!response.ok) {
        throw new Error(
          "Error al actualizar estudiante"
        );
      }
      return await response.json();
    } catch (error) {
     console.error(error);
      throw error;
    }
};

// ==========================================
// ELIMINAR - DELETE
// ==========================================

// Función para eliminar un estudiante mediante su id.
export const deleteStudent = async (codigo: number) => {
    try {
      const response =
        await fetch(`${URL}?codigo=${codigo}`, {
          method: "DELETE",
        });
      if (!response.ok) {
       throw new Error(
          "Error al eliminar estudiante"
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
};