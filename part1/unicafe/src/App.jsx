import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad == 0) {
    return (<p>no feedback given</p>)
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={good + neutral + bad} />
        <StatisticsLine text="average" value={(good + (bad * -1)) / (good + neutral + bad)} />
        <StatisticsLine text="positive" value={((good / (good + neutral + bad)) * 100).toString().concat(' %')} />
      </tbody>
    </table>
  )
}

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => { setGood(good + 1) }} text="good" />
      <Button handleClick={() => { setNeutral(neutral + 1) }} text="neutral" />
      <Button handleClick={() => { setBad(bad + 1) }} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App