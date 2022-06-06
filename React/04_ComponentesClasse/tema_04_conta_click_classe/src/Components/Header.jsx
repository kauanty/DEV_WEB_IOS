import { Component } from 'react';
import PropTypes from 'prop-types';

const estilo = {
    color: '#D9D9D9',
    borderBottom: 'yellow solid 2px',
    backgroundColor: '#121212',
};

export class Header extends Component {
    render() {
        return (
            <div>
                <h1 style={estilo}>Olá, {this.props.nome}, seja bem-vindo!</h1>
            </div>
        );
    }
}

Header.defaultProps = {
    nome: 'Nome padrão',
};

Header.propTypes = {
    nome: PropTypes.string,
};

export default Header;