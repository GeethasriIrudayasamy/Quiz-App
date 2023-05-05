import React, { useState, useEffect, useCallback } from "react";
import { quiz } from "../Datas/Question-data";
import "./Quiz.css";

const Quiz = () => {
    const initialMinute = 1;
    const initialSeconds = 0;
    const totalSeconds = initialMinute * 60 + initialSeconds;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [timeTakenInMins, setTimeTakenInMins] = useState(0);
    const [timeTakenInSecs, setTimeTakenInSecs] = useState(0);
    const [displayedQuestion, setDisplayedQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [displayResult, setDisplayResult] = useState(false);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const { questions } = quiz;
    const { question, choices, correctAnswer } = questions[displayedQuestion];
    const leading_zero = (number) => (number > 9 ? number : `0${number}`);
    const finishHandler = useCallback(() => {
        const totalSecondstimeTaken = minutes * 60 + seconds;
        const timeTaken = totalSeconds - totalSecondstimeTaken;
        if (timeTaken >= 60) {
            setTimeTakenInMins(Math.floor(timeTaken / 60));
            setTimeTakenInSecs(leading_zero(timeTaken % 60));
        } else {
            setTimeTakenInSecs(leading_zero(timeTaken));
        }

        setDisplayResult(true);
    }, [minutes, seconds, totalSeconds]);
    useEffect(() => {
        let timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    finishHandler();
                    setDisplayResult(true);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [seconds, finishHandler, minutes]);

    const onClickNext = () => {
        setSelectedOptionIndex(null);
        setResult((prev) =>
            selectedOption
                ? {
                      ...prev,
                      score: prev.score + 1,
                      correctAnswers: prev.correctAnswers + 1,
                  }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        );
        if (displayedQuestion !== questions.length - 1) {
            setDisplayedQuestion((prev) => prev + 1);
        } else {
            setDisplayedQuestion(0);
            finishHandler();
        }
    };

    const onOptionSelected = (answer, index) => {
        setSelectedOptionIndex(index);
        if (answer === correctAnswer) {
            setSelectedOption(true);
        } else {
            setSelectedOption(false);
        }
    };

    return (
        <div className="quiz-container">
            {!displayResult ? (
                <div>
                    <div className="quiz-flex">
                        <span className="question-number">
                            {leading_zero(displayedQuestion + 1)}
                            <span className="total-question">
                                /{leading_zero(questions.length)}
                            </span>
                        </span>
                        {minutes === 0 && seconds === 0 ? null : (
                            <>
                                {minutes}:
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </>
                        )}
                    </div>
                    <h2>{question}</h2>
                    <ul>
                        {choices.map((option, index) => (
                            <li
                                onClick={() => onOptionSelected(option, index)}
                                key={option}
                                className={
                                    selectedOptionIndex === index
                                        ? "selected-option"
                                        : null
                                }
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div className="flex-right">
                        <button
                            onClick={onClickNext}
                            disabled={selectedOptionIndex === null}
                        >
                            {displayedQuestion === questions.length - 1
                                ? "Finish"
                                : "Next"}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="result">
                    <h3>Your Result</h3>
                    <p>
                        Total Question: <span>{questions.length}</span>
                    </p>
                    <p>
                        Total Score:<span> {result.score}</span>
                    </p>
                    <p>
                        Correct Answers:<span> {result.correctAnswers}</span>
                    </p>
                    <p>
                        Wrong Answers:<span> {result.wrongAnswers}</span>
                    </p>
                    <p>
                        Time Taken:
                        <span>
                            {timeTakenInMins}:{timeTakenInSecs}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
