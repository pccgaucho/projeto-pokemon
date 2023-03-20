
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
    let cor_btn01 = cor_btn(tipo01_pk)
    document.getElementById("tipo01").style.background = cor_btn01

    let tipos = personagem.types
    if (tipos.length == 2) {
        document.getElementById("tipo02").style.display = "inline-block"
        let types02_pk = personagem["types"][1]
        let type02_pk = types02_pk.type
        let tipo02_pk = type02_pk.name
        let div_tipo02_pk = tipo02_pk[0].toUpperCase() + tipo02_pk.substring(1)
        document.getElementById("tipo02").innerHTML = div_tipo02_pk
        let cor_btn02 = cor_btn(tipo02_pk)
        document.getElementById("tipo02").style.background = cor_btn02
    } else {
        document.getElementById("tipo02").style.display = "none"
    }
    limpar()
}

function limpar() {
    document.getElementById("idPersonagem").value = "";
}

function cor_btn(tipo_pk) {
    switch (tipo_pk) {
        case "grass":
            let cor1 = "#9BCC50"
            return cor1
        case "poison":
            let cor2 = "#B97FC9"
            return cor2
        case "bug":
            let cor3 = "#729F3F"
            return cor3
        case "fire":
            let cor4 = "#FD7D24"
            return cor4
        case "water":
            let cor5 = "#4592C4"
            return cor5
        case "electric":
            let cor6 = "#EED535"
            return cor6
        case "ground":
            let cor7 = "#AB9842"
            return cor7
        case "flying":
            let cor8 = "#BDB9B8"
            return cor8
        case "ice":
            let cor9 = "#51C4E7"
            return cor9
        case "rock":
            let cor10 = "#A38C21"
            return cor10
        case "steel":
            let cor11 = "#9EB7B8"
            return cor11
        case "psychic":
            let cor12 = "#F366B9"
            return cor12
        case "normal":
            let cor13 = "#A4ACAF"
            return cor13
        case "fighting":
            let cor14 = "#D56723"
            return cor14
        case "ghost":
            let cor15 = "#7B62A3"
            return cor15
        case "dark":
            let cor16 = "#707070"
            return cor16
        case "dragon":
            let cor17 = "#F16E57"
            return cor17
        case "fairy":
            let cor18 = "#FDB9E9"
            return cor18          
        default:
            let cor = "#ffffff"
            return cor
    }  
}

async function load_pk(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const response = await fetch(url)
    return response.json()
}
