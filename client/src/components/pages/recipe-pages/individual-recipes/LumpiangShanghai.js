import Footer from "../../../header/Footer";
import Header from "../../../header/Header";
import Appetizers from "../Appetizers";
import lumpia from "../recipe-photos/lumpia.jpg";
import { useState, useEffect } from "react";
// import moment from 'moment';

const LumpiangShanghai = () => {
  const recipeName = "Lumpiang Shanghai";

  // adding new comment data to formData state
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

  // adding new formdata to the database
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    fetch("https://www.filamfoodblog.com/comments", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newComment) => {
        console.log(newComment);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // show/hide comment form upon user click
  const handleNewComment = () => {
    const commentForm = document.getElementById("show-comment");
    commentForm.style.display = "block";
  };

  const hideNewComment = () => {
    const commentForm = document.getElementById("show-comment");
    commentForm.style.display = "none";
  };

  // replies - save reply form data to state
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


  const handleReplyPost = (event) => {
    event.preventDefault();
    // console.log(replyData);
    const postReplyButton = document.getElementById('post-reply-button');
    const commentId = postReplyButton.value; 
    // console.log(commentId);

    fetch(`https://www.filamfoodblog.com/replies/${commentId}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(replyData),
    })
      .then((res) => res.json())
      .then((newReply) => {
        // console.log(newReply);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // fetching the data from the database to display comments
  const [commentData, setCommentData] = useState([]);
  // const [timeStamp, setTimestamp] = useState([]);
  // console.log(timeStamp);
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

        // let timestampArray = [];

        // for (let i = 0; i < comments.length; i++) {
        //   // use moment.js to format the time with .fromNow
        //   const postDate = moment().format(comments[i].timestamp);
        //   let postDateValues = postDate.split("-");
        //   if (postDateValues[2]) {
        //     let othervalue = postDateValues[2].split("T");
        //     postDateValues[2] = othervalue[0];
        //     postDateValues.pop();
        //   }

        //   let nowTime = moment().format("YYYY-MM-DD");
        //   let fromNowValues = nowTime.split("-");
        //   console.log(moment(postDateValues).from(moment(fromNowValues)));
        //   timestampArray.push(
        //     moment(postDateValues).from(moment(fromNowValues))
        //   );
        //   console.log(timestampArray);
        //   setTimestamp([...timestampArray].reverse());
          
        // }
  
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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

  const handleHide = (id) => {
    setReplyForm("");
    const replyButton = document.getElementById(`${id}`);
    replyButton.style.display = "block";
    // console.log(document.getElementsByClassName("cancel-button"));
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
        <h2 className="space-below-10 recipe-titles">Lumpiang Shanghai</h2>
        <h3 className="center-text">Fried and yummy</h3>
        <img
          className="main-image space-below-25"
          src={lumpia}
          alt="lumpia in a paper bowl"
        />

        <div className="ingredients-container space-below-75">
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
              <li>
                Prep your spring roll wrapper by peeling each individual sheet.
                Set aside
              </li>
              <li>
                Prepare your vegetables. Mince the onions, shred the carrots.
                Or, you could just buy already shredded carrots, which is what
                we do! Then chop up your cilantro.
              </li>
              <li>
                To a large mixing bowl, add the veggies with the raw ground
                pork, raw ground beef, spices, and optional Worcestershire. Mix
                well until all ingredients are evenly distributed.
              </li>
              <li>
                Now you're ready to start wrapping. Take one spring roll wrapper
                and add one spoonful of the meat mixture to the bottom edge.
                Spread the meat mixture evenly across the wrapper, and then roll
                tightly until you have about one inch of wrapper left. At this
                point, take some raw scrambled egg with your fingers and spread
                it across the wrapper and continue to roll and seal it. The
                lumpia will be long and have open edges.
              </li>
              <li>
                Take some kitchen shears and cut the long lumpia into thirds.
                This will allow for easier frying and eating!
              </li>
              <li>
                Continue to roll the rest of the meat mixture until you run out
                of wrapper!
              </li>
              <li>
                Once you are done with wrapping, now it's time to deep fry. Get
                your favorite deep frying pan and fill it until one eggroll will
                be fully submerged. It's okay to eyeball this step.
              </li>
              <li>
                When the oil is heated (keep it on medium heat), throw in the
                lumpia and cook until golden brown.
              </li>
            </ol>
          </div>
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
                     
                      {/* {timeStamp.map((time) => {
                        return (
                          <div>
                            <small>{time}</small>
                          </div>
                        )
                      })} */}
                      <small>{comment.timestamp}</small>
                     
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
                          <button className="post-button" id='post-reply-button' value={comment._id} onClick={handleReplyPost}>Post</button>
                        </div>
                      </form>
                    )}
                          <hr></hr>
                      <div className='replies-box'>
                        {comment.repliesCount > 1 || comment.repliesCount < 1 ? <small className='space-below-10'>{comment.repliesCount} Replies</small> : <small className='space-below-10'>{comment.repliesCount} Reply</small> }
                        
                        {comment.replies.map((replies) => {
                          return (
                            <div key={replies._id} className='subcomment-box'>
                              <h5 className='comment-name'>{replies.name}</h5>

                              {/* {timeStamp.reduce((time) => {
                                    return (
                                      <div>
                                        <small>{time}</small>
                                      </div>
                                    )
                                  })} */}
                              <small>{replies.timestamp}</small>
                              <p className='comment-message space-below-10'>{replies.replyMessage}</p>
                         
                          </div>
                          )
                        })}
                      </div>
                  

                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <h2 className="text-center space-above-75 space-below-25">
        Check out these other appetizers!
      </h2>
      <div className="space-above-10">
        <Appetizers />
      </div>

      <Footer />
    </div>
  );
};

export default LumpiangShanghai;
