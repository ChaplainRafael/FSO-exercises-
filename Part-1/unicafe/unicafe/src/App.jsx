import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={()=> setGood(prev=> prev + 1)}>good</button>
        <button onClick={()=> setNeutral(prev=> prev + 1)}>neutral</button>
        <button onClick={()=> setBad(prev=> prev + 1)}>bad</button>
      </div>
      <div>
        <h1>statistics</h1>
        <h4>good: {good}</h4>
        <h4>bad: {bad}</h4>
        <h4>neutral: {neutral}</h4>
      </div>
    </div>
  )
}

export default App