import Header from "../../../header/Header";
import Drinks from "../Drinks";
import calamansi from '../recipe-photos/calamansi.jpg';

const CalamansiCocktail = () => {
  return (
    <div>
    <Header />
      <div className='body-container'>
      <h2 className="space-below-10 recipe-titles">Calamansi Cocktail</h2>
      <h3 className='center-text'>AKA "Madaling Malasing" (Gets you drunk)</h3>
      <img src={calamansi}
        className="main-image space-below-25" 
        alt="a pot of chicken adobo"
      />

      <div className="ingredients-container">
        <div className="ingredients-subcontainer">
          <h4>Ingredients<small> (for a single drink)</small></h4>
          <ul className="bullet-points">
            <li>1 and 1/2 shots grapefruit vodka</li>
            <li>1 packet of calamansi concentrate</li>
            <li>8 ounces sparkling water</li>
            <li>1 shot of sprite</li>
            <li>2 tsp simple syrup (to taste)</li>
            <li>3 cubes of ice</li>
          </ul>
          <h4 className="space-above-25">Instructions</h4>
          <ol className="instruction-list">
            <li>Mix packet of calamansi concentrate (equivalent to .5 oz if you use real calamansi juice) with 8 oz of sparkling water </li>
            <li> Add a shot of sprite, 1 and 1/2 shots grapefruit vodka, and simple syrup. Mix or shake well.
            </li>
            <li>Add ice and enjoy!
            </li>
          </ol>
        </div>
      </div>
      </div>
      <Drinks />
    </div>
  );
};

export default CalamansiCocktail;
