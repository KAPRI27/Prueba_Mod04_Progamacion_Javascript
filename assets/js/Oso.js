import Animal from "./Animal.js"; // Importa la clase Animal desde el archivo Animal.js

const audioPlayer = document.getElementById("playerGrunido"); // Obtiene el elemento de audio del documento HTML


// clase Oso
class Oso extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }
  //Rugir()
  Grunir() {
    console.log(this.getSonido()); // Imprime el sonido del oso en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del oso.
    audioPlayer.play(); // Reproduce el sonido del oso
  }
}
