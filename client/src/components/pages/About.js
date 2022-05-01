import Footer from "../header/Footer";
import Header from "../header/Header";

const About = () => {
    return (
        <div>
            <Header />
            <div className='about-us'>
                <h2 className='text-center body-container recipe-titles'>About </h2>
                <div className='body-container about-row'>
                    <img className='about-image' src='/taho.jpg' alt='Gian and Steph drinking strawberry taho in Baguio'/>
                <p>We are two Fil-Ams who love food! We wanted to create this blog to share our favorite recipies, and also to connect with our Filipino roots.</p>
            </div>
            </div>
            <Footer />
        </div>
    
    )
}

export default About;