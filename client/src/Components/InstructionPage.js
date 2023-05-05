import React from "react";
import "./InstructionPage.css";
import { Link } from "react-router-dom";
import image from "../Assets/instruction.png";

const InstructionPage = () => {
    return (
        <section className="inst__container">
            <div className="flex">
                <img src={image} alt="" className="inst__img" />
                <div>
                    <span className="heading">Instructions to be followed</span>
                    <ul className="inst__ul">
                        <li>You have 1 minute to complete the test.</li>
                        <li>
                            The quiz consists of questions carefully designed to
                            help you self-assess your knowledge on HTML. No data
                            will be collected on the website regarding your
                            responses or how many times you take the quiz.
                        </li>
                        <li>
                            The total score for the quiz is based on your
                            responses to all questions. If you respond
                            incorrectly to a question, your quiz score will
                            reflect it appropriately.
                        </li>
                        <li>
                            Once started the test cannot be paused and the test
                            will be auto-submitted if not completed within a
                            minute.
                        </li>
                    </ul>
                </div>
            </div>
            <span className="btn">
                <Link to="/quiz" className="start_button">
                    Start Test
                </Link>
            </span>
        </section>
    );
};

export default InstructionPage;
