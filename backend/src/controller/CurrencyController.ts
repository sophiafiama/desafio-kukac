import numNotas from "../service/CurrencyService";
import {Request, Response} from 'express'; 

class CurrencyuController{
    currencyPost(req: Request, res:Response){
        const {arg1} = req.body;
        const {arg2} = req.body

       return res.send(numNotas(arg1,arg2))  

   }
   
}

export default new CurrencyuController; 