import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class StudentListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "list Student",
            students: []
        };
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    viewStudent(id) {
        this.props.history.push(`/view-student/${id}`);
    }
    deleteStudent(id) {
        StudentService.deleteStudent(id).then(res => {
            this.setState({
                students: this.state.students.filter(student => student.id !== id)
            })
        })
    }
    editStudent(id) {
        this.props.history.push(`/update-student/${id}`);
    }
    addStudent() {
        this.props.history.push('/add-student');
    }
    // for get all student from table
    componentDidMount() {
        StudentService.getAllStudents().then((res) => {
            this.setState({
                students: res.data
            })
        })
    }

    render() {
        return (<div>
            <h2 className="text-center">Students List</h2>
            <div className="row">
                <button className="btn btn-outline-primary me-md-2" onClick={this.addStudent}>Add Student</button>
            </div>
            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered table table-sm">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student =>
                                <tr key={student.id}>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.emailId}</td>
                                    <td>{student.city}</td>
                                    <td>
                                        <button onClick={() => this.editStudent(student.id)} className="btn btn-info">update</button>
                                        <button onClick={() => this.deleteStudent(student.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>delete</button>
                                        <button onClick={() => this.viewStudent(student.id)} className="btn btn-warning" style={{ marginLeft: "10px" }}>View</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>

            </div>
        </div>
        );
    }
}


export default StudentListComponent;