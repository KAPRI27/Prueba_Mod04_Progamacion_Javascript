let animales = (() => {
  const url = "../../animales.json"; // La URL del archivo JSON.

  // Función asincrónica para obtener los datos de la URL.
  const getData = async () => {
    const res = await fetch(url); // Realiza una solicitud de red.
    const { animales } = await res.json(); // Extrae la lista de animales del JSON.
    return animales; // Retorna la lista de animales.
  };

  // Retorna un objeto con la función getData.
  return { getData };
})();

export default animales; // Exporta el módulo.




/*
//ESTE ERA MI CÓDIGO

class Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comemtario = comentario;
    this.sonido = sonido;
  }

  //METODOS
  get nombre() {
    return this._nombre;
  }
  get edad() {
    return this._edad;
  }
  get img() {
    return this._img;
  }
  get sonido() {
    return this._sonido;
  }
  set comentario(nuevo_comentario) {
    this._comentario = nuevo_comentario;
  }
}

*/