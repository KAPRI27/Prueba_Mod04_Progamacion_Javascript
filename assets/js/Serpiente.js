import Animal from "./Animal.js"; // Importa la clase Animal desde el archivo Animal.js

const audioPlayer = document.getElementById("playerSiseo"); // Obtiene el elemento de audio del documento HTML


// clase Serpiente
class Serpiente extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }
  //Sisear()
  Sisear() {
    console.log(this.getSonido()); // Imprime el sonido de la Serpiente en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido de la Serpiente.
    audioPlayer.play(); // Reproduce el sonido de la Serpiente.
  }
}