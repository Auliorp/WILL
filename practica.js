this.nombre = nombre;
this.edad = edad;
this.hobbies = hobbies;
this.amigos = amigos;

////////////////////////////////
this.amigos.push({ nombre: nombre, edad: edad });
/////////////////////////////////////////
this.hobbies.push(hobby);
////////////////////////////////////////
return this.amigos.map(function (amigo) {
  return amigo.nombre;
});
///////////////////////////////////////
return this.hobbies;
//////////////////////////////////
let promedio = 0;
for (let i = 0; i < this.amigos.length; i++) {
  promedio = promedio + this.amigos[i].edad;
}
return promedio / this.amigos.length;
