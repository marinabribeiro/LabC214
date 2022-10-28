class Automovel {
    constructor (tipo) {
        this.tipo = tipo
    }

    getTipo() {
        return this.tipo
    }
}

const automovel = new Automovel('moto')
console.log(automovel.getTipo())


const Automovel = (tipo)=> ({
    tipo,
    getTipo: ()=> tipo
})

const automovel = Automovel('moto')
console.log(automovel.getTipo())