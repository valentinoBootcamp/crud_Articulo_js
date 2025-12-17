// Product Constructor
  class Articulo {
  constructor(nombre, precio, anio) {
      this.nombre = nombre;
      this.precio = precio;
      this.anio = anio;
  }
}


 
 class Controller {
  // agregar articulo
  agregarArticulo(articulo) {
    const listaArticulo = document.getElementById("listaArticulo");
    const elementoNuevo = document.createElement("div");
    elementoNuevo.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>ARTICULO</strong>: ${articulo.nombre} -
                    <strong>PRECIO</strong>: ${articulo.precio} - 
                    <strong>AÑO</strong>: ${articulo.anio}
                    <a href="#" class="btn btn-danger" name="eliminar">Eliminar</a>
                </div>
            </div>
        `;
    listaArticulo.appendChild(elementoNuevo);
  }


  limpiar() {
    document.getElementById("formularioArticulo").reset();
  }


  eliminarArticulo(elemento) {
    if (elemento.name === "eliminar") {
      elemento.parentElement.parentElement.remove();//div card - card body - boton y producto
    }
    
  }


  mostrarMensaje(mensaje, clase) {
    const div = document.createElement("div");
    div.className = `alert alert-${clase} mt-2`;
    div.appendChild(document.createTextNode(mensaje));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app); 

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);

  }


}

//eventos

document.getElementById('formularioArticulo').addEventListener("submit" ,function (e) {


     // Getting Form Values
     const nombre = document.getElementById("nombre").value,
     precio = document.getElementById("precio").value,
     anio = document.getElementById("anio").value;

    const articulo=new Articulo(nombre,precio,anio); 
     // Create a new UI instance
    const controller = new Controller();
    // Input User Validation
    if (nombre === "" || precio === "" || anio === "") {
     return controller.mostrarMensaje("DEBE INSERTAR  LOS CAMPOS", "danger");
    }
 
    // Save Product
    controller.agregarArticulo(articulo);
    controller.limpiar();
     // Override the default Form behaviour
    controller.mostrarMensaje('El ARTICULO SE INSERTO CORRECTAMENTE','success');
   e.preventDefault();
 
})


 document.getElementById('listaArticulo').addEventListener('click',function(e){ 
  //console.log(e.target); retorna el elemento al cual hacemos click
  const controller = new Controller();
  controller.eliminarArticulo(e.target);  
  controller.mostrarMensaje('El ARTICULO SE ELIMINO CORRECTAMENTE','danger');
  e.preventDefault();
 
 })