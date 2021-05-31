import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
    //more simple/cleaner without constructor and super. Removes the use of 'this. and enables hooks.
    state = {
        course: {
            title: "",
        },
    };

    //binding via arrow function rather than this.handleChange.bind(this)
    handleChange = (event) => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course: course });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />
                <input type="submit" value="Save" />
                {this.props.courses.map((course) => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        //bet specific and only request the data your component needs
        courses: state.courses,
    };
}

//if you dont call dispatch, nothing will happen. Action creators must be
//called by dispatch
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch),
    };
}

//two function calls. The connect function returns a function,
//and that function immediatly calls our component 'CoursesPage'
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
