import { SetStateAction, useState } from 'react';
import Star from './star';
import { OfferProps } from '../pages/offer/offer';
import Review from './review';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../const';

function formatDate() {
  const date = new Date();

  // Объекты для преобразования номера месяца в его полное название
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Получаем номер месяца и год из даты
  const month = date.getMonth();
  const year = date.getFullYear();

  // Преобразуем номер месяца в его полное название
  const monthName = months[month];

  // Возвращаем отформатированную строку
  return `${monthName} ${year}`;
}

function ReviewNew(offerProps: {offerProps: OfferProps}): JSX.Element {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleReviewChange = (event: { target: { value: SetStateAction<string> } }) => {
    setReviewText(event.target.value);
  };

  const handleRatingChange = (value: SetStateAction<number>) => {
    setRating(value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const date = formatDate();

    const newReview = [
      <Review
        key={offerProps.offerProps.reviews.length + date}
        user={{
          avatarImage: 'img/avatar-max.jpg',
          name: 'Max',
        }}
        textComment = {reviewText}
        time={date}
        rating={rating}
      />
    ];

    offerProps.offerProps.reviews.push(newReview);
    setReviewText('');
    setRating(0);
    navigate(`${AppRoute.Offer }/${ offerProps.offerProps.city }_${ offerProps.offerProps.index}`);
  };

  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <button className="form__rating-item" title={'rating'} type="button" onClick={() => handleRatingChange(value)} key={`star_button${index}`}>
            <Star key={`star${value}`} value={value}/>
          </button>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={handleReviewChange}
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
          disabled={reviewText.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewNew;
