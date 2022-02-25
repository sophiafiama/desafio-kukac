import React from "react";

function Cep({ idx, cep, logradouro, complemento, bairro, localidade, uf}) {

   
    return (
        <>       
        <div className="m-3" >
            <h5 class="card-title">ViaCep {idx} </h5>
            <p class="card-text">Cep: {cep}, Rua: {logradouro}</p>
            <p class="card-text">Complemento: {complemento}</p>
            <p class="card-text">Bairro: {bairro}, Cidade: {localidade}, UF: {uf}</p>

        </div>



        </>

    )
}

export default Cep