//A ELABORAR SEGUN DIAGRAMA

//NOMBRE CLASE "Animal"
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

let Aguila = new Animal();
