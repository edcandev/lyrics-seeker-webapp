const inputArtista = document.querySelector(".container__input--artista");
const inputTitulo = document.querySelector(".container__input--titulo");
const buttonEnviar = document.querySelector(".container__button--enviar");

/**
 * GUARDAR CALORES EN VARIABLES
 * VALIDAR
 * 
 * 
 * 
 * A LARGO PLAZO:
 * AUTOCOMPLETADO
 */

buttonEnviar.addEventListener("click",()=>{
    //VALIDACIÓN DE LOS CAMPOS
    if(inputArtista.value == '' && inputTitulo.value == '') {
        alert("No ha ingresado nigún dato.");
    }else {
        if(inputArtista.value == '') {
            alert("No ha ingresado al artista.")
        }else {
            if(inputTitulo.value == '') {
                alert("No ha ingresado al artista.")
            }else {
                const valoresInput = [
                    inputArtista.value,
                    inputTitulo.value                    
                ];
                const valoresParseados = parsearBusqueda(valoresInput);
                buscarLyrics(valoresParseados);
            }
        }
    }
});

function pintarApi(letra) {
    console.log(letra);
    const br = '<br>';
    const n = /\n/g;
    const nuevoContenedor = document.createElement('DIV');

    const letraBr = letra.replace(n,br);
    nuevoContenedor.className = 'container-letra';
    nuevoContenedor.innerHTML = letraBr;
    document.body.appendChild(nuevoContenedor);
};

function parsearBusqueda(valInputs) {
    //PARSEANDO 
    const valsParseados = valInputs.map((val) =>{
        let valParseado = val.toLowerCase().split(' ');
        valParseado = valParseado.join('-');//arreglo a string
        // Busca espacios y los sustitutye por guiones
        return valParseado;
    });
    return valsParseados;
}

function buscarLyrics(valsParseados) {

    console.log("busqueda_comienza");
    // recibe un arreglo con los valores luistos para la consulta
    const URL = `https://api.lyrics.ovh/v1/${valsParseados[0]}/${valsParseados[1]}`;
    fetch(URL)
        .then(res => res.json())
        .then(data =>{
            const letra = data.lyrics;
            pintarApi(letra);
        })
        .catch(er => console.log("Ha ocurrido un error: "+er));
}




