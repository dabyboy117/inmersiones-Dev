let cantidad = document.getElementById('cantidad') ;
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena')

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678';

function generar(){
    
    let numeroDigitado = parseInt (cantidad.value);
    
    if(numeroDigitado < 8){ 
        alert("cantidad de caracteres tiene que ser mayor a 8");
    }

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;


    }
    
    contraseña.value = password;

}












