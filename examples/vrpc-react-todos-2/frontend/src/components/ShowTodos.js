import React, { useState } from 'react'
import { useBackend } from '../react-vrpc'
// import TodoItem from './TodoItemClass'
import TodoItem from './TodoItem'
import Filter from './Filter'

function ShowTodos () {
  const [filter, setFilter] = useState('all')
  const { backend } = useBackend('todos')

  const { ids } = backend
  const getItems = async () => {
    const items = await backend.callAll('getData')
    console.log(items)
  }
  console.log('## ids', getItems())
  return (
    <div>
      <ul>
        {ids.map(id => <TodoItem key={id} id={id} filter={filter} />)}
      </ul>
      <Filter
        onClick={setFilter}
        filter={filter}
      />
    </div>
  )
}

export default ShowTodos
