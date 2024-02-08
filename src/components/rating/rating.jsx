import starInactive from '../../assets/star_inactive.png';
import starActive from '../../assets/star_active.png';

const Rating = ({ rating }) => {

    return (
        <div >
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img className="host_star" key={index} src={ratingValue <= rating ? starActive : starInactive} alt="étoile" />
                )
            })}
        </div>
    )
}

export default Rating