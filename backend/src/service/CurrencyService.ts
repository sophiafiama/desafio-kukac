const numNotas = (arg1:number, arg2:number) => {
    const notas = [100,10,1]
    const nNotas = []
    let troco = arg1 - arg2
    for(let nota of notas){
        let qtnota = Math.floor(troco/nota)
        troco = troco%nota
        nNotas.push(`${qtnota} nota(s) de R$ ${nota},00`)
    }
    return nNotas;
}

export default numNotas;



