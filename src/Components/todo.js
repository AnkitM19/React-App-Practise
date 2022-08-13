import React, { useState } from 'react'

export const Todo = (props) => {

    const [todo, setTodo] = useState({
        title: "",
        task: ""
    })

    const formStyle = {
        'width': '50%',
        'padding': '50px',

    }
    const todoList = {
        'padding': '60px',
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setTodo({
            ...todo,
            [name]: value,
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!todo.title || !todo.task) {
            return false;
        } else {
            props.addTodo(todo)
        }
    }
    return (
        <><form style={formStyle} onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" name="title" value={todo.title} onChange={handleChange} aria-describedby="title" placeholder="Enter Title" />
            </div>
            <div className="form-group">
                <label htmlFor="task">Task</label>
                <input type="text" className="form-control" name="task" value={todo.task} onChange={handleChange} placeholder="Enter Task" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            {props.todo.length === 0 ? '' :
                <div>
                    <div className='container'>
                        <h3> MY Todo List</h3>
                    </div>
                    <div style={todoList}>
                        {props.todo.map((ele) => {
                            return (<div className='mt-4' key={ele.sNo}>
                                <h4> {ele.title}</h4>
                                <p>{ele.task}</p>
                                <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(ele) }}>Delete</button>
                            </div>
                            )
                        })
                        }
                    </div>
                </div>
            }</>
    )
}
