let nomUser = 'Mali';
let posicion=0;
let saldo = '';
let cuentas = [
{name:"Mali",password:1234,saldo:200},
{name:"Gera",password:5678,saldo:290},
{name:"Maui",password:9876,saldo:67}];
function seleccionarTarjeta(num)
{
    let tarjeta=document.getElementById('card');
    if(Number.isInteger(num))
    {
        if(num==1)
        {

            tarjeta.style.backgroundColor='aqua';
            tarjeta.style.visibility='visible';
            this.nomUser='Mali';
        }
        else if(num==2)
        {
            tarjeta.style.backgroundColor='orange';
            tarjeta.style.visibility='visible';
            this.nomUser='Gera';
        }
        else if(num==3)
        {
            tarjeta.style.backgroundColor='red';
            tarjeta.style.visibility='visible';
            this.nomUser='Maui';
        }
    }
}
function insertarTarjeta()
{
    let pantalla = document.getElementById('dosCen');
    pantalla.innerHTML='<p>Bienvenido/a <b>'+this.nomUser+'</b><br> Introduce tu PIN:</p><br><input id="pin" type="text" minlength="4" maxlength="4" required />';
    document.getElementById('unoIzq').innerHTML='';
    document.getElementById('dosIzq').innerHTML='';
    document.getElementById('dosDer').innerHTML='';
    document.getElementById('unoDer').innerHTML='';
    document.getElementById('unoCen').innerHTML='';
    document.getElementById('botonUnoDer').onclick='';
    document.getElementById('botonDosDer').onclick='';
    document.getElementById('botonUnoIzq').onclick='';

}
function tecla(teclaInt)
{
    let tecla=teclaInt;
    if(document.getElementById('pin'))
    {
        let inputPass=document.getElementById('pin').value;
        if(inputPass.length < 4 && Number.isInteger(teclaInt))
        {
            document.getElementById('pin').value+=teclaInt
        }

        if(teclaInt=='cancel')
        {
            document.getElementById('dosCen').innerHTML='<p>Bienvenido al banco Internacional</p>';
            document.getElementById('unoIzq').innerHTML='';
            document.getElementById('dosIzq').innerHTML='';
            document.getElementById('dosDer').innerHTML='';
            document.getElementById('unoDer').innerHTML='';
            document.getElementById('unoCen').innerHTML='';
            document.getElementById('botonUnoDer').onclick='';
            document.getElementById('botonDosDer').onclick='';
            document.getElementById('botonUnoIzq').onclick='';
        }
        else if(teclaInt=='clean')
        {
            document.getElementById('pin').value=''
        }
        else if(teclaInt=='enter')
        {
            if(this.validarUser(document.getElementById('pin').value) == 1)
            {
                this.passTarjeta();
            }
            else{
                document.getElementById('pin').value=''
                document.getElementById('unoCen').innerHTML='<p>Password Incorrecto vuelve a intentarlo</p>';
            }
        }
    }
    else if(document.getElementById('retirar'))
    {
        let inputRetirar=document.getElementById('retirar').value;
        if(inputRetirar.length < 4 && Number.isInteger(teclaInt))
        {
            document.getElementById('retirar').value+=teclaInt
        }

        if(teclaInt=='cancel')
        {
            document.getElementById('dosCen').innerHTML='<p>Bienvenido al banco Internacional</p>';
            document.getElementById('unoIzq').innerHTML='';
            document.getElementById('dosIzq').innerHTML='';
            document.getElementById('dosDer').innerHTML='';
            document.getElementById('unoDer').innerHTML='';
            document.getElementById('unoCen').innerHTML='';
            document.getElementById('botonUnoDer').onclick='';
            document.getElementById('botonDosDer').onclick='';
            document.getElementById('botonUnoIzq').onclick='';
        }
        else if(teclaInt=='clean')
        {
            document.getElementById('retirar').value=''
        }
        else if(teclaInt=='enter')
        {
            if(!Number.isNaN(inputRetirar))
            {
                this.saldo-=parseInt(inputRetirar);
                cuentas[this.posicion].saldo-=parseInt(inputRetirar);
            }
            this.passTarjeta();
        }
    }
    else if(document.getElementById('depositar'))
    {
        let inputDepositar=document.getElementById('depositar').value;
        if(inputDepositar.length < 4 && Number.isInteger(teclaInt))
        {
            document.getElementById('depositar').value+=teclaInt
        }

        if(teclaInt=='cancel')
        {
            document.getElementById('dosCen').innerHTML='<p>Bienvenido al banco Internacional</p>';
            document.getElementById('unoIzq').innerHTML='';
            document.getElementById('dosIzq').innerHTML='';
            document.getElementById('dosDer').innerHTML='';
            document.getElementById('unoDer').innerHTML='';
            document.getElementById('unoCen').innerHTML='';
            document.getElementById('botonUnoDer').onclick='';
            document.getElementById('botonDosDer').onclick='';
            document.getElementById('botonUnoIzq').onclick='';
        }
        else if(teclaInt=='clean')
        {
            document.getElementById('retirar').value=''
        }
        else if(teclaInt=='enter')
        {
            if(!Number.isNaN(inputDepositar))
            {
                this.saldo+=parseInt(inputDepositar);
                cuentas[this.posicion].saldo+=parseInt(inputDepositar);
            }
            this.passTarjeta();
        }
    }
}
function validarUser(password)
{
    let retorno = false;
    let pos = 0
    cuentas.forEach(function(n)
    {
        if(n.name == this.nomUser && n.password == password)
        {
            this.saldo=n.saldo;
            this.posicion=pos;
            retorno = true;
        }
        pos++;
    });
    return retorno;
}
function passTarjeta()
{
    let pantalla = document.getElementById('dosCen');
    pantalla.innerHTML='<p>Bienvenido/a '+this.nomUser+'<br> ¿Que deseas hacer?</p>';
    pantalla = document.getElementById('unoDer');
    pantalla.innerHTML='<p>Consultar</p>';
    pantalla = document.getElementById('dosDer');
    pantalla.innerHTML='<p>Retirar</p>';
    pantalla = document.getElementById('unoIzq');
    pantalla.innerHTML='<p>Depositar</p>';
    document.getElementById('unoCen').innerHTML='';
    document.getElementById('botonUnoDer').onclick=()=>opciones('consultar');
    document.getElementById('botonDosDer').onclick=()=>opciones('retirar');
    document.getElementById('botonUnoIzq').onclick=()=>opciones('depositar');
}
function opciones(opciones)
{
    if(opciones == 'consultar')
    {
        let pantalla = document.getElementById('dosCen');
        pantalla.innerHTML='<p>tu saldo es:<br>'+this.saldo+'</p>';
        pantalla = document.getElementById('unoDer');
        pantalla.innerHTML='<p style="margin-top:20px">Regresar</p>';
        pantalla = document.getElementById('dosDer');
        pantalla.innerHTML='';
        pantalla = document.getElementById('unoIzq');
        pantalla.innerHTML='';
        document.getElementById('unoCen').innerHTML='';
        document.getElementById('botonUnoDer').onclick=()=>this.opciones('regresar');
    }
    else if(opciones == 'retirar')
    {
        this.retirar();
    }
    else if(opciones == 'depositar')
    {
        this.depositar();
    }
    else if(opciones == 'regresar')
    {
        this.passTarjeta();
    }
}
function retirar(num=0)
{
    let pantalla = document.getElementById('dosCen');
    pantalla.innerHTML='<p>Bienvenido/a <b>'+this.nomUser+'</b><br> Introduce la cantidad a retirar:</p><br><input id="retirar" type="text" minlength="4" maxlength="4" required />';
    document.getElementById('unoIzq').innerHTML='';
    document.getElementById('dosIzq').innerHTML='';
    document.getElementById('dosDer').innerHTML='';
    document.getElementById('unoDer').innerHTML='';
    document.getElementById('unoCen').innerHTML='';
    document.getElementById('botonUnoDer').onclick='';
    document.getElementById('botonDosDer').onclick='';
    document.getElementById('botonUnoIzq').onclick='';
}
function depositar(num=0)
{
    let pantalla = document.getElementById('dosCen');
    pantalla.innerHTML='<p>Bienvenido/a <b>'+this.nomUser+'</b><br> Introduce la cantidad a depositar:</p><br><input id="depositar" type="text" minlength="4" maxlength="4" required />';
    document.getElementById('unoIzq').innerHTML='';
    document.getElementById('dosIzq').innerHTML='';
    document.getElementById('dosDer').innerHTML='';
    document.getElementById('unoDer').innerHTML='';
    document.getElementById('unoCen').innerHTML='';
    document.getElementById('botonUnoDer').onclick='';
    document.getElementById('botonDosDer').onclick='';
    document.getElementById('botonUnoIzq').onclick='';
}
function mostrarPantalla()
{
    let pantalla = document.getElementById('dosCen');
    pantalla.innerHTML='<p>Procesando tu dinero<br/> tu nuevo saldo es:'+this.saldo+'</p>';
    document.getElementById('unoIzq').innerHTML='';
    document.getElementById('dosIzq').innerHTML='';
    document.getElementById('dosDer').innerHTML='';
    document.getElementById('unoDer').innerHTML='';
    document.getElementById('unoCen').innerHTML='';
    document.getElementById('botonUnoDer').onclick='';
    document.getElementById('botonDosDer').onclick='';
    document.getElementById('botonUnoIzq').onclick='';
}