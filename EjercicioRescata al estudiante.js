function solution(estudiantes, deathCount, nuevo) {
    if (deathCount === 0) {
      estudiantes.push(nuevo);
    } else {
      // Si deathCount es mayor que 0, elimina deathCount elementos desde el final del array
      while (deathCount > 0 && estudiantes.length > 0) {
        estudiantes.pop();
        deathCount--;
      }
      estudiantes.push(nuevo); // Agrega nuevo después de eliminar elementos
    }
    return estudiantes;
  }
  