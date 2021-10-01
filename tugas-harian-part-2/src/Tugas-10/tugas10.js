import  React, { useEffect, useState } from 'react'

const Tugas10 = () => {
  
  const [ time, setTime ] = useState(new Date())
  const [ countDown, setCountDown] = useState(100)
  const [ display, setDisplay ] = useState(true)
  
  useEffect(() => {
    if(countDown !== 0){
      let timer = setInterval(() => {
        setTime(new Date()); 
        setCountDown(countDown - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
    else{
      setDisplay(false)
    }
  },[countDown])

  if (display){
    return (
      <>
        <div style={{maxWidth: '350px', margin: 'auto', paddingTop: '20px'}}>
          <h1 style={{marginBottom: '0'}}>Now At: {time.toLocaleTimeString()}</h1>
          <h2 style={{marginTop: '0'}}>Countdown: {countDown}</h2>
        </div>
      </>
    )
  }
  else{
    return null;
  }
}

export default Tugas10;