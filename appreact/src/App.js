import React, { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


//Import Components
import Tasks from './components/tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts'


class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: newTasks })
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({ tasks: newTasks })
  }


  render() {
    return <div>
      <Router>
        <Link to="/">Home</Link>
        <br />
        <br />
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              checkDone={this.checkDone}
            />
          </div>
        }}>
        </Route>
        <Route exact path="/posts" component={Posts} />
      </Router>

      <Posts />

    </div>
  }

}



export default App;






// function Helloworld(props) {
//   return (
//     <div id="hello">{props.mytext}</div>
//   )
// }

// class Helloworld extends React.Component {
//   state = {
//     show: true
//   }

//   toggleShow = () => {
//     this.setState({ show: !this.state.show })
//   }

//   render() {
//     if (this.state.show) {
//       return (
//         <div id="hello">{this.props.mytext}
//           <button onClick={this.toggleShow}>Toggle Show</button>
//         </div>
//       )
//     } else {
//       return <h1>
//         There are not elements
//         <button onClick={this.toggleShow}>toggleShow</button>
//       </h1>

//     }
//   }
// }


// function App() {
//   return (
//     <div>
//       This is my component:
//       <Helloworld mytext="Hello Yaz" />
//       <Helloworld mytext="Hola mundo" />
//       <Helloworld mytext="Como estas ?" />
//     </div>
//   );
// }