import { Component } from "react";

class Student extends Component {
    constructor(props) {
        super()
    }
    render() {

        return `
        first-name:${this.props.Fname}
        
          last-name:${this.props.Lname}
       date:${this.props.date}
        pic:${this.props.pic}
        `

    }
}
export default Student