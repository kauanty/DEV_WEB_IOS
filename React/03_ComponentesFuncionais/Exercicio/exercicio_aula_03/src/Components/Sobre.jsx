const estilo = { fontFamily:'sans-serif', fontWeight: 'bold', color: '#e37ada'}
const estilo1 = { color: '#6f1767'}
const estilo2 = { border: '1px solid black', borderRadius: '13px', padding: '0 10px' }
const Sobre = () => {
    return (
        <article style = {estilo2}>
            <h2 style = {estilo1}>Ola, seja bem vindo</h2>
            <p style = {estilo}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </article>
    )
}

export default Sobre;