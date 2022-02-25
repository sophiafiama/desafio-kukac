import  Carro  from "../service/model/CarroService";
import Moto from "../service/model/MotoService"

class dataDb{
    carros: Array<Carro>; 
    motos: Array<Moto>

    constructor(){
        this.carros = []
        this.motos = []
    }
}

export default new dataDb();
