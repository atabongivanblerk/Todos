import { useState } from "react";
import "./TodoContainer.css"

function Todocontainer() {
  // this component will manage the to do lists state and
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  // function to handle adding a new todo
  const handleAddtodo = () => {
    // check if the new todo is not empty before adding it
    if (addTodo.trim() !== "") {
      // if its not empty, we can add it to the list
      // usingg unshift to add the new todo at the beginning of the list
      // this way, the most recent todo appears at the top
      // we also trim the input to remove any leading or trailing whitespace
      // and ensure that we dont add empty todos
      // note: unshift modifies the original array, so we dont need to create a new array to update the state
      todos.unshift(addTodo.trim());
      setTodos([...todos]); //update the state withthe new todo list
      setAddTodo(""); //clear the input field after adding
    }
  };

  const handleDelete = (index) => {
    // this function will handle the deeletion of todos
    // it takes the index of the todo to be deleted
    // we need to update the todo state to be remove the item at the given index
    setTodos((prevTodos) => {
      // create a new array excluding the todo at the spexified index
      return prevTodos.filter((_, i) => i !== index);
    });
    // if teh deleted tod was in the completedTodos, we also need to remove it from there
    setCompletedTodos((prevCompleted) =>
      prevCompleted.filter((todo) => todo !== todos[index])
    );
  };

  const handleToggleDone = (index, checked) => {
    // this function will handle toggling the done state of a todo list
    // it takes the index of the todo to be toggled
    // we will check if the todo is already in the completedTodos array
    if (checked) {
      // if the box id checked, we add the todo to the completedTodos
      setCompletedTodos((prevCompleted) => [...prevCompleted, todos[index]]);
    } else {
      // if the checkbox is unchecked, we remove the todo from completedTodos
      setCompletedTodos((prevCompleted) =>
        prevCompleted.filter((todo) => todo !== todos[index])
      );
    }
  };

  return (
    <section>
      <h2>Todo list</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddtodo();
          setAddTodo("");
        }}
      >
        <input
          type="text"
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <input type="submit" value={"Add Todo"} />
      </form>
      <ul>
        {todos.length ? (
          // todos.map(function (todo, index) {
          //   return <li key={index}>{todo}</li>;
          // })
          todos.map((todo, index) => (
            <li
              key={index}
              style={{
                textDecoration: completedTodos.includes(todo)
                  ? "line-through"
                  : "none",
                color: completedTodos.includes(todo) ? "gray" : "black",
              }}
            >
              <div className="items">
                {" "}
                <input
                  type="checkbox"
                  name="done"
                  id="done"
                  onChange={(e) => handleToggleDone(index, e.target.checked)}
                />
                <span>{todo}</span>
              </div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))
        ) : (
          <div>Nothing to do</div>
        )}
        {/* {completedTodos.length > 0 && (
          <div>
            <h3>Completed Todos</h3>
            <ul>
              {completedTodos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
        )} */}
      </ul>
    </section>
  );
}

export default Todocontainer;
