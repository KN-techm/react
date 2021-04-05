import axios from 'axios'
const STUDENT_API_BASE_URL = "http://localhost:9090/api/students";
class StudentService {
    getAllStudents() {
        return axios.get(STUDENT_API_BASE_URL);
    }
    createStudent(student) {
        return axios.post(STUDENT_API_BASE_URL, student);
    }
    updateStudent(student, studentId) {
        return axios.put(STUDENT_API_BASE_URL + '/' + studentId, student);
    }
    getStudentById(studentId) {
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }
    deleteStudent(studentId) {
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
    }
}
export default new StudentService();