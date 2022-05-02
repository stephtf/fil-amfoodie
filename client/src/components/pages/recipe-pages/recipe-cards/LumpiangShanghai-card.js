import { Link } from 'react-router-dom';
import lumpia from '../recipe-photos/lumpia.jpg'

const LumpiangShanghaiCard = () => {

    return (
        <div> 
            <Link to='/recipes/lumpiang-shanghai'>
            <div className='recipe-cards-container space-below-25'>
                <div className='space-below-10 card-title'>Lumpiang Shanghai</div>
                <img src={lumpia} className='card-image' alt='a plate of lumpia with a side of sweet Thai chili sauce'/>
                <button>View Recipe</button>
            </div>
            </Link>
        </div>
    )
}

export default LumpiangShanghaiCard; 