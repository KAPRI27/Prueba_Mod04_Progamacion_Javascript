import Animal from "./Animal.js"; // Importa la clase Animal desde el archivo Animal.js

const audioPlayer = document.getElementById("playerAullido"); // Obtiene el elemento de audio del documento HTML


// clase Lobo
class Lobo extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }
  //Aullar()
  Aullar() {
    console.log(this.getSonido()); // Imprime el sonido del lobo en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del lobo.
    audioPlayer.play(); // Reproduce el sonido del lobo.
  }
}