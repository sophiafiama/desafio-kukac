import {Request, Response} from 'express'; 
import arrPalindromo from '../service/PalindromoService';

class PalindromoController{
     palindromoPost(req: Request, res:Response){
        const {arg1} = req.body
        const {arg2} = req.body

        return res.send(arrPalindromo(arg1,arg2))   

    }
    
}

export default new PalindromoController; 