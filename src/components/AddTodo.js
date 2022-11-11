import React from "react"

const AddTodo = ({ handleSubmit, inputRef }) => {
    

    return (
        <>
            <form id="todo-form" onSubmit={handleSubmit}>
                <input type="text" id="todo-input" ref={inputRef} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export { AddTodo }