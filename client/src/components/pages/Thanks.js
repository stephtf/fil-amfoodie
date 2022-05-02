import { Link } from "react-router-dom";

const Thanks = () => {
    return (
        <div className='body-container'>
            <div className='thanks-container'>
                <h3 className='space-below-25'>Thank you for your comment! <i>Maraming salamat po.</i></h3> 
                <p className='thanks-text'>We will get back to you soon</p>
                <Link to='/' ><button className='thanks-button'>Return to Fil-Am Food Blog</button></Link>
            </div>
        </div>
    )
}

export default Thanks;