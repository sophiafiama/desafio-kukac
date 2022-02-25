import { IVeiculo } from "./IVeiculo";

class Carro implements IVeiculo{
    modelo: string;
    ano : number;
    marca: string;    
    qPortas:number;

    constructor(modelo: string, ano: number, marca: string, qPortas:number) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
        this.qPortas = qPortas
    }
}

export default Carro;