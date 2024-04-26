import { useState, useEffect, useCallback, useMemo, useRef } from 'react'

function App() {

  interface User{
    id: number,
    name: string
  }


  type fibFunc = (n: number) => number

  const fib: fibFunc = (n: number) => {
    if(n < 2) return n
    return fib(n - 1) + fib(n-2)
  }

  const myNum: number = 10
 
  const [count, setCount] = useState<number>(1)
  const [users, setUsers] = useState<User[] | null >(null)

  useEffect(() => {
     
    console.log('Mounting...');
    console.log('Users: ', users);

    return ()=> console.log('Unmounting...');
  },[users])

  const addTwo = useCallback(()=> setCount(prev => prev + 2), [])
  // const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>)=> setCount(prev => prev + 2), [])
  const result = useMemo<number>(()=> fib(myNum),[myNum])

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  return (
    <div className='App'>
      <button onClick={addTwo}>+</button>
      <p>Count: {count}</p>
      <h1>{result}</h1>
      <input type="text" ref={inputRef}/>
    </div>
  ) 
}

export default App
