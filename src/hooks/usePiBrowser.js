// Libraries
import { useState, useEffect } from 'react'

const usePiBrowser = () => {
  const [origin, setOrigin] = useState(null)

  useEffect(() => {
    const handleMessage = event => {
      console.log(event)
      console.log(event.origin)
      setOrigin(event.origin)
    }

    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return origin
}

export default usePiBrowser
