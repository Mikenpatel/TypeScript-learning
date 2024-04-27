import { ReactNode, useReducer } from "react"


type childrenProps = {
    children: (num: number) => ReactNode 
}

const initState = { count: 0 }


type ActionType = {
    type: 'INCREMENT' | 'DECREMENT'
}

const reducer = (state: typeof initState, action: ActionType) => {

    switch(action.type){
        case 'INCREMENT': 
           return {...state, count: state.count + 1}
        case 'DECREMENT': 
           return {...state, count: state.count - 1}
        default: 
          throw new Error()
    }

}

function Counter({ children }: childrenProps) {


const [state, dispatch] = useReducer(reducer, initState)

const increment = () => dispatch({type: 'INCREMENT'})
const decrement = () => dispatch({type: 'DECREMENT'})
  return (
    <div>
        <div>{children(state.count)}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter