import {Request, Response} from 'express'; 
import Carro  from '../service/model/CarroService';
import dataDb from '../repository/dtb';


class CarroController {

    criarCarro(req: Request, res: Response) {
      const { modelo, ano, marca, qPortas } = req.body;

      const newCarro = new Carro(modelo, ano, marca, qPortas)
      dataDb.carros.push(newCarro);

      return res.send(dataDb.carros)
    }

    mostrarCarros(req:Request, res:Response){
      return res.send(dataDb.carros)
    }
      
    
}

export default new CarroController;