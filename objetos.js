// Ejercicio 1

const user = {
    firstName: "Pierina",
    lastName: "Francia",
    email: "pieri.francia@gmail.com",
    age: 30,
}

// console.log(user)

// console.log(`Hola, mi nombre es ${user.firstName} y tengo ${user.age}`)

// // Ejercicio 2 

// // DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// // 1, ada@gmail.com, Ada Lovelace, 1234567890
// // 2, grace@hotmail.com, Grace Hopper, 0987654321
// // 3, hedy@gmail.com, Hedy Lamarr, 6789054321
// // 4, radia@yahoo.com, Radia Perlman, 1234509876
// // 5, sheryl@facebook.com, Sheryl Sandberg, 5432167890

// const user1 = {
//     id: 1,
//     email: "ada@gmail.com", 
//     nombre: "Ada Lovelace", 
//     telefono: 1234567890,
// }

// const user2 = {
//     id: 2,
//     email: "grace@hotmail.com", 
//     nombre: "Grace Hopper", 
//     telefono: 0987654321,
// }

// const user3 = {
//     id: 3,
//     email: "hedy@gmail.com", 
//     nombre: "Hedy Lamarr", 
//     telefono: 6789054321,
// }

// const user4 = {
//     id: 4,
//     email: "radia@yahoo.com", 
//     nombre: "Radia Perlman", 
//     telefono: 1234509876,
// }

// const user5 = {
//     id: 5,
//     email: "sheryl@facebook.com", 
//     nombre: "Sheryl Sandberg", 
//     telefono: 5432167890,
// }

// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)
// console.log(user5)

// // Ejercicio 3

// console.log(user1.nombre)
// console.log(user2.id)
// console.log(user3.email)
// console.log(user4.id, user4.nombre)
// console.log(user5.telefono)

// Ejercicio 4

// const disco = {
//     id: 1,
//     nombre: 'Wasting Light',
//     anioLanzamiento: 2011,
//     cantidadDeTemas: 12,
//     banda: {
//       nombre: 'Foo Fighters',
//       anioFormacion: 1994
//     }
//   };

// //   El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011

// console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`)

// Ejercicio 5

const tecnologiasConocidas = ["Html", "CSS", "Javascript"]

user.sabeProgramar = "true"
user.tecnologiasConocidas = tecnologiasConocidas

console.log(user)