import { createRoot } from 'react-dom/client'
import { list } from './data'
const root = document.getElementById('root')

function App() {
  return (
    <Toolbar
      onPlay1={() => console.log('play 1')}
      onPlay2={() => console.log('play 2')}
    ></Toolbar>
  )
}

function Toolbar({ onPlay1, onPlay2 }) {
  return (
    <div>
      <Button onClick={onPlay1}> Play1 </Button>
      <Button onClick={onPlay2}> Play2 </Button>
    </div>
  )
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}

function SimButton() {
  function handleClick() {
    console.log('cilck btn')
  }

  return <button onClick={handleClick}>sim button</button>
}

function ToolbarPlus() {
  return (
    <div
      className='tolbar-plus'
      onClick={() => {
        console.log('click toolbarplus')
      }}
    >
      <button
        onClick={() => {
          console.log('play')
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          console.log('stop')
        }}
      >
        stop
      </button>
    </div>
  )
}

function List() {
  let index = 0

  function handleClick() {
    index = index + 1
  }

  let item = list[index]

  return (
    <div>
      <button onClick={handleClick}>next</button>
      <h2>
        <i>{item.name}</i>
      </h2>
      <h3>
        ( {index + 1} of {list.length} )
      </h3>
      {/* <img src={item.url} alt={item.alt} /> */}
      <p>{item.description}</p>
    </div>
  )
}

createRoot(root).render(<List />)
