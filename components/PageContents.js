import React, {useState} from 'react'

import { useStateValue } from "../state/state";

import CloseBtn from './CloseBtn'
import CompleteBtn from './CompleteBtn'

// NOTE:
// Even simple Drag-n-Drops are rather involved
// Cleanest I could find was
// https://github.com/atlassian/react-beautiful-dnd
// Example: https://codesandbox.io/s/zqwz5n5p9x
// Figured it wasn't worth going through the motions
// If needed IRL, very doable.
// Sick so not trying to push it :)
//
// NOTE
// Also did not bother breaking things out,
// easier to just read a few files for the sake of review

// COLORS
let color_blue = '#2335d8';
let color_yellow = '#f6e37b';
let color_black = '#212121';
let color_mint = '#2aba96';
let color_white = '#ffffff';

const PageContents = () => {
  const [{tasks}, dispatch ] = useStateValue()
  const [editingTask, setEditingTask] = useState();
  const [temporaryTaskText, setTemporaryTaskText] = useState()
  const myInput = React.createRef();

  const newTask = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: myInput.current.value
    })
    myInput.current.value = ''
  }

  const killTask = (idx) => {
    let intent = confirm("Are you sure you want to delete this?")
    if (intent === true) {
      dispatch({
        type: 'REMOVE_SPECIFIC_TASK',
        payload: idx
      })
    }
  }

  const toggleCompletion = (idx) => {
    dispatch({
      type: 'TOGGLE_COMPLETION_OF_TASK',
      payload: idx
    })
  }

  const finishEdit = (e) => {
    let title
    if(e.target.value === '') {
      title = temporaryTaskText
    } else {
      title = e.target.value
    }
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        idx: editingTask,
        title: title
      }
    })
    setEditingTask(false)
  }

  const checkIfDoneEditing = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      finishEdit(e);
    }
  }

  let completedTasks = [...tasks].filter(item => item.complete);

  return (
    <main role="main">
      <header id="tasksHeader" className="header" role="header">
        <form onSubmit={newTask} role="form">
          <h2 role="title">Tasks</h2>
          <input
            role="textbox"
            ref={myInput}
            type="text"
            id="myInput"
            placeholder="A New Task..."
            required
            minLength="1"
          />
          <input role="button" type="submit" className="addBtn" value="Add" />
        </form>
        <progress
          max="100"
          value={(completedTasks.length / tasks.length) * 100}
        />
      </header>
      <ul id="tasksList" role="list">
        {tasks &&
          tasks.map((item, idx) => (
            <li
              role="listitem"
              className={item.complete ? "complete" : ""}
              key={item.title}
            >
              <CompleteBtn clickAction={() => toggleCompletion(idx)} />
              {editingTask === idx ? (
                <input
                  className="editing-box"
                  role="textbox"
                  type="text"
                  autoFocus
                  onBlur={finishEdit}
                  onKeyUp={checkIfDoneEditing}
                />
              ) : (
                <span
                  onClick={() => {
                    setTemporaryTaskText(item.title);
                    setEditingTask(idx);
                  }}
                >
                  {item.title}
                </span>
              )}
              <CloseBtn role="button" clickAction={() => killTask(idx)} />
            </li>
          ))}
      </ul>
      <style global="true">{`
      * {
        box-sizing: border-box;
        font-family: 'roobert';
      }

      input[type="submit"],
      button {
        cursor: pointer;
      }

      ul {
        margin: 0;
        padding: 0 150px;
        list-style: none;
        transition: 0.2s;
      }

      transition: 0.2s;
      @media (max-width: 750px) {
        ul {
          padding: 0;
        }
      }

      ul li {
        position: relative;
        padding: 12px 48px 12px 40px;
        background: #eee;
        font-size: 18px;
        transition: 0.2s;
        list-style: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      ul li:nth-child(odd) {
        background: #f9f9f9;
      }

      ul li:hover {
        background: ${color_yellow};
      }

      ul li.checked {
        background: ${color_black};
        color: ${color_white};
        text-transform: line-through;
      }

      ul li span {
        cursor: pointer;
        padding: 2px 4px;
      }

      ul li span:hover {
        background: rgba(1,1,1,.1)
      }

      ul li.complete span {
        text-decoration: line-through;
      }

      ul li.checked::before {
        content: '';
        position: absolute;
        border-color: ${color_white};
        border-style: solid;
        border-width: 0 2px 2px 0;
        top: 10px;
        left: 16px;
        transform: rotate(45deg);
        height: 15px;
        width: 7px;
      }

      .header {
        background-color: ${color_blue};
        padding: 30px 40px;
        color: white;
        text-align: center;
      }

      .header:after {
        content: "";
        display: table;
        clear: both;
      }

      progress {
        width: 100%;
      }

      .editing-box {
        font-size: 18px;
      }

      #myInput {
        margin: 0;
        border: none;
        border-radius: 0;
        width: 75%;
        padding: 10px;
        float: left;
        font-size: 16px;
      }

      .addBtn {
        padding: 10px;
        width: 25%;
        background: ${color_mint};
        color: ${color_white};
        float: left;
        text-align: center;
        font-size: 16px;
        transition: 0.3s;
        border-radius: 0;
      }

      .addBtn:hover {
        opacity: 0.8;
      }

      @media (max-width: 500px) {
        #myInput, .addBtn {
          float: none;
          display: block;
          width: 100%;
        }
      }
      `}</style>
    </main>
  );
}

export default PageContents
