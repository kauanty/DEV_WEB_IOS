import PropTypes from 'prop-types';
const BoasVindas = (props) => {
    return (
        <body>
        <section style = {{ margin:'20px 0', border: '1px solid black', borderRadius: '13px', padding: '0 10px' }}>
            <h1 style = {{ color: '#121212'}}>Ola {props.nome}, seja bem vindo</h1>
            <p  style={{fontFamily:'sans-serif',color: '#383838'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </section>
        </body>
    )
}

BoasVindas.defaultProps = {
    nome: 'Usuário'
 };

    

export default BoasVindas;