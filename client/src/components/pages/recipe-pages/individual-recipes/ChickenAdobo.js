import Header from "../../../header/Header";
import Ulam from "../Ulam";
import adobo from '../recipe-photos/adobo.jpg';
import Footer from "../../../header/Footer";
import { useState, useEffect } from "react";
import moment from "moment";

const ChickenAdobo = () => {
  const recipeName = "Chicken Adobo";

  // comments - adding new form data to state
  const [formData, setFormData] = useState({
    recipe: `${recipeName}`,
    name: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // comments - posting comment data from state to database
  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("https://www.filamfoodie.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newComment) => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // comments - show/hide comment form box upon user click
  const handleNewComment = () => {
    const commentForm = document.getElementsByClassName("show-comment")[0];
    commentForm.style.display = "block";
  };

  const hideNewComment = () => {
    const commentForm = document.getElementsByClassName("show-comment")[0];
    commentForm.style.display = "none";
  };

  // replies - adding new form data to state
  const [replyData, setReplyData] = useState({
    replies: {
      name: "",
      replyMessage: "",
    },
  });

  const handleReplyChange = (event) => {
    const { name, value } = event.target;

    setReplyData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // replies - posting reply data from state to database (replies of another user's comment)
  const handleReplyPost = (event) => {
    event.preventDefault();
    const postReplyButton = document.getElementsByClassName("post-reply-button")[0];
    const commentId = postReplyButton.value;

    fetch(`https://www.filamfoodie.com/replies/${commentId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(replyData),
    })
      .then((res) => res.json())
      .then((newReply) => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // comments and replies - fetching all recipe data from database
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    fetch(`https://www.filamfoodie.com/comments/${recipeName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((comments) => {
        setCommentData(comments.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // parse the timestamp and then convert moment into UTC to make comparison using .from() method
  const parsetime = (timestamp) => {
    let postdate = timestamp.split("-");
    let postDate2 = timestamp.split('.')[0];
    postDate2=postDate2.replace('T','-');
    postDate2=postDate2.replace(/:/gi,'-');
    let postDate3 = postDate2.split('-');
        if (postdate[2]) {
          let othervalue = postdate[2].split("T");
          postdate[2] = othervalue[0];
          postdate.pop();
        }
    let nowTime = moment().utc().format("YYYY-MM-DD-HH-mm-ss");
    let fromNowValues = nowTime.split("-");
    
    return moment(postDate3).from(moment(fromNowValues))
      
}

  // when 'reply' is clicked - hide reply button and display cancel button
  const [replyForm, setReplyForm] = useState("");
  const handleReply = (id) => {
    setReplyForm(id);
    const replyButtons = document.getElementsByClassName('reply-button');
    const hideButtons = document.getElementsByClassName("cancel-button");
    for (let i = 0; i < replyButtons.length; i++) {
      let replyBtn = replyButtons[i];
      if(replyBtn.value === id) {
        replyBtn.style.display = 'none'; 
      } else {
        replyBtn.style.display = 'block';
      }
    }
    for (let i = 0; i < hideButtons.length; i++) {
      let cancelBtn = hideButtons[i];
      if (cancelBtn.value === id) {
        cancelBtn.style.display = "block";
      }
    }
  };

  // when 'cancel' is clicked - hide cancel button and display reply button
  const handleHide = (id) => {
    setReplyForm("");
    const replyButton = document.getElementById(`${id}`);
    replyButton.style.display = "block";
    const hideButton = document.getElementsByClassName("hide-button");
    for (let i = 0; i < hideButton.length; i++) {
      let mybutton = hideButton[i];
      if (mybutton.value === id) {
        mybutton.style.display = "none";
      }
    }
  };

  return (
    <div>
    <Header />
    <div className='body-container'>
      <h2 className="space-below-10 recipe-titles">{recipeName}</h2>
      <h3 className='center-text'>A Filipino staple</h3>
      <img src={adobo}
        className="main-image space-below-25" 
        alt="a pot of chicken adobo"
      />

      <div className="ingredients-container space-below-75">
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

      <div className='kuwento space-below-75'>
        <h2 className='text-center space-below-25'>Kuwento</h2>
        <h3>May 14, 2022</h3>
        <p className='kuwento-paras'>Chicken Adobo is an ABSOLUTE CLASSIC in Filipino cuisine! I grew up eating chicken adobo often, and — as I’m sure is the case for many Fil-Ams — it’s a comfort food that always reminds me of home cooking. I love the mix of flavors and the way that the sauce pairs with jasmine rice. Don’t even get me started with the Adobo Aroma you get while it’s cooking.
        </p>
        <p className='kuwento-paras'>This dish is perfect when you want to cook a dish that you can set and forget. Once all the ingredients are in the pot, you just leave it for 30-45 minutes (depending on how hungry you are). At this time, we usually set up our rice cooker to start so by the time we come back to check on it, both the adobo and rice are ready to eat! 
        </p>
        <p className='kuwento-paras'>Whenever we make chicken adobo, we usually use boneless, skinless chicken thighs although traditionally, both chicken legs and chicken thighs are used. We also play around a little bit with the ratio of soy sauce and rice wine vinegar, depending on how salty or sour/acidic we want the sauce to be, and add siling labuyo (AKA Filipino chile pepper) if we want to add a little bit of spice. Traditionally, pepper corns are added to pot for added flavor. However, both Steph and I HATE biting into a pepper corn so we just use ground black pepper. Don’t forget the bay leaves!
        </p>
        <p className='kuwento-paras'>Kain na!</p>
        <p className='signature'>- Gian</p>
      </div>

      <div className="space-above-50">
          <div>
            <h2 className="text-center space-below-25">Comments</h2>
            <h3
              className="comment-group post-title"
              onClick={handleNewComment}
            >
              Post a Comment
            </h3>
            <form
              className="comment-group show-comment"
              style={{ display: "none" }}
            >
              <div className="newcomment-box">
                <label htmlFor="name" className="form-label">
                  Name{" "}
                </label>
                <input
                  onChange={handleChange}
                  type="name"
                  value={formData.name}
                  name="name"
                  className="form-style textbox-style"
                  required
                />
                <label htmlFor="message" className="form-label">
                  Message{" "}
                </label>
                <textarea
                  onChange={handleChange}
                  rows="5"
                  type="message"
                  value={formData.message}
                  name="message"
                  className="form-style textbox-style"
                  required
                />
                <div className="reply-buttons">
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={hideNewComment}
                  >
                    Cancel
                  </button>
                  <button className="post-button" onClick={handleFormSubmit}>
                    Post
                  </button>
                </div>
              </div>
            </form>
            {commentData &&
              commentData.map((comment) => {
                return (
                  <div className="comment-box" key={comment._id}>
                    <div className="subcomment-box">
                      <h5 className="comment-name">{comment.name}</h5>
                      <small>{parsetime(comment.timestamp)}</small>

                      <p className="comment-message">{comment.message}</p>
                      <button
                        className="reply-button"
                        onClick={() => handleReply(`${comment._id}`)}
                        id={comment._id} value={comment._id}
                      >
                        Reply
                      </button>
                    </div>
                    {replyForm === `${comment._id}` && (
                      <form className="reply-group space-below-25">
                        <h3 className="space-below-10">Post a Reply</h3>
                        <label htmlFor="name" className="form-label">
                          Name{" "}
                        </label>
                        <input
                          type="name"
                          name="name"
                          className="form-style textbox-style"
                          onChange={handleReplyChange}
                          required
                        />
                        <label htmlFor="message" className="form-label">
                          Message{" "}
                        </label>
                        <textarea
                          rows="4"
                          type="message"
                          name="replyMessage"
                          className="form-style textbox-style"
                          onChange={handleReplyChange}
                          required
                        />
                        <div className="reply-buttons">
                          <button
                            className="cancel-button"
                            onClick={() => handleHide(`${comment._id}`)}
                            value={comment._id}
                          >
                            Cancel
                          </button>
                          <button
                            className="post-button post-reply-button"
                            value={comment._id}
                            onClick={handleReplyPost}
                          >
                            Post
                          </button>
                        </div>
                      </form>
                    )}
                    <hr></hr>
                    <div className="replies-box">
                      {comment.repliesCount > 1 || comment.repliesCount < 1 ? (
                        <small className="space-below-10">
                          {comment.repliesCount} Replies
                        </small>
                      ) : (
                        <small className="space-below-10">
                          {comment.repliesCount} Reply
                        </small>
                      )}

                      {comment.replies.map((replies) => {
                        return (
                          <div key={replies._id} className="subcomment-box">
                            <h5 className="comment-name">{replies.name}</h5>
                            <small>{parsetime(replies.timestamp)}</small>
                            <p className="comment-message space-below-10">
                              {replies.replyMessage}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <h2 className="text-center space-above-75 space-below-25">
          Check out these other appetizers!
        </h2>
        <div className="space-above-10">
          <Ulam />
        </div>
        <Footer />
      </div>
    </div>
  );
};




export default ChickenAdobo;
