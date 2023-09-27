import React, { useCallback, useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count])
  return (
    <>
      <p>あなたは {count} 回クリックしました</p>
      <button type="button" onClick={handleClick}>クリック</button>
    </>
  )
}
