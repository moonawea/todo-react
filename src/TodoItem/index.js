import {useState} from "react";


const TodoItem = ({todo, deleteTodo, handleEditTodo, handleChange}) => {
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(todo.title)

    const handleCheck = (e) => {
        const newData = {
            ...todo, completed: e.target.checked
        }
        handleChange(newData)
    }

    const handleEdit = () => {
        if (!edit) {
            setEdit(!edit)
        } else {
            const newData = {...todo, title: editTitle}
            handleEditTodo(newData)
            setEdit(false)
        }
    }
    return (
        <div style={{
            display: 'flex',
            gap: ' 15px',
            alignItems: 'center'
        }}
        >
            <div>
                {edit ?
                    <input
                        defaultValue={todo.title}
                        type="text"
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    :
                    <h3>{todo.title}</h3>
                }

            </div>

            <input
                onChange={handleCheck}
                type="checkbox"
                checked={todo.completed}
            />


            <button className={'btn'} onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
            <button onClick={handleEdit}>
                {edit ? 'save' : 'Edit'}
            </button>
        </div>
    )
}
export default TodoItem;