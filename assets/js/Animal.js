// Definición de la clase Animal para representar objetos de animales.

class Animal {
    // Constructor de la clase Animal.
    constructor(nombre, edad, img, comentario, sonido) {
      // Propiedades privadas utilizando let y métodos de acceso.
      let Nombre = nombre;
      this.getNombre = () => Nombre;

      let Edad = edad;
      this.getEdad = () => Edad;

      let Img = img;
      this.getImg = () => Img;

      let Comentario = comentario;
      this.getComentario = () => Comentario;

      let Sonido = sonido;
      this.getNombre = () => Sonido;
    }
    
    // Método para obtener el nombre del animal.
    get Nombre() {
      return this.getNombre();
    }
    // Método para obtener la edad del animal.
    get Edad() {
      return this.getEdad();
    }
    // Método para obtener la imagen del animal.
    get Img() {
      return this.getImg();
    }
    // Método para enviar el coemntario del animal.
    set Comentario(nuevo_Comentario) {
      this._Comentario = nuevo_Comentario;
    }
    // Método para obtener el sonido del animal.
    get Sonido() {
      return this.getSonido();
    }
  }

  console.log(Animal.edad);

  export default Animal; // Exporta la clase Animal para que pueda ser utilizada en otros módulos.