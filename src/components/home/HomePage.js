import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Rachels Pluralsight Course</h1>
        <p>React/Redux</p>
        <button type="button" class="btn btn-secondary">
            <Link to="about"> Learn More</Link>{" "}
        </button>
    </div>
);

export default HomePage;
