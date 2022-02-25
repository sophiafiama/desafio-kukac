import React from "react";

function CarroModelo({ idx, modelo, ano, marca, qPortas}) {

   
    return (
        <>       
        <div className="m-3" >
            <h6 class="card-title">Carro {idx} | Modelo: {modelo}, Ano: {ano}, Marca: {marca}, Nº Portas: {qPortas} </h6>           
        </div>
        </>

    )
}

export default CarroModelo; 