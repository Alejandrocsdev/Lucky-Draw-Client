// CSS Module
import S from './style.module.css'

function Home({ origin }) {
  return (
    <main className={S.main}>
      <div>Origin: {origin}</div>
    </main>
  )
}

export default Home
