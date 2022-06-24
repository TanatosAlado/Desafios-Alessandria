class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return (`Nombre completo: ${personaPrueba.nombre} ${personaPrueba.apellido}`)
    }

    addMascotas(unNombre){
        this.mascotas.push(unNombre);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(unTitulo, unAutor){
        let book = {nombre: unTitulo, autor: unAutor};
        this.libros.push(book);
    }

    getBookNames(){
        let libros= [];
        let i =0;
        for(i=0;i<this.libros.length;i++){
            libros.push(this.libros[i].nombre)
        }
        return libros;
    }
}

//Creacion del Usuario
console.log(" ")
console.log("====================")
const personaPrueba = new Usuario("Cristian", "Alessandria", [],[])
console.log("A continuacion la instancia creada")
console.log(personaPrueba);
console.log("====================")
console.log(" ")

//Probando metodo: getFullName
console.log(" ")
console.log("====================")
console.log("A continuacion el nombre completo");
console.log(personaPrueba.getFullName());
console.log("====================")
console.log(" ")

//Probando metodo: addMascotas
console.log(" ")
console.log("====================")
personaPrueba.addMascotas("Pluto");
personaPrueba.addMascotas("Lassie");
personaPrueba.addMascotas("Santillan");
console.log(personaPrueba);
console.log("====================")
console.log(" ")

//Probando metodo: countMascotas
console.log(" ")
console.log("====================")
console.log(`Cantidad de mascotas del usuario: ${personaPrueba.countMascotas()}`)
console.log("====================")
console.log(" ")

//Probando metodo: addBook
console.log(" ")
console.log("====================")
console.log("Agregando libros")
personaPrueba.addBook("Metamorfosis","Guardiola")
personaPrueba.addBook("Liderazgo","Mascherano")
console.log(personaPrueba);
console.log("====================")
console.log(" ")

//Probando metodo: getBookNames
console.log(" ")
console.log("====================")
console.log("Lista de Titulo de libros:")
console.log(personaPrueba.getBookNames());
console.log("====================")
console.log(" ")