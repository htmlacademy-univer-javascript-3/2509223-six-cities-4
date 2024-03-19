import Star from './star';

function ReviewNew(): JSX.Element {
  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
                Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <Star
          value={5}
        />
        <Star
          value={4}
        />
        <Star
          value={3}
        />
        <Star
          value={2}
        />
        <Star
          value={1}
        />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
                    your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
                    Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewNew;
