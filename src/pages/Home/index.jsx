// CSS Module
import S from './style.module.css'
// Libraries
import { useSelector } from 'react-redux'

function Home() {
  const isPiBrowser = useSelector(state => state.pi.isPiBrowser)
  
  return <main className={S.main}>{`isPiBrowser: ${isPiBrowser}`}</main>
}

export default Home
