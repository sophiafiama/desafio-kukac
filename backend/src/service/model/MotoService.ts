import { IVeiculo } from "./IVeiculo";

 class Moto implements IVeiculo{
    modelo: string;
    ano : number;
    marca: string;
    qRodas:number;
    qPassageiros:number;

    constructor(modelo: string, ano: number, marca: string,qPassageiros:number) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
        this.qRodas = 2;
        this.qPassageiros = qPassageiros;

    }
}

export default Moto;