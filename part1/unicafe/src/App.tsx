import { useState } from "react";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({
  text,
  value,
}: {
  text: string;
  value: number | string;
}) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

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
  if (totalFeedback === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={totalFeedback} />
      <StatisticLine text="average" value={(good - bad) / totalFeedback} />
      <StatisticLine
        text="positive"
        value={`${(good * 100) / totalFeedback}%`}
      />
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
      <Button
        text="good"
        onClick={() => {
          setGood(good + 1);
          setTotalFeedback(totalFeedback + 1);
        }}
      />
      <Button
        text="neutral"
        onClick={() => {
          setNeutral(neutral + 1);
          setTotalFeedback(totalFeedback + 1);
        }}
      />
      <Button
        text="bad"
        onClick={() => {
          setBad(bad + 1);
          setTotalFeedback(totalFeedback + 1);
        }}
      />

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
