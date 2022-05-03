import Footer from "../../../header/Footer";
import Header from "../../../header/Header";
import Appetizers from "../Appetizers";
import lumpia from "../recipe-photos/lumpia.jpg";
import { useState, useEffect } from 'react';

const LumpiangShanghai = () => {

  const recipeName = 'lumpiangshanghai';

  // adding new data to formData state
  const [formData, setFormData] = useState({
    recipe: `${recipeName}`,
    name: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target 

    setFormData(prevData => {
      return {
        ...prevData, 
        [name]: value
      }
    })
  }  

  // adding new formdata to the database
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    console.log(formData);

    fetch('http://localhost:3001/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((newComment) => {
        console.log(newComment);
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      })
  }

  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/comments/${recipeName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((comments) => {
          setCommentData(comments.reverse());
      })
      .catch(err => {
        console.error(err);
      })
    }, []);

  const [replyForm, setReplyForm] = useState(false);
  const handleReply = () => setReplyForm(replyForm => !replyForm); 
  // const replyId = document.getElementById('replyId');

    useEffect(() => {
     setReplyForm(false);
    //  console.log(replyId);
    //  const replyIdValue = replyId.value;
    //  console.log(replyIdValue)
    }, [])

    const replyFormdiv = document.getElementsByClassName('replyform-container')[0];

    if(replyForm ) {
      if(replyFormdiv) {
        replyFormdiv.style.display = 'none'; 
      }
    } else {
      if(replyFormdiv) {
        replyFormdiv.style.display = 'block';
      }
    }


  

  return (
    <div>
      <Header />
      <div className="body-container">
        <h2 className="space-below-10 recipe-titles">Lumpiang Shanghai</h2>
        <h3 className="center-text">Fried and yummy</h3>
        <img
          className="main-image space-below-25"
          src={lumpia}
          alt="lumpia in a paper bowl"
        />

        <div className="ingredients-container">
          <div className="ingredients-subcontainer">
            <h4>Ingredients</h4>
            <ul className="bullet-points">
              <li>1 package spring roll wrapper</li>
              <li>1/2 lb ground pork</li>
              <li>1/2 lb ground beef</li>
              <li>1/2 cup shredded carrots</li>
              <li>1/2 cup minced onions</li>
              <li>1/2 cup chopped cilantro</li>
              <li>1 tsp salt</li>
              <li>1 tsp ground black pepper</li>
              <li>1 tsp garlic powder</li>
              <li>1 large egg</li>
              <li>2 tbsp Worcestershire sauce (optional)</li>
              <li>vegetable or canola oil for deep frying</li>
            </ul>
            <h4 className="space-above-25">Instructions</h4>
            <ol className="instruction-list">
              <li>Prep your spring roll wrapper by peeling each individual sheet. Set aside
              </li>
              <li>
                Prepare your vegetables. Mince the onions, shred the carrots. Or, you could just buy already shredded carrots, which is what we do! Then chop up your cilantro.
              </li>
              <li>
                To a large mixing bowl, add the veggies with the raw ground pork, raw ground beef, spices, and optional Worcestershire. Mix well until all ingredients are evenly distributed. 
              </li>
              <li>
                Now you're ready to start wrapping. Take one spring roll wrapper and add one spoonful of the meat mixture to the bottom edge. Spread the meat mixture evenly across the wrapper, and then roll tightly until you have about one inch of wrapper left. At this point, take some raw scrambled egg with your fingers and spread it across the wrapper and continue to roll and seal it. The lumpia will be long and have open edges.  
              </li>
              <li>
                Take some kitchen shears and cut the long lumpia into thirds. This will allow for easier frying and eating! 
              </li>
              <li>
                Continue to roll the rest of the meat mixture until you run out of wrapper! 
              </li>
              <li>Once you are done with wrapping, now it's time to deep fry. Get your favorite deep frying pan and fill it until one eggroll will be fully submerged. It's okay to eyeball this step.
              </li>
              <li>When the oil is heated (keep it on medium heat), throw in the lumpia and cook until golden brown.
              </li>
            </ol>
          </div>
        </div>

        <div className='space-above-50'>
          <div>
            <h2 className="text-center space-below-25">Comments</h2>
              {commentData && commentData.map((comment) => {
                return (
                  <div className='comment-box' key={comment._id}>
                    <h5>{comment.name}</h5>
                    <small>{comment.timestamp}</small>
                    <p>{comment.message}</p>
                    <button className='reply-button' onClick={handleReply} id='replyId' value={comment._id}>Reply</button>
                    <p>{comment.replies}</p>
                    {comment.replies > 0? 
                    <button className='reply-button' onClick={handleReply}>Reply</button> : <div></div>}
          { replyForm && 
           <div className='replyform-container'>
           <form className='comment-group space-below-25'>
                 <h3 className='space-below-10'>Post a Reply</h3>
                 <label htmlFor='name' className='form-label'>Name </label>
                 <input onChange={handleChange} type='name' value={formData.name} name='name' className='form-style textbox-style' required/>
                 <label htmlFor='message' className='form-label'>Message </label>
                 <textarea onChange={handleChange} rows='5' type='message' value={formData.message} name='message' className='form-style textbox-style' required/>
                 <button onClick={handleFormSubmit} className='form-button'>Post</button>
               </form>
           </div> 
          }
                  </div> 
                  )
              })}



    

            
          </div>
          <form className='comment-group space-below-25'>
            <h3 className='space-below-10'>Post a Comment</h3>
            <label htmlFor='name' className='form-label'>Name </label>
            <input onChange={handleChange} type='name' value={formData.name} name='name' className='form-style textbox-style' required/>
            <label htmlFor='message' className='form-label'>Message </label>
            <textarea onChange={handleChange} rows='5' type='message' value={formData.message} name='message' className='form-style textbox-style' required/>
            <button onClick={handleFormSubmit} className='form-button'>Post</button>
          </form>
        </div>
      </div>

  <div className='space-above-50'>
    <Appetizers />
  </div>

      <Footer />
    </div>
  );
};

export default LumpiangShanghai;
