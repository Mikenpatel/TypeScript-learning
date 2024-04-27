import Counter from "./Counter"

function App() {

  return (
    <>
      <Counter>{
        (num: number) => <>Counter Count: {num}</>
        }
      </Counter>
    </>
  )
}

export default App
