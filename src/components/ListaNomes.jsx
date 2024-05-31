 import {useState} from 'react'; 
 
 const ListaNomes = ({nome, sobrenome, nomes, estilo }) => { 
    const [value, setValue] = useState('')
 
    return (
        <>
            <ul style={estilo}   >
                <li >Lista de Nomes</li>
                <li>{nome}</li>
                <li>{sobrenome}</li>
                {
                    nomes.map((nome, index) => <li key={index}>{nome}</li>)
                    
                }
            </ul>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value) } placeholder="Digite um nome" />    
            <button >Adicionar</button>
            <p>{value}</p>    
        </>
    )
}

export default ListaNomes;