import { createRoot } from 'react-dom/client'

const App = () => {
  return <div>123</div>
}

function Profile() {
  return <img src='https://i.imgur.com/MK3eW3As.jpg' alt='' />
}

function Gallery() {
  return (
    <section>
      <h1>amazing sci</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}

const getDomApp = document.getElementById('root')

createRoot(getDomApp).render(<App />)
