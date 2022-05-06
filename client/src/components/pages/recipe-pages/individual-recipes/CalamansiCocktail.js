import Footer from "../../../header/Footer";
import Header from "../../../header/Header";
import Drinks from "../Drinks";
import calamansi from '../recipe-photos/calamansi.jpg';
import { useState, useEffect } from "react";
import moment from "moment";

const CalamansiCocktail = () => {
  const recipeName = "Calamansi Cocktail";

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

    fetch("https://www.filamfoodblog.com/comments", {
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
    const commentForm = document.getElementById("show-comment");
    commentForm.style.display = "block";
  };

  const hideNewComment = () => {
    const commentForm = document.getElementById("show-comment");
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
    const postReplyButton = document.getElementById("post-reply-button");
    const commentId = postReplyButton.value;

    fetch(`https://www.filamfoodblog.com/replies/${commentId}`, {
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
    fetch(`https://www.filamfoodblog.com/comments/${recipeName}`, {
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
    const replyButton = document.getElementById(`${id}`);
    replyButton.style.display = "none";
    const hideButton = document.getElementsByClassName("cancel-button");

    for (let i = 0; i < hideButton.length; i++) {
      let mybutton = hideButton[i];
      if (mybutton.value === id) {
        mybutton.style.display = "block";
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
      <h3 className='center-text'>AKA "Madaling Malasing" (Gets you drunk)</h3>
      <img src={calamansi}
        className="main-image space-below-25" 
        alt="a pot of chicken adobo"
      />

      <div className="ingredients-container space-below-75">
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

      <div className='kuwento space-below-75'>
        <h2 className='text-center space-below-25'>Kuwento</h2>
        <h3>Friday, May 6, 2022</h3>
        <p className='kuwento-paras'>This recipe is special to us because we created it when coming up with "drinks on arrival" to serve at our wedding. Since we're getting married in Atlanta in August it's going to be <i>super</i> hot! We wanted something refreshing and light, but still strong enough to keep our guests happy and coming back for more. My mom actually came up with the name for this drink, "Madaling Malasing," which means "gets you drunk" in Tagalog, because it really is strong!</p>
        <p className='kuwento-paras'>When we make this at home, we usually just use calamansi concentrate because that's easiest for us to find here where we live. But if you have a calamansi tree, or are able to get fresh calamansi, this would taste even better! We recently bought a calamansi tree, so I can't wait to make our calamansi cocktails once our fruits come in. That is, as long as I don't end up killing the plant by forgetting to water it!</p>
        <p className='kuwento-paras'>We love this recipe with sparkling water because it adds a little more fizz to the drink. However, we've also tried it with just regular water, mixing with the calamansi concentrate, and it still tastes good. It kind of depends on your preference.</p>
        <p className='kuwento-subtitle'>Can you use any type of vodka?</p>
        <p className='kuwento-paras'>Yes, you could, but we think that the grapefruit vodka gives it more of a citrius flavor. You could experiment with using lemon, but the grapefruit blends really well with the calamansi in this cocktail.</p>
      </div>

      <div className="space-above-50">
          <div>
            <h2 className="text-center space-below-25">Comments</h2>
            <h3
              className="comment-group"
              id="post-title"
              onClick={handleNewComment}
            >
              Post a Comment
            </h3>
            <form
              className="comment-group"
              id="show-comment"
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
                      <div
                        className="reply-button"
                        onClick={() => handleReply(`${comment._id}`)}
                        id={comment._id}
                      >
                        Reply
                      </div>
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
                            className="post-button"
                            id="post-reply-button"
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
          <Drinks />
        </div>
        <Footer />
      </div>
    </div>
  );
};


export default CalamansiCocktail;
