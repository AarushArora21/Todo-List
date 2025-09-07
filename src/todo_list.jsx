import { useState } from "react"; // Importing useState hook from React
import "./TodoList.css"; // Importing the book-style CSS

export default function TodoList() { // Defining the TodoList functional component
    // State to store the list of todos
    const [todos, setTodos] = useState([]);
    // State to store the value of the new todo input field
    const [newTodo, setNewTodo] = useState("");

    // Function to add a new task to the todos list
    const addNewTask = () => {
        // Only add if newTodo is not empty (optional, for better UX)
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]); // Add the new todo to the list
            setNewTodo(""); // Clear the input field after adding
        }
    };

    // Function to delete a todo by its index
    const deleteTodo = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    // Function to update the value of newTodo as the user types
    const updateTodoValue = (event) => {
        setNewTodo(event.target.value); // Update newTodo state with input value
    };

    const clearAllTasks = () => {
        setTodos([]);
    };

    let upperCaseAll = () => {
        setTodos(todos.map((todo) => todo.toUpperCase()));
    }

    return (
        <div className="todo-book">
            {/* Book title */}
            <h1 className="book-title">My Todo Journal</h1>
            
            {/* Input section */}
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Write your new task here..."
                    value={newTodo}
                    onChange={updateTodoValue}
                    className="task-input"
                />
                <br />
                <button onClick={addNewTask} className="book-button">Add Task</button>
                <button onClick={clearAllTasks} className="book-button clear-button">Clear All</button>
            </div>
            
            {/* Todo list section */}
            <div className="todo-section">
                <h2 className="section-title">My Tasks</h2>
                <hr className="book-divider" />
                
                {todos.length === 0 ? (
                    <div className="empty-state">Your todo journal is empty. Start writing your tasks!</div>
                ) : (
                    <ul className="todo-list">
                        {todos.map((todo, index) => (
                            <li key={index} className="todo-item">
                                <span className="todo-text">{todo}</span>
                                <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
                            </li>
                        ))}
                    </ul>       
                )}
                <br />
                <button onClick={upperCaseAll}>Uppercase all</button>
            </div>
        </div>
    );
}