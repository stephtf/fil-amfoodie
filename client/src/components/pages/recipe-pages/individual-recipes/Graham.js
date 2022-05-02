import Header from "../../../header/Header";
import Dessert from "../Dessert";
import graham from '../recipe-photos/graham.jpg';

const Graham = () => {
  return (
    <div>
    <Header />
      <div className='body-container'>
      <h2 className="space-below-10 recipe-titles">Graham Cake</h2>
      <h3 className='center-text'>A Fil-Am tiramisu!</h3>
      <img src={graham}
        className="main-image space-below-25" 
        alt="a pot of chicken adobo"
      />

      <div className="ingredients-container">
        <div className="ingredients-subcontainer">
          <h4>Ingredients</h4>
          <ul className="bullet-points">
            <li>4 cups of fresh fruit (your choice, but we use strawberries, canned mango, and blueberries)</li>
            <li>1 pint of heavy whipping cream</li>
            <li>1 can of condensed milk</li>
            <li>1 box of graham crackers</li>
          </ul>
          <h4 className="space-above-25">Instructions</h4>
          <ol className="instruction-list">
            <li>Clean and cut your strawberries into small bite-sized pieces, or any other fruit that needs to be cut! Mix together all the fruit and set aside</li>
            <li> Put the heavy whipping cream into a mixing bowl and mix with a hand mixer for about 8-10 minutes until you reach "stiff peaks". Believe me it will happen, it just takes time! You can also use a kitchen aid or other stand mixer if you have one. 
            </li>
            <li> Next, mix in the condensed milk. This will make the whipped mixture sweet and delicious. 
            </li>
            <li>After you have a fluffy whipped mixture, we're ready to assemble the cake! Grab any dish you want (we think a long bread dish works fine), and put a layer of graham crackers at the bottom. 
            </li>
            <li>Add a layer of the whipped cream mixture on top of the graham crackers, then add a layer of fruit</li>
            <li>Repeat these layering steps until you reach the top of your dish. You can add a layer of fruit at the top so it looks nice!</li>
            <li>Refrigerate for at least 3 hours, but overnight is better. Enjoy!</li>
          </ol>
        </div>
      </div>
      </div>
      <Dessert />
    </div>
  );
};

export default Graham;
