import React from "react";

function MotoModelo({ idx, modelo, ano, marca, qRodas, qPassageiros}) {

   
    return (
        <>       
        <div className="m-3" >
            <h6 class="card-title">Carro {idx} | Modelo: {modelo}, Ano: {ano}, Marca: {marca}, Nº Rodas: {qRodas}, Nº Passageiros: {qPassageiros}</h6>           
        </div>
        </>

    )
}

export default MotoModelo; 