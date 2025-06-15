// Libraries
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// Custom Functions
import { setPiBrowser } from '../redux/piSlice'
// Utilities
import devLog from '../utils/devLog'

const usePiBrowser = () => {
  const { VITE_SDK, VITE_ORIGIN } = import.meta.env
  const dispatch = useDispatch()

  const removePiSDK = () => {
    const script = document.querySelector(`script[src="${VITE_SDK}"]`)
    if (script) {
      script.remove()
      devLog('Pi SDK script removed')
    }
    if (window.Pi) {
      delete window.Pi
      devLog('window.Pi removed')
    }
  }

  useEffect(() => {
    const handleMessage = event => {
      if (event.origin === VITE_ORIGIN) {
        dispatch(setPiBrowser(true))
      } else {
        dispatch(setPiBrowser(false))
        removePiSDK()
      }
    }

    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])
}

export default usePiBrowser
