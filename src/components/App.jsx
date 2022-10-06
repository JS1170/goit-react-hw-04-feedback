import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtn = event => {
    switch(event) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  // onClickBtn = value => {
  //   this.setState(prevState => ({
  //     [value]: prevState[value] + 1,
  //   }));
  // };

  const totalCount = () => {
    return good + neutral + bad;
  };

  const positiveCount = () => {
    return Math.round((good / totalCount()) * 100);
  };

  // const { good, neutral, bad } = this.state;
  // const total = totalCount();
  // const count = positiveCount();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onClickBtn}
        />
      </Section>
      <Section title="Statistics">
        {totalCount() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount()}
            positivePercentage={positiveCount()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
