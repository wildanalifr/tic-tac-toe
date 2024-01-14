import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Choice } from './choice'

function App() {
  const [click, setClick] = useState(0)
  const [choice, setChoice] = useState(Choice)
  const wins = [
    '123',
    '321',
    '369',
    '963',
    '456',
    '654',
    '789',
    '987',
    '257',
    '752',
    '147',
    '741',
  ]

  const [numGanjil, setNumGanjil] = useState('')
  const [numGenap, setNumGenap] = useState('')
  const [item, setItem] = useState<string | null>()

  const checkIsWin = () => {
    // wins.forEach((item) => {
    //   item.includes(numGanjil)
    //     ? console.log("'ganjil menang'")
    //     : item.includes(numGenap)
    //     ? console.log('genap menang')
    //     : console.log('lanjut')
    // })
    // console.log('jalan nih')
  }

  const setIsClicked = (id: number) => {
    setChoice((prev) =>
      prev.map((item) => ({
        ...item,
        isClicked: item.id === id ? true : item.isClicked,
        urutan: item.id === id ? click : item.urutan,
      }))
    )
  }

  useEffect(() => {
    if (numGanjil.length >= 3) {
      checkIsWin()
    }
  }, [numGanjil])

  console.log('num genap', numGenap)
  console.log('num Ganjil', numGanjil)

  const handleClick = (id: number) => {
    // setClick((prev) => prev + 1)
    setClick(click + 1)
    setItem(id?.toString())
    // triggerClickChange(id)
    // click % 2 === 0
    //   ? setNumGenap((prev) => prev + id.toString())
    //   : setNumGanjil((prev) => prev + id.toString())
    // setClick((prev) => {
    //   // The callback function, executed after setClick updates the state
    //   const updatedClick = prev + 1
    //   console.log('updated ', updatedClick)

    //   // Update the numGenap or numGanjil based on the updatedClick value
    //   updatedClick % 2 === 0
    //     ? setNumGenap((prev) => prev + id.toString())
    //     : setNumGanjil((prev) => prev + id.toString())

    //   return updatedClick // Return the updatedClick value
    // })
    // click % 2 === 0
    //   ? setNumGenap((prev) => prev + id.toString())
    //   : setNumGanjil((prev) => prev + id.toString())
    if (id % 2 === 0) {
      setIsClicked(id)
      return
    }
    setIsClicked(id)
  }

  useEffect(() => {
    if (click > 0) {
      click % 2 === 0
        ? setNumGenap((prev) => prev + item)
        : setNumGanjil((prev) => prev + item)
      // console.log('setnumganjil', numGanjil)
      console.log('item', item)
    }
  }, [item, click])

  const handleReset = () => {
    setChoice((choice) =>
      choice.map((item) => ({
        ...item,
        isClicked: false,
      }))
    )
    setClick(0)
  }

  return (
    <>
      <div className="choice-container">
        {choice.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            disabled={item.isClicked}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                display: item.isClicked ? 'block' : 'none',
                fontSize: '30px',
              }}
            >
              {item.urutan % 2 === 0 ? 'X' : '0'}
            </p>
          </button>
        ))}
      </div>
      <button
        style={{ marginTop: '10px', padding: '10px 100px' }}
        onClick={handleReset}
      >
        Reset
      </button>
      {/* {console.log('ganjil', numGanjil)} */}
    </>
  )
}

export default App
