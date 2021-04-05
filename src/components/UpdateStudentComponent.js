import React, { Component } from 'react';
import StudentService from '../services/StudentService'

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            city: ''
        };
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        // this.saveEmployee = this.saveEmployee.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }
    componentDidMount() {
        StudentService.getStudentById(this.state.id).then((res) => {
            let student = res.data;
            this.setState({
                firstName: student.firstName,
                lastName: student.lastName,
                emailId: student.emailId,
                city: student.city

            })
        })
    }
    updateStudent = (e) => {
        e.preventDefault();
        let student = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, city: this.state.city };
        console.log('student =>' + JSON.stringify(student));
        StudentService.updateStudent(student, this.state.id).then((res) => {
            this.props.history.push('/students');
        })
    }
    changeFirstNameHandler = event => {
        this.setState({
            firstName: event.target.value
        })
    }
    changeLastNameHandler = event => {
        this.setState({
            lastName: event.target.value
        })
    }
    changeEmailIdHandler = event => {
        this.setState({
            emailId: event.target.value
        })
    }
    changeCityHandler = event => {
        this.setState({
            city: event.target.value
        })
    }
    cancel() {
        this.props.history.push('/students');
    }


    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Student</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <lebel>First Name</lebel>
                                    <input placeholder="first name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <lebel>Last Name</lebel>
                                    <input placeholder="last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                </div>

                                <div className="form-group">
                                    <lebel>Email Id</lebel>
                                    <input placeholder="email Address" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                </div>
                                <div className="form-group">
                                    <lebel>City</lebel>
                                    <input placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler} />
                                </div>

                                <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default UpdateStudentComponent;