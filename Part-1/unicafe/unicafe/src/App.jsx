import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good+bad+neutral;

  const goodScore = good * 1;
  const neutralScore = neutral * 0;
  const badScore = bad * -1;

  const average = ((goodScore + badScore + neutralScore) / total) ; 
  const positive = (goodScore / total);

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
        <h4>all: {total}</h4>
        <h4>average: {total === 0 ? 0 : average}</h4>
        <h4>positive: {total === 0 ? 0 : positive *100}%</h4>
      </div>
    </div>
  )
}

export default App