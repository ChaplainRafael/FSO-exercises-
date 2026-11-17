import { useState } from 'react'

const StatisticLine = ({text,value}) => {
  return(
    <h4>{text} : {value}</h4>
  )
}


const Statistics = (props) => {
  const good = props.good;
  const bad = props.bad;
  const neutral = props.neutral;

  const total = good+bad+neutral;

  const goodScore = good * 1;
  const neutralScore = neutral * 0;
  const badScore = bad * -1;

  const average = ((goodScore + badScore + neutralScore) / total) ; 
  const positive = (goodScore / total);

  return(
    <div>
      {total=== 0 ? <h1>"No Feedback given"</h1> : <div>
          <h1>statistics </h1>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={total === 0 ? 0 : average} />
          <StatisticLine text="positive" value={total === 0 ? 0 : positive *100} />
        </div>}
      
      </div>
  )
}

const Button = ({scoreSetterFn , text}) => {

  return(
    <button onClick={()=> scoreSetterFn(score=>score+1)}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button scoreSetterFn={setGood} text="good"/>
        <Button scoreSetterFn={setNeutral} text="neutral" />
        <Button scoreSetterFn={setBad} text="bad" />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App