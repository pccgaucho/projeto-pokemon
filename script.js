
async function executar() {
    const id = Number(document.getElementById("idPersonagem").value)
    const personagem = await load_pk(id)

    let imagem = personagem["sprites"]["front_default"]
    document.getElementById("img_pk").setAttribute("src", imagem)

    let div_pk = "#" + `${id}` + " - " + personagem["name"][0].toUpperCase() + personagem["name"].substring(1)
    document.getElementById("nome_pk").innerHTML = div_pk

    let types01_pk = personagem["types"][0]
    let type01_pk = types01_pk.type
    let tipo01_pk = type01_pk.name
    let div_tipo01_pk = tipo01_pk[0].toUpperCase() + tipo01_pk.substring(1)
    document.getElementById("tipo01").innerHTML = div_tipo01_pk

    let types02_pk = personagem["types"][1]
    let type02_pk = types02_pk.type
    let tipo02_pk = type02_pk.name
    let div_tipo02_pk = tipo02_pk[0].toUpperCase() + tipo02_pk.substring(1)
    document.getElementById("tipo02").innerHTML = div_tipo02_pk

/*

    limpar();
*/
}

function limpar() {
    document.getElementById("idPersonagem").value = "";
}

function escrever(texto) {
    console.log(texto)
}

async function load_pk(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const response = await fetch(url)
    return response.json()
}
