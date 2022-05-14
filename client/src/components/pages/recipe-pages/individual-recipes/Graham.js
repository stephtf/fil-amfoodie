import Footer from "../../../header/Footer";
import Header from "../../../header/Header";
import Dessert from "../Dessert";
import graham from "../recipe-photos/graham.jpg";
import { useState, useEffect } from "react";
import moment from "moment";

const Graham = () => {
  const recipeName = "Graham Cake";

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
      <div className="body-container">
        <h2 className="space-below-10 recipe-titles">{recipeName}</h2>
        <h3 className="center-text">A Fil-Am tiramisu!</h3>
        <img
          src={graham}
          className="main-image space-below-25"
          alt="a pot of chicken adobo"
        />

        <div className="ingredients-container space-below-75">
          <div className="ingredients-subcontainer">
            <h4>Ingredients</h4>
            <ul className="bullet-points">
              <li>
                4 cups of fresh fruit (your choice, but we use strawberries,
                canned mango, and blueberries)
              </li>
              <li>1 pint of heavy whipping cream</li>
              <li>1 can of condensed milk</li>
              <li>1 box of graham crackers</li>
            </ul>
            <h4 className="space-above-25">Instructions</h4>
            <ol className="instruction-list">
              <li>
                Clean and cut your strawberries into small bite-sized pieces, or
                any other fruit that needs to be cut! Mix together all the fruit
                and set aside
              </li>
              <li>
                {" "}
                Put the heavy whipping cream into a mixing bowl and mix with a
                hand mixer for about 8-10 minutes until you reach "stiff peaks".
                Believe me it will happen, it just takes time! You can also use
                a kitchen aid or other stand mixer if you have one.
              </li>
              <li>
                {" "}
                Next, mix in the condensed milk. This will make the whipped
                mixture sweet and delicious.
              </li>
              <li>
                After you have a fluffy whipped mixture, we're ready to assemble
                the cake! Grab any dish you want (we think a long bread dish
                works fine), and put a layer of graham crackers at the bottom.
              </li>
              <li>
                Add a layer of the whipped cream mixture on top of the graham
                crackers, then add a layer of fruit
              </li>
              <li>
                Repeat these layering steps until you reach the top of your
                dish. You can add a layer of fruit at the top so it looks nice!
              </li>
              <li>
                Refrigerate for at least 3 hours, but overnight is better.
                Enjoy!
              </li>
            </ol>
          </div>
        </div>

      <div className='kuwento space-below-75'>
        <h2 className='text-center space-below-25'>Kuwento</h2>
        <h3>May 14, 2022</h3>
        <p className='kuwento-paras'>Graham Cake (or just Graham, as we call it) is that dessert that gives you the perfect blend of sweet, creamy, and refreshing with a wonderful mix of textures. I am OBSESSED with this dish! I could eat 1-2 servings of Graham at every single meal and never get tired of it. The way that the graham crackers adopt a cake-like texture after soaking the cream is just to die for. In the words of my father, graaaaabe!
        </p>
        <p className='kuwento-paras'>Whenever we make Graham, we always start with the cream. The first time we made this dish, we actually tried whisking the cream since we did not have a mixer. Do not do this!We were mixing for over 20 minutes and the cream was still a liquid.  Save yourself some time and buy a mixer. We have also previously attempted a vegan version of this dish by using coconut cream instead of heavy cream. The main challenge was that coconut cream does not whip as nicely as heavy cream due to lower fat content. It still tasted good though!
        </p>
        <p className='kuwento-subtitle'>What fruits should you use?</p>
        <p className='kuwento-paras'>One of my favorite parts of Graham is that you can put in whatever fruits you want. We love using mangos and strawberries, but bananas are quite good too. Canned fruit cocktail is also common, but fresh fruits are better if you have them. With that being said, it’s not always possible to get fresh fruits. We have used mangos from the mango cups a few times, and it’s still really good. 
        </p>
        <p className='kuwento-paras'>Graham is best served cold and pairs well with coffee.
        </p>
        <p className='kuwento-paras'>Kain na!
        </p>
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
          <Dessert />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Graham;
