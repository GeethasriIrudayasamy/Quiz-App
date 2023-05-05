import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import heroImg from "../Assets/quiz-hero.png";
import "./StartPage.css";

const StartPage = () => {
    return (
        <Fragment>
            <header className="header">
                <Link to="/" className="logo">
                    <h1>Quiz</h1>
                </Link>
            </header>
            <section className="home" id="home">
                <div className="home__container bd-grid">
                    <div className="home__data">
                        <h1 className="home__title">
                            Get your knowledge on HTML tested
                        </h1>
                        <h2 className="home__subtitle">
                            A total of five questions to test your understandng
                            on basic HTML.
                        </h2>
                        <Link to="/instructions" className="button">
                            Start Quiz
                        </Link>
                    </div>
                    <img src={heroImg} alt="" className="home__img" />
                </div>
            </section>
            <section className="section-services" id="services">
                <h1 className="heading">Instructions</h1>
                <div className="container grid grid--4-cols">
                    <div className="feature">
                        <ion-icon
                            className="feature-icon"
                            name="hourglass-outline"
                        ></ion-icon>
                        <p className="feature-title">A Timed Test!</p>
                        <p className="feature-text">
                            You only have 1 minute to attend the test.
                        </p>
                    </div>
                    <div className="feature">
                        <ion-icon
                            className="feature-icon"
                            name="checkmark-outline"
                        ></ion-icon>
                        <p className="feature-title">Auto Submit</p>
                        <p className="feature-text">
                            The test will be auto submitted if not completed in
                            a minute.
                        </p>
                    </div>
                    <div className="feature">
                        <ion-icon
                            className="feature-icon"
                            name="pause-outline"
                        ></ion-icon>
                        <p className="feature-title">No Pausing</p>
                        <p className="feature-text">
                            Once started the test cannot be paused.
                        </p>
                    </div>
                    <div className="feature">
                        <ion-icon
                            className="feature-icon"
                            name="eye-outline"
                        ></ion-icon>
                        <p className="feature-title">Instant Result</p>
                        <p className="feature-text">
                            Your test result will be provied on successful
                            submission.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default StartPage;
