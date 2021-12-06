import reviews from './reviews-data'

function ListReviews() {
    return (
        <ul>
            {reviews.map((review) => (
                <li key={review.id} className="Review_Member">
                    <img className="Review_Image" src={review.photos} alt={review.id}></img>
                    <div className="Review_Info">
                        <p className="Review_Name">{review.name}</p>
                        <p className="Review_Desc">{review.desc}</p>
                        <p className="Review_Date">{review.date}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ListReviews;