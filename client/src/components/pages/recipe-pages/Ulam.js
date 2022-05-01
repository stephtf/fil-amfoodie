import ChickenAdoboCard from "./recipe-cards/ChickenAdobo-card";

const Ulam = () => {
    return (
        <div className='body-container recipes-space'>
            <ChickenAdoboCard /> 
        </div>
    )
}
export default Ulam; 






// import { useState } from 'react';
// import ChickenAdoboCard from "./recipe-cards/ChickenAdobo-card";
// import ChickenAdobo from '../recipe-pages/individual-recipes/ChickenAdobo';


// const Ulam = () => {

//     const [Recipe, setRecipe] = useState('');
//     const handleRecipe = (show) => setRecipe(show);

//     return (
//         <div>
//             <div className='body-container recipes-space'>
//                 <ChickenAdoboCard handleRecipe={handleRecipe}/> 
//             </div>
//             {Recipe === 'ChickenAdobo' && <ChickenAdobo /> }
//         </div>


//     )
// }

// export default Ulam; 