let cachedStorage = JSON.parse(localStorage.getItem("tasks"));
let baseline = {
  tasks: [
    {
      title: "Validate that the user has entered text before creating a task, warn them if they haven't",
      complete: false
    },
    {
      title: "Clear the input after the user enters a task",
      complete: false
    },
    {
      title: "Make it clear to the user which elements are interactive",
      complete: false
    },
    {
      title: "Add a confirmation dialog for delete",
      complete: false
    },
    {
      title: "Place the task list in a column in the center of the screen with whitespace at-least 100px on each side",
      complete: false
    },
    {
      title: "If the user completes all the tasks on the list send a desktop notification congratulating them",
      complete: false
    },
    {
      title: "Allow the user to edit any task they have created",
      complete: false
    },
    {
      title: "Make the task list persist browser refreshes",
      complete: false
    },
    {
      title: "Make the task list responsive (for viewports less than 500px the add button should appear under the input)",
      complete: false
    },
    {
      title: "Add a progress indicator bar, for each task completed progress should increase. For each new task, progress will decrease",
      complete: false
    },
    {
      title: "Allow the user to re-order tasks",
      complete: false
    },
    {
      title: "Make this task list follow accessability best practices",
      complete: false
    }
  ]
}

let InitialState = {}

if (cachedStorage && cachedStorage.length > 0) {
  InitialState = {tasks:cachedStorage}
} else {
  InitialState = baseline
}

export default InitialState;
