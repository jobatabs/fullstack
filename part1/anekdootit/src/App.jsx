import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [highest, setHighest] = useState(0)

  const handleVotes = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setHighest(points.indexOf(Math.max(...points)))
    setPoints(newPoints)
  }

  return (
    <>
      <h1>anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => handleVotes()}>vote</button>
      <button onClick={() => { setSelected(Math.floor(Math.random() * 8)) }}>next anecdote</button>
      <h1>anecdote with the most votes</h1>
      <p>{anecdotes[highest]}</p>
    </>
  )
}

export default App