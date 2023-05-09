window.addEventListener("load", inicio)

function inicio() {
    cerrarSesion()
    asignarBotones()
    cargarEmpresaFavorita()
    cargarEmpresaViaje()
}

function asignarBotones() {
    document.querySelector("#btnRegister").addEventListener("click", registrarImportador);
    document.querySelector("#btnLogearse").addEventListener("click", login);
    document.querySelector("#btnRinicio").addEventListener("click", mostrarRegister);
    document.querySelector("#btnLinicio").addEventListener("click", mostrarLogin);
    document.querySelector("#btnPedido").addEventListener("click", crearSolicitud);
    document.querySelector("#btnCrearViaje").addEventListener("click", mostrarCrearViaje);
    document.querySelector("#btnBuscarSolicitud").addEventListener("click", filtrarListadoSolicitudes);
    document.querySelector("#btnVerSolicitudes").addEventListener("click", mostrarMisSolicitudes);
    document.querySelector("#btnSolicitud").addEventListener("click", mostrarHacerSolicitudes);
    document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion);
    document.querySelector("#btnIniciarSesion").addEventListener("click", iniciarSesion);
    document.querySelector("#btnCerrarSesionE").addEventListener("click", cerrarSesionE);
    document.querySelector("#btnAsignarSolicitudes").addEventListener("click", mostrarAsignarViajes);
    
    



}
let ultimaSolicitud = 1
class Solicitud {
    constructor(unTipo, unaDescripcion, unOrigen, unContenedores, unaEmpresaFav, unEstado, objImportador) {
        this.tipo = unTipo
        this.descripcion = unaDescripcion
        this.origen = unOrigen
        this.contenedores = unContenedores
        this.Id = ultimaSolicitud++
        this.empresafav = unaEmpresaFav
        this.habilitada = true
        this.estado = unEstado
        this.solicitadaPor = objImportador
    }
}
let ultimoImportador = 1
class Importador {
    constructor(unNombre, unUsuario, unPass, unaFoto) {
        this.nombre = unNombre;
        this.usuario = unUsuario;
        this.pass = unPass;
        this.foto = unaFoto;
        this.id = ultimoImportador++
        this.tipo = 2

    }
}

let ultimoViaje = 1
class Viaje {
    constructor(unNombreBuque, unCantMaxCont, unaEmpresa, unaFecha, objSolicitud) {
        this.nombre = unNombreBuque
        this.maxContenedores = unCantMaxCont
        this.empresa = unaEmpresa
        this.fecha = unaFecha
        this.id = ultimoViaje++
        this.asignarSolicitud = objSolicitud

    }
}

let ultimaEmpresa = 1
class empresa {
    constructor(unNombre, unUsuario, unaPass) {
        this.nombre = unNombre;
        this.usuario = unUsuario;
        this.pass = unaPass;
        this.id = ultimaEmpresa++
        this.tipo = 1
    }
}

//arrays variables globales
let arraySolicitudes = new Array();
let arrayUsuarios = new Array();
let arrayViaje = new Array();
usuarioLogueado = null;

//precargodatos
let Imp1 = new Importador("pedro", "pedro123", "Pedro123", "pedro.jpg")
let Imp2 = new Importador("juan", "juan123", "Juan123", "juan.jpg")
let Imp3 = new Importador("a", "a", "a", "a.jpg")
let Imp4 = new Importador("b", "b", "b", "b.jpg")
let Emp1 = new empresa("autos", "autos123", "Autos123", "disponible")
let Emp2 = new empresa("zapatillas", "zapatillas123", "Zapatillas123", "no disponible")
let Emp3 = new empresa("pelotas", "pelotas123", "Pelotas123", "disponible")
let Emp4 = new empresa("exoplosivos", "explosivos123", "Explosivos123", "no disponible")
let Emp5 = new empresa("z", "z", "z", "disponible")
arrayUsuarios.push(Imp1, Imp2, Imp3, Emp1, Emp2, Emp3, Emp4, Emp5)



let S1 = new Solicitud("CARGA_COMUN", "pelotas de futbol", "Argentina", "3", "pelotas", "cancelada", Imp1)
let S2 = new Solicitud("CARGA_PELIGROSA", "bombas", "Brasil", "1", "explosivos", "pendiente", Imp2)
let S3 = new Solicitud("CARGA_COMUN", "Autos", "italia", "3", "autos", "pendiente", Imp3)
let S4 = new Solicitud("FRAGIL", "pelotas de futbol", "Argentina", "3", "pelotas", "pendiente", Imp4)
arraySolicitudes.push(S1, S2, S3, S4)

let viaje1 = new Viaje("montevideo", "30", "empresaSanti", 2022, 1)
arrayViaje.push(viaje1)

function ocultarTodo() {
    
    document.querySelector("#divBotonesInicio").style.display = "none";
    document.querySelector("#divRegister").style.display = "none";
    document.querySelector("#divLogin").style.display = "none";
    document.querySelector("#divHacerSolicitud").style.display = "none";
    document.querySelector("#divContenedorImportador").style.display = "block";
    document.querySelector("#divListarSolicitudes").style.display = "none";
    document.querySelector("#divCrearViaje").style.display = "none";
    document.querySelector("#divEmpresa").style.display = "none";

}

function ocultarTodoE(){
    document.querySelector("#divBotonesInicio").style.display = "none";
    document.querySelector("#divEmpresa").style.display = "none";
    document.querySelector("#divCrearViaje").style.display = "none";
    document.querySelector("#divAsignarSolicitud").style.display="block";
}
function cerrarSesionE() {
    usuarioLogueado = null;
    document.querySelector("#divBotonesInicio").style.display = "block";
    document.querySelector("#divEmpresa").style.display = "none";
    document.querySelector("#divCrearViaje").style.display = "none";
    document.querySelector("#divAsignarSolicitud").style.display = "none";
    
}

function cerrarSesion() {
    document.querySelector("#divAsignarSolicitud").style.display = "none";
    document.querySelector("#divBotonesInicio").style.display = "block";
    document.querySelector("#divRegister").style.display = "none";
    document.querySelector("#divLogin").style.display = "none";
    document.querySelector("#divContenedorImportador").style.display = "none";
    document.querySelector("#divHacerSolicitud").style.display = "none";
    document.querySelector("#divContenedorImportador").style.display = "none";
    document.querySelector("#divListarSolicitudes").style.display = "none";
    document.querySelector("#divCrearViaje").style.display = "none";
    document.querySelector("#divEmpresa").style.display = "none";
    usuarioLogueado = null;
}

function mostrarLogin() {
    ocultarTodo()
    document.querySelector("#divContenedorImportador").style.display = "none";
    document.querySelector("#divLogin").style.display = "block";
}

function mostrarRegister() {
    ocultarTodo()
    document.querySelector("#divContenedorImportador").style.display = "none";
    document.querySelector("#divRegister").style.display = "block";
}

function mostrarNav() {
    ocultarTodo()
    document.querySelector("#divContenedorImportador").style.display = "block";

}

function mostrarHacerSolicitudes() {
    ocultarTodo()
    document.querySelector("#divHacerSolicitud").style.display = "block";

}

function mostrarMisSolicitudes() {
    ocultarTodo()
    document.querySelector("#divListarSolicitudes").style.display = "block";

}

function cargarEmpresas(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let empresa = new empresa(i, "empresa" + i, "Empresa" + i, "Empresa", "inhabilitado")
        arrayUsuarios.push(empresa)
    }
}

function iniciarSesion() {
    ocultarTodo()
    document.querySelector("#divContenedorImportador").style.display = "none";
    document.querySelector("#divLogin").style.display = "block";
}

function mostrarCrearViaje() {
    document.querySelector("#divBotonesInicio").style.display = "none";
    document.querySelector("#divCrearViaje").style.display = "block";

}

function login() {
    document.querySelector("#etqLogin").innerHTML = ""
    let usuario = document.querySelector("#txtUsu").value;
    let contrasena = document.querySelector("#txtPassL").value;
    let verificar = verificarLogin(usuario, contrasena)
    if (verificar) {
        document.querySelector("#txtUsu").value = "";
        document.querySelector("#txtPassL").value = "";
        // document.querySelector("#login").style.display="none";
        // document.querySelector("#registro").style.display="none";

        document.querySelector("#usuario").innerHTML = "Hola " + usuarioLogueado.nombre + "!";

        if (usuarioLogueado.tipo == 2) {

            document.querySelector("#divLogin").style.display = "none";
            document.querySelector("#divContenedorImportador").style.display = "block";
        }
        if (usuarioLogueado.tipo == 1) {
            document.querySelector("#divEmpresa").style.display = "block"
            document.querySelector("#etqEmpresa").innerHTML = "(Administrador)";
            document.querySelector("#divLogin").style.display = "none";
            document.querySelector("#divLogin").style.display = "none";
        }
    }
    else {
        document.querySelector("#etqLogin").innerHTML = "usuario o contrasena incorrecto";
    }
}

function verificarLogin(usu, pass) {

    let resultado = false;
    let pos = buscarImportador(usu);
    if (pos != -1) {
        if (arrayUsuarios[pos].pass == pass) {
            resultado = true;
            usuarioLogueado = arrayUsuarios[pos];
        }
    }

    return resultado;

}


function buscarImportador(nomUsuario) {

    let posBuscada = -1;
    for (let pos = 0; pos < arrayUsuarios.length && posBuscada == -1; pos++) {
        if (arrayUsuarios[pos].usuario == nomUsuario) {
            posBuscada = pos;
        }
    }
    return posBuscada;
}

function registrarImportador() {
    let nombre = document.querySelector("#txtNombre").value;
    let usuario = document.querySelector("#txtUsuario").value;
    let password = document.querySelector("#txtPassword").value;
    let foto = document.querySelector("#foto").value;
    if (!repetido(usuario) && validarPass(password) && !repetidoEmpresas(usuario)) {
        let unImportador = new Importador(nombre, usuario, password, foto, ultimoImportador);
        arrayUsuarios.push(unImportador);
        document.querySelector("#etqMensaje").innerHTML = "registro exitoso";
        document.querySelector("#txtNombre").value = "";
        document.querySelector("#txtUsuario").value = "";
        document.querySelector("#txtPassword").value = "";
    }
}


function repetido(usuario) {
    let existe = false
    for (let elem of arrayUsuarios) {
        if (elem.usuario == usuario) {

            existe = true
            break
        }
    }
    if (existe) {
        document.querySelector("#etqMensaje").innerHTML = "este usuario ya existe"

    } else {
        document.querySelector("#etqMensaje").innerHTML = "Registro con exito"
    }
}


function validarPass(password) {
    let unaM = 0
    let unam = 0
    for (let i = 0; i < password.length; i++) {
        if ((password.charAt(i)) == (password.charAt(i)).toUpperCase()) {
            unaM++
        }
        else if ((password.charAt(i)) == (password.charAt(i)).toLowerCase()) {
            unam++
        }
    }
    let cumple = false
    if (unaM > 0 && unam > 0) {
        cumple = true
    }
    if (password.length >= 6 && cumple) {
        return true

    }
    else {
        document.querySelector("#etqMensaje").innerHTML = "password no valida"
        return false
    }
}

function repetidoEmpresas(usuario) {
    for (i = 0; i < arrayUsuarios.length; i++) {
        if (arrayUsuarios[i].usuario == usuario) {
            document.querySelector("#etqMensaje").innerHTML = "Usuario repetido"

            return true
        }
    }
    return false
}


function crearSolicitud() {
    let estado = "pendiente"
    let tipo = document.querySelector("#slcTipo").value;
    let descripcion = document.querySelector("#txtDescripcion").value;
    let origen = document.querySelector("#txtOrigen").value;
    let contenedores = parseInt(document.querySelector("#txtCantContenedores").value);
    let empresaFav = document.querySelector("#slcEmpresaFav").value;
    let nueva = new Solicitud(tipo, descripcion, origen, contenedores, empresaFav, estado, usuarioLogueado);
    if (datosValidosPedido(nueva)) {

        document.querySelector("#slcTipo").value = "";
        document.querySelector("#txtDescripcion").value = "";
        document.querySelector("#txtOrigen").value = "";
        document.querySelector("#txtCantContenedores").value = "";

        arraySolicitudes.push(nueva);
    }

}

function datosValidosPedido(Solicitud) {

    let valido = true;

    if (Solicitud.tipo == "" || Solicitud.descripcion == "" || Solicitud.origen == "" || Solicitud.contenedores < 1) {
        document.querySelector("#etqPedido").innerHTML = "todos los campos son obligatorios"
        valido = false;
    }
    else {
        document.querySelector("#etqPedido").innerHTML = ""
    }
    return valido;

}

function agregarSolicitud(Solicitud) {

    arraySolicitudes.push(Solicitud);


}


function filtrarListadoSolicitudes() {
    let criterio = document.querySelector("#txtBuscarSolicitud").value;
    armarListadoSolicitudes(criterio);
    // document.querySelector("#listarSolicitudes").style.display = "block";

}

function armarListadoSolicitudes(filtro) {
    let tablaHTML = "<table border=1>";
    tablaHTML += "<tr><th>Tipo</th><th>Descripcion</th><th>Origen</th><th>Contenedores</th><th>estado</th><th>accion</th></tr>"

    for (let pos = 0; pos < arraySolicitudes.length; pos++) {
        let objSolicitudes = arraySolicitudes[pos];
        if (filtro == "" && objSolicitudes.solicitadaPor == usuarioLogueado) {
            tablaHTML = tablaHTML += "<tr><td>" + objSolicitudes.tipo + "</td><td>" + objSolicitudes.descripcion + "</td><td>" + objSolicitudes.origen + "</td><td>" + objSolicitudes.contenedores + "</td><td>" + objSolicitudes.estado + "</td><td><input id='btn" + pos + "' type='button' value='cancelar'></td></tr>"
        }
        else if (objSolicitudes.descripcion.includes(filtro) && objSolicitudes.solicitadaPor == usuarioLogueado) {
            tablaHTML += "<tr><td>" + objSolicitudes.tipo + "</td><td>" + objSolicitudes.descripcion + "</td><td>" + objSolicitudes.origen + "</td><td>" + objSolicitudes.contenedores + "</td><td>" + objSolicitudes.estado + "</td><td><input id='btn" + pos + "' type='button' value='cancelar'></td></tr>"
        }

        document.querySelector("#tablaSolicitudes").innerHTML = tablaHTML;

    }
    tablaHTML += "</table>"
    for (let pos = 0; pos < arraySolicitudes.length; pos++) {
        let objSolicitud = arraySolicitudes[pos];
        if (filtro == "" && objSolicitud.solicitadaPor == usuarioLogueado) {
            document.querySelector("#btn" + pos).addEventListener("click", deshabilitarSolicitud);
        }
        else if (objSolicitud.descripcion.includes(filtro) && objSolicitud.solicitadaPor == usuarioLogueado) {

            document.querySelector("#btn" + pos).addEventListener("click", deshabilitarSolicitud);
        }

    }

}

function deshabilitarSolicitud() {
    let idboton = this.id;
    let posSolicitud = Number(idboton.substring(3));
    let objSolicitud = arraySolicitudes[posSolicitud];
    objSolicitud.estado = "cancelada";
    armarListadoSolicitudes("");

}


function datosValidosViaje(Viaje) {

    let valido = true;

    if (Viaje.Tipo == "" || Viaje.Descripcion == "" || Viaje.Origen == "" || Viaje.Contenedores < 1) {
        document.querySelector("#etqViaje").innerHTML = "todos los campos son obligatorios"
        valido = false;
    }
    else {
        document.querySelector("#etqViaje").innerHTML = ""
    }
    return valido;

}
//elegir empresa favorita
function cargarEmpresaFavorita() {
    let miSelect = document.querySelector("#slcEmpresaFav");
    miSelect.innerHTML = "";
    for (let pos = 0; pos < arrayUsuarios.length; pos++) {
        let objEmpresa = arrayUsuarios[pos];
        if (objEmpresa.tipo == 1) {

            miSelect.innerHTML += "<option value='" + objEmpresa.nombre + "'>" + objEmpresa.nombre + "</option>"
        }

    }
}

function calcularEstadisticaSolicitudes() {
    let cancelada = 0
    let habilitada = 0
    for (let i = 0; i < arraySolicitudes.length; i++) {
        let objSolicitud = arraySolicitudes[i];
        if (objSolicitud[i].estado == "cancelada") {
            cancelada++
        }
        else {
            habilitada++
        }
    }
}

function crearViaje() {

    let nombreBuque = document.querySelector("#txtNombreBuque").value;
    let cantidadMaxCont = document.querySelector("#txtCantMaxCont").value;
    let fecha = parseInt(document.querySelector("#txtFecha").value);
    let nueva = new Viaje(nombreBuque, cantidadMaxCont, empresa, fecha, arrayViaje.length + 1);
    if (datosValidosViaje(nueva)) {
        arrayViaje.push(nueva)
    }
}

function cargarEmpresaViaje() {
    let miSlc = document.querySelector("#slcEmpresas");
    miSlc.innerHTML = "";
    for (let pos = 0; pos < arrayUsuarios.length; pos++) {
        let objEmpresa = arrayUsuarios[pos];
        if (objEmpresa.tipo == 1) {

            miSlc.innerHTML += "<option value='" + objEmpresa + "'>" + objEmpresa.nombre + "</option>"
        }

    }
}

//hacer tabla mostrando todos los viajes con un select agregado que contenga los viajes creados que les sirva para fechas posteriores al pedido

function mostrarAsignarViajes(){
    ocultarTodoE()
    document.querySelector("#divAsignarSolicitud").style.display="block";
    document.querySelector("#divEmpresa").style.display="block";
    asignarSolicitud()
    
}

function asignarSolicitud() {
    document.querySelector("#divAsignarSolicitud").style.display="block"
    let tablaHTML = "<table border=1>";
    tablaHTML += "<tr><th>Tipo</th><th>Descripcion</th><th>Origen</th><th>Contenedores</th><th>estado</th><th>accion</th></tr>"

    for (let pos = 0; pos < arraySolicitudes.length; pos++) {
        let objSolicitudes= arraySolicitudes[pos];
            tablaHTML += "<tr><td>" + objSolicitudes.tipo + "</td><td>" + objSolicitudes.descripcion + "</td><td>" +
            objSolicitudes.origen + "</td><td>" + objSolicitudes.contenedores + "</td><td>" + objSolicitudes.estado + "</td><td><input id='slc" + pos + "' type='select' ><option></option></td></tr>"
        

        document.querySelector("#tablaViajes").innerHTML = tablaHTML;

    }
    tablaHTML += "</table>"
    for (let pos = 0; pos < arraySolicitudes.length; pos++) {
        let objSolicitud = arraySolicitudes[pos];
        if (filtro == "" && objSolicitud.solicitadaPor == usuarioLogueado) {
            document.querySelector("#slc" + pos).addEventListener("click", cargarSelectViajes);
        }
        else if (objSolicitud.descripcion.includes(filtro) && objSolicitud.solicitadaPor == usuarioLogueado) {

            document.querySelector("#slc" + pos).addEventListener("click", cargarSelectViajes);
        }

    }

}


 function cargarSelectViajes() {
     let idboton = this.id;
     let posSolicitud = Number(idboton.substring(3));
     let objSolicitud = arraySolicitudes[posSolicitud];
     objSolicitud.estado = "cancelada";
     armarListadoSolicitudes("");

}
