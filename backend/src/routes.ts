import { Router } from "express";
import CepController from './controller/CepController'
import PalindromoController from "./controller/PalindromoController";
import CurrencyController from "./controller/CurrencyController";
import CarroController from "./controller/CarroController"
import MotoController from "./controller/MotoController";
const router = Router(); 

router.post('/cep/body', CepController.queryPost)
router.post('/palindromo', PalindromoController.palindromoPost)
router.post('/currency', CurrencyController.currencyPost)
router.post('/carro/add', CarroController.criarCarro)
router.get('/carro/carros', CarroController.mostrarCarros)
router.post('/moto/add', MotoController.criarMoto)
router.get('/moto/motos', MotoController.mostrarMotos)

export {router};