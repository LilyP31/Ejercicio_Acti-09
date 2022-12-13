/*
Crear una clase Empleado con los atributos: código, nombre, apellido, correo y cargo; y las 
operaciones: sueldoBruto (), descuento () y sueldoNeto ().
 Para calcular el sueldo bruto.
 Para calcular el descuento, es el 12.5% del sueldo bruto. 
 Finalmente calcule el sueldo neto.

*/
const nombre = document.getElementById("Nombre1")
const apellido = document.getElementById("Apellido1")
const correo = document.getElementById("Correo1")
const cargo = document.getElementById("Cargo1")
const codigo = document.getElementById("Codigo1")
const resultado = document.getElementById("resultado")

// Activando Button // 
const calcular = document.getElementById("calcular")

class Empleado {
    codigo = "";
    nombre = "";
    apellido = "";
    cargo = "";
    sueldobruto = function(){

        let sueldobruto = 0;

        if (this.cargo == "jefe"){
            sueldobruto = 5000;
        }else if ( this.cargo == "analista"){
            sueldobruto = 4000;
        }else if ( this.cargo == "programador"){
            sueldobruto = 3000;
        }else if ( this.cargo == "soporte"){
            sueldobruto = 2000;
        }else if ( this.cargo == "asistente"){
            sueldobruto = 1500;
        } return sueldobruto;
    }
    descuento = function(){
        return this.sueldobruto()* 0.125;
    }
    sueldoneto = function(){
        return this.sueldobruto() - this.descuento();
    }
}

calcular.onclick = function(){

    let nuevo = new Empleado();

    nuevo.codigo = codigo.value;
    nuevo.nombre = nombre.value;
    nuevo.apellido = apellido.vaue;
    nuevo.cargo = cargo.value;
    nuevo.correo = correo.value;

    resultado.innerText = `${nuevo.nombre} su sueldo bruto es ${nuevo.sueldobruto()} y su descuento es ${nuevo.descuento().toFixed(2)}
     y su sueldo neto es ${nuevo.sueldoneto().toFixed(2)}`
}



