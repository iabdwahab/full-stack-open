import { useState } from "react";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
}: {
  good: number;
  neutral: number;
  bad: number;
  totalFeedback: number;
}) => {
  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>netural {neutral}</p>
      <p>bad {bad}</p>
      <p>all {totalFeedback}</p>
      <p>average {(good - bad) / totalFeedback}</p>
      <p>positive {(good * 100) / totalFeedback}%</p>
    </div>
  );
};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
          setTotalFeedback(totalFeedback + 1);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
          setTotalFeedback(totalFeedback + 1);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
          setTotalFeedback(totalFeedback + 1);
        }}
      >
        bad
      </button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback}
      />
    </div>
  );
}

export default App;
