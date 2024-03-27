class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        console.log(`Propietario: ${this.nombre}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`);
    }
}

class Animal extends Propietario{
    constructor(nombre,direccion,telefono,tipo) {
        super(nombre,direccion,telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }

}

class Mascota extends Animal{
    constructor(nombre,direccion,telefono,tipo,aniNombre,enfermedad) {
        super(nombre,direccion,telefono,tipo);
        this._aniNombre = aniNombre;
        this._enfermedad = enfermedad;
    }

    get aniNombre() {
        return this._aniNombre;
    }
    set aniNombre(aniNombre) {
        this._aniNombre = aniNombre;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
}

//DOM
document.getElementById("formulario").addEventListener("submit",function(e){
    e.preventDefault();

    //Obtener propietario
    const nombreProp = document.getElementById("propietario").value;
    const telefonoProp = document.getElementById("telefono").value;
    const direccionProp = document.getElementById("direccion").value;
    //Obtener mascota
    const nombreMascota = document.getElementById("nombreMascota").value;
    const enfermedadMascota = document.getElementById("enfermedad").value;
    //Obtener el animal
    const tipoAnimal = document.getElementById("tipo").value;


    const mascota = new Mascota(nombreProp, direccionProp, telefonoProp, tipoAnimal, nombreMascota, enfermedadMascota);
    const datosPropietario = Propietario.datosPropietario();
    console.log("Se ha creado una nueva mascota:", mascota);
})

const resultadoHtml = document.getElementById("resultado");
resultadoHtml.innerHTML = 
`<ul>
    <li>El nombre del dueño es: ${datosPropietario}</li>
</ul>`
;