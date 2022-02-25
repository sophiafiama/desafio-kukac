import axios from "axios";

class CepService{
    getCep = async (ceps: Array<number | string>) =>{
        const mapCep = ceps.map(async (numbers) =>{
            try{
                return await axios.get(`https://viacep.com.br/ws/${numbers}/json`)
            } catch(error){
                return {
                    data: `Erro no cep ${numbers}`
                
                }
            }
        });

        const result = await Promise.all(mapCep)
        const arrCeps: Array<number | string> = []
        result.map(cep => arrCeps.push(cep?.data))

        return arrCeps;
    }
}

export default new CepService(); 