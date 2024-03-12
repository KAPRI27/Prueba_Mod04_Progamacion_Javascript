import Animal from "./Animal.js"; // Importa la clase Animal desde el archivo Animal.js

const audioPlayer = document.getElementById("playerChillido"); // Obtiene el elemento de audio del documento HTML


// clase Aguila
class Aguila extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }
  //Chillar()
  Chillar() {
    console.log(this.getSonido()); // Imprime el sonido del león en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del león.
    audioPlayer.play(); // Reproduce el sonido del león.
  }
}