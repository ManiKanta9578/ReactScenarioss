import styles from '../../styles/toDoReduxToolkit.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addTodo, deleteTodo, updateTodo, completeTodo} from '/store/slices/todoSlice';

const ToDoReduxToolkit = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const [input, setInput] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleAddToDo = () => {
        if(isEdit){
            dispatch(updateTodo({id: editId, input}));
            setInput('');
            setIsEdit(false);
        }else {
            dispatch(addTodo(input));
            setInput('');
        }
        setIsEdit(false);
    };

    const handleUpdate = (id,text) => {
        setIsEdit(true);
        setInput(text);
        setEditId(id);
    }

    const handleComplete = () => {}

    return (
        <>
            <div className={styles.heading}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Add Task'
                />
                <button onClick={handleAddToDo}>{isEdit ? "Update" : "Add"}</button>
            </div>
            <ul className={styles.taskList}>
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.taskItem}>
                        <input type="checkbox" value={todo.completed} onChange={() => dispatch(completeTodo(todo.id))}/>
                        <div className={todo.completed ? styles.disable : null}>{todo.taskName}</div>
                        <div>
                        <button disabled={todo.completed} onClick={() => handleUpdate(todo.id, todo.taskName)}>✏️</button>
                        <button disabled={todo.completed} onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ToDoReduxToolkit;