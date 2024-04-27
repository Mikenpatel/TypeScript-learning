import { ReactElement, ReactNode } from 'react'


interface ListProps<T>{
    items: T[],
    render: (item: T) => ReactNode
}

function List<T>({ items, render }: ListProps<T>): ReactElement {
  return (
    <ul>
        {
            items.map((item, id) => (
                <li key={id}>{render(item)}</li>
            ))
        }
    </ul>
  )
}

export default List