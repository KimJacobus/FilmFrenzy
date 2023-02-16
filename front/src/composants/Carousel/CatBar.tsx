import { useState } from "react";



// GET nom des categories via fetch, put into prop



const CatBar = () => {
    // fake array 
    
    const PickId : number = 1;

const cat = [
    { title: 'my new category', genre: 'action',  id: 1},
    { title: 'my horror category', genre: 'horror',  id: 2},
    { title: 'my comedy category', genre: 'comedy',  id: 3}
]; 

    return (


// variable 


        <div>
            {cat.filter(cat => cat.id == 1).map(filtCat => (
                <li>
                    {filtCat.genre}
                </li>
            ))}

        </div>





        // <div className="CatBar">

        // {cat.filter((category => category.id === {PickId}).map(filterCat => (

        //     <div className="flex bg-slate-900 text-white" key={filterCat.id}>

        //         <h2>{filterCat.title}</h2>

        //         <div><h1 className="jose text-1xl p-1">{filterCat.genre}</h1></div>
        //     </div>
        // )))}}

        // </div>


      );
}
 
export default CatBar;