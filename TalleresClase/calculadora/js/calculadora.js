class Calculadora {
  constructor(campoPantalla) {
    this.campoPantalla = campoPantalla;
    this.limpiar();
  }

  agregarCaracter(caracter) {
    this.expresion += caracter;
    this.actualizarPantalla();
  }

  limpiar() {
    this.expresion = '';
    this.actualizarPantalla();
  }

  calcularResultado() {
    try {
      this.expresion = eval(this.expresion).toString();
    } catch (error) {
      console.error('Error al calcular la expresión:', error);
      this.expresion = 'Error';
    }
    this.actualizarPantalla();
  }

  actualizarPantalla() {
    this.campoPantalla.value = this.expresion;
  }
}

const pantalla = document.getElementById('pantalla');
const calculadora = new Calculadora(pantalla);

function presionar(caracter) {
  calculadora.agregarCaracter(caracter);
}

function limpiarPantalla() {
  calculadora.limpiar();
}

function calcular() {
  calculadora.calcularResultado();
}
