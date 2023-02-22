import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useState, createContext } from 'react';
import ReactDom from "react-dom/client";
import NavbarHome from '../navbar/NavbarHome';

const Inputsearchbar = (props:any) => {

    const [query, setQuery] = useState<string>();
    
    const queryContext = createContext(query)

    
    return ( 
        
        <queryContext.Provider value={query}>

        <div className="InputSearchBar">

        <Input className='bg-slate-600 w-96 h-10 rounded my-10 mr-5' value={query}
        onChange={(e) => setQuery(e.target.value)}    
        ></Input>

        <Button className="" variant="contained" color='info'>Search</Button>

        </div>

            <NavbarHome />
        </queryContext.Provider>

     );
}

export default Inputsearchbar;