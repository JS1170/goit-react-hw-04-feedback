import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const objectKeys = Object.keys(options);
  console.log(options);
  return (
    <div className={css.Counter__controls}>
      {objectKeys.map(option => (
        <button
          className={css.counter__btn}
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(
    PropTypes.number.isRequired
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
