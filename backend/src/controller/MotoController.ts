import {Request, Response} from 'express'; 
import Moto  from '../service/model/MotoService';
import dataDb from '../repository/dtb';


class MotoController {
    criarMoto(req: Request, res: Response) {
      const { modelo, ano, marca, qPassageiros } = req.body;

      const newMoto = new Moto(modelo, ano, marca, qPassageiros)
      dataDb.motos.push(newMoto);

      return res.send(dataDb.motos)
    }

    mostrarMotos(req:Request, res:Response){
      return res.send(dataDb.motos)
    }
}

export default new MotoController;