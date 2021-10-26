import ReviewsItem from '../../components/reviews-item/reviews-item';
import FormComment from '../form-comment/form-comment';
function ReviewsList():JSX.Element{
  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <ReviewsItem/>
      </ul>
      <FormComment/>
    </section>
  );
}

export default ReviewsList;
