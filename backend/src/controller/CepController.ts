import {Request, Response} from 'express'; 
import CepService from '../service/CepService';

class CepController{
    

    async queryPost(req: Request, res:Response){
        const {cep} = req.body
        
        if(!cep)
        return res.status(400).send('Requisição vazia')
        return res.send(await CepService.getCep(cep))
    }
    
}

export default new CepController; 
