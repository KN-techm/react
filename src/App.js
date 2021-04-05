import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StudentListComponent from './components/StudentListComponent'
import CreateStudentComponent from './components/CreateStudentComponent'
import UpdateStudentComponent from './components/UpdateStudentComponent'
import ViewStudentComponent from './components/ViewStudentComponent'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            {/* when we enter localhost:3000 on browser then url route to componenets */}
            <Route path="/" component={StudentListComponent} exact></Route>
            {/* for localhost:3000/students */}
            <Route path="/students" component={StudentListComponent} exact></Route>
            {/* for localhost:3000/add-student */}
            <Route path="/add-student" component={CreateStudentComponent} exact></Route>
            <Route path="/update-student/:id" component={UpdateStudentComponent} exact></Route>
            <Route path="/view-student/:id" component={ViewStudentComponent} exact></Route>


          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
