import { ReactElement, ReactNode } from "react"

type CounterProps = {
 setCount: React.Dispatch<React.SetStateAction<number>>,
 children: ReactNode
}

function Counter({ setCount, children }: CounterProps): ReactElement{
    // const [count, setCount] = useState<number | null | string >(1)
    
    return (
        <>
            <div>{children}</div>
            <button onClick={() => setCount(preVal => preVal + 1)}>+</button>
            <button onClick={() => setCount(preVal => preVal - 1)}>-</button>
        </>
    )
}


export default Counter