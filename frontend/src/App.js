import './App.scss';
import AddressCard from './pages/components/AddressCard';
import Palindromo from './pages/components/Palindromo';
import Currency from './pages/components/Currency'
import Carro from './pages/components/Carro'
import Moto from './pages/components/Moto'


function App() {
  return (
    <>
      <div className='text-center'>
      <h2>Nosos serviços!</h2>
      <Palindromo />
      <Currency />
      <Carro/>
      <Moto/>
      <AddressCard />
      </div>      

    </>


  );
}
export default App;
