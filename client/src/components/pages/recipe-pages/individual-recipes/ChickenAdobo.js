import Header from "../../../header/Header";
import Ulam from "../Ulam";
import adobo from '../recipe-photos/adobo.jpg';
import Footer from "../../../header/Footer";

const ChickenAdobo = () => {
  return (
    <div>
    <Header />
      <div className='body-container'>
      <h2 className="space-below-10 recipe-titles">Chicken Adobo</h2>
      <h3 className='center-text'>A Filipino staple</h3>
      <img src={adobo}
        className="main-image space-below-25" 
        alt="a pot of chicken adobo"
      />

      <div className="ingredients-container">
        <div className="ingredients-subcontainer">
          <h4>Ingredients</h4>
          <ul className="bullet-points">
            <li>2 lbs chicken (any parts, but thighs are best)</li>
            <li>2 cloves garlic</li>
            <li>2 tbs olive oil</li>
            <li>2-3 siling labuyo (optional)</li>
            <li>1/4 cup rice wine vinegar</li>
            <li> 1/4 cup soy sauce</li>
            <li>3 bay leaves</li>
            <li>1/2 tsp ground black pepper</li>
            <li>1/2 tbsp cornstarch (optional)</li>
          </ul>
          <h4 className="space-above-25">Instructions</h4>
          <ol className="instruction-list">
            <li>Cut chicken into two-inch pieces and set aside</li>
            <li> Mince up your garlic and then sauté it with the olive oil on medium heat in a pot
            </li>
            <li>If you want it a little spicy, add the optional siling labuyo and saute for a few minutes
            </li>
            <li>Once garlic is light brown, transfer your chicken into the pot and stir until completely mixed. Then add the rice wine vinegar, soy sauce, bay leaves, and ground black pepper to the pot</li>
            <li>Turn your heat down to a medium-low and simmer for 30-45 minutes (the longer you cook it, the more tender it will be)</li>
            <li>If you want your sauce thickened, mix the cornstarch with a little bit of water and then add it to the pot. Let simmer for a few minutes to thicken the liquid</li>
            <li>Remove from heat and enjoy over steamed rice</li>
          </ol>
        </div>
      </div>
      </div>
      <Ulam />
      <Footer />
    </div>
  );
};

export default ChickenAdobo;
