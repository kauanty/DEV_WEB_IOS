import './App.css';
import Exemplo from './Components/Exemplo';
import Header from './Components/Header';
function App() {
    return (
        <div className="App">
            <Header nome="1"/>
            <Exemplo />
        </div>
    );
}

Header.defaultProps = {
    nome: 'Nome padrão',
    }; 

export default App; 
