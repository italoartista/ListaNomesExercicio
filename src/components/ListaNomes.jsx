 import {useState} from 'react'; 
 
 const ListaNomes = () => { 
    const [value, setValue] = useState('')
    const [lista, setLista] = useState(['Ana', 'Bia', 'Carlos', 'Daniel', 'Eduardo', 'Fernanda', 'Gustavo', 'Hugo', 'Igor', 'João']);
    
    function adicionaLista () { 
        if(value !== '') { 
            setLista([...lista, value])
            setValue('')       
        } 
    }    

    function limpaLista () { 
        setLista([])
    }

    function removeFinal () { 
        setLista(lista.filter( (nome) => value !== nome )) 
    }
    function adicionaVarios () { 
        let novaLista = value.split(' ')
        setLista([...lista, ...novaLista])
    }
    return (
        <>
            <ul    >
                <li >Lista de Nomes</li>
             
                {
                    lista.map((item, index) => (
                        <li key={index}>{item} <button>Remover</button></li>

                    ))
                    
                }
            </ul>
            <input type="text" value={value} 
                    onChange={(e) => setValue(e.target.value) } 
                    placeholder="Digite um nome" />    
            <button onClick={adicionaLista} >Adicionar</button>
            <button onClick={limpaLista}>Limpar</button>
            <button onClick={removeFinal}>Remover</button>
            <button onClick={adicionaVarios}>Adicionar Vários</button>
            <p>{value}</p>    
        </>
    )
}

export default ListaNomes;