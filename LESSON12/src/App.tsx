import { useState } from "react"
import Heading from "./Components/Heading"
import Section from "./Components/Section"
import Counter from "./Components/Counter"
import List from "./List"

function App() {
 
  const [count, setCount] = useState<number>(1)
  return (<>
         <Heading title={'Hello There'} /> 
         <Section>This is my Section</Section>
         <Counter setCount={setCount}>Count: {count}</Counter>
         <List items={['Web development', 'devops', 'CyberSecurity']} render={(item: string) => <span className='gold'>{item}</span>}/>
         </>)
}

export default App
