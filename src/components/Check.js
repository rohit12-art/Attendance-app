import React, { useEffect } from 'react'

const Check = ({ count, register }) => {
    useEffect(() => {
       console.log(register);
    }, [count,register])
  return (
    <div>
      <h2>Check Student</h2>
      <p>Present Student Count: {count}</p>
    </div>
  )
}

export default Check
