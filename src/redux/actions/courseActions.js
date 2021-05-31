//import constant to ensure no spelling errors
import * as types from "./actionTypes"

export function createCourse(course) {
    //constant in caps
    //course = payload
    return { type: types.CREATE_COURSE, course: course};
}
