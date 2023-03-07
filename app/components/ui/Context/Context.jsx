import { createContext, useState } from 'react'
const Context = createContext()

function Provider({children}) {

    const [lan, setLan] = useState('ru')
    
    return (
        <Context.Provider value={{lan, setLan}}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider}