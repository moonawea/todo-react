import {useState} from "react";
import TodoItem from "./TodoItem";


const App = () => {
    const [todos, setTodos] = useState(todosArray)
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));}
    const [add, setAdd] = useState("");
    const handleChange = (data) => {
        setTodos(todos.map(el => el.id === data.id ? data : el))
    }

        const addTodo = () => {
            const newTodo = {
                id: todos.length + 1,
                title: add,
                completed: false,
            }
            setTodos([...todos, newTodo])
            setAdd("")
        }


        const handleEditTodo = (data) => {
            setTodos(todos.map(el => el.id === data.id ? data : el))
        }
        return (
            <div>
                <div>
                    <h1>Todo App</h1>
                    {
                        todos.map((todo, idx) =>
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                deleteTodo={deleteTodo}
                                handleEditTodo={handleEditTodo}
                                handleChange={handleChange}
                            />
                        )
                    }
                    <input onChange={(e) => setAdd(e.target.value)}
                           className={'addInput'}
                           type="text"/>
                    <button onClick={addTodo}  className={'addBtn'}>Add</button>
                </div>
            </div>
        )
    }

    export default App;

    const todosArray = [
        {
            id: 1,
            title: 'Todo 1',
            completed: true
        },
        {
            id: 2,
            title: 'Todo 2',
            completed: false
        }
    ]
