const ePalindromo = (valor:number) =>{
    const palindromo = valor.toString()
    .split('').
    reverse().
    join('');
    return valor.toString() === palindromo ? valor : null;
}

const arrPalindromo = (arg1:number, arg2:number) => {
    const arrP = []

    for(let i = arg1; i <= arg2; i++) {
        arrP.push(ePalindromo(i))
    }
    return arrP.filter(item=> !!item);
}

export default arrPalindromo;


