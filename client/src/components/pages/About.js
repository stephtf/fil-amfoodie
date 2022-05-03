import Footer from "../header/Footer";
import Header from "../header/Header";
import kawasan from './photos/kawasan.jpg';
import bananaboat from './photos/bananaboat.jpg';

const About = () => {

    return (
        <div>
            <Header />
            <div className='about-us'>
                <h2 className='text-center body-container recipe-titles'>About</h2>
                <div className='body-container about-row'>
                    <img className='about-image' src='/taho.jpg' alt='Gian and Steph drinking strawberry taho in Baguio'/>
                <div>
                    <p className='about-paras'>Hi! We're Steph and Gian and We are two Fil-Ams who love food! We wanted to create this blog to share our passion for cooking Filipino and American food, and putting our own twists on classic recipes. 
                    </p>
                    <p className='about-paras'>
                    Most of our recipes are from our parents and our titas and titos (aunt and uncles), and represent the food that we grew up eating! However, we like to make our own versions of things. We often substitute when we don't have Filipino ingredients available. Or, we change things up to match our more 'American' taste buds. For example, Steph <i>hates</i> menudo with raisins in it, so we just leave those out!
                    </p>
                    <p className='about-paras'>
                    Aside from cooking Pinoy foods, we both enjoy traveling! We've been to the Philippines a few times (actually Gian was born there and moved to the US when he was 5 years old). We visited Baguio, where Gian's family is from, and took a beautiful vacation in Cebu. Our favorite part was eating the lechon there - it's legit. Whenever we go back to the Philippines, we love visiting family and <i>especially</i> all the <i>handa</i> (feasts) they prepare for us when we arrive! 
                    </p>
                </div>

            </div>
            <div className='body-container about-row-2'>
                <img src={kawasan} className='about-image-2' alt='Gian and Steph walking to Kawasan Falls in Cebu,Philippines' /> 
                <div>
                    <p className='about-paras'>
                        We both agree that the best part of traveling is getting to taste the local cuisine. Sightseeing is cool and all, but we're always more excited about the restaurants and experiencing new flavors. The way we cook at home is kind of a mixture of influences from our families and travels. 
                    </p>
                <p className='about-paras'>
                   Our other shared hobbies include tennis, pickleball, and going on walks with our two bichons. We're always looking for ways to burn off the calories and stay fit! </p>



                <p className='about-paras'>
                  Okay, enough about us. We'd love to hear from you! Feel free to reach out if you have any questions about our recipes, our blog, or if you have any suggestions for what we should put out next. 
                </p>

            </div>


            </div>
            <div className='about-us'>
            <h2 className='text-center body-container recipe-titles'>Contact Us</h2>
                <div className='body-container about-row-2 about-row-3'>
                    <div>
                        <p className='about-paras space-below-25'>We hope our blog inspires you and that you enjoy what we have created! If you've tried our recipes, let us know how it tasted :)  </p>
                        <form className='form-group' action="https://formsubmit.co/hellostephf@gmail.com" method="POST" >
                            <h3 className='space-below-10'>SEND US A MESSAGE</h3>
                            <label for='Name' className='form-label'>Name </label>
                            <input type='Name' name='Name' className='form-style textbox-style' required/>
                            <label for='E-mail' className='form-label'>E-mail </label>
                            <input type='E-mail' name='E-mail' className='form-style textbox-style' required/>
                            <label for='Message' className='form-label'>Message </label>
                            <textarea rows='10' type='Message' name='Message' className='form-style textbox-style' required/>
                            <button className='form-button'>Send</button>
                            <input type="hidden" name="_next" value="https://www.filamfoodblog.com/thanks"></input>
                        </form>
                       
                    </div>
                    <img className='about-image' src={bananaboat} alt='Gian and Steph drinking strawberry taho in Baguio'/>
            </div>
            </div>

            </div>
            <Footer />
            <script src='https://smtpjs.com/v3/smtp.js'></script>
        </div>
        
    
    )
}

export default About;