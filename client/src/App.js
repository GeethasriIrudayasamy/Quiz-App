import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage";
import Quiz from "./Components/Quiz";
import InstructionPage from "./Components/InstructionPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/instructions" element={<InstructionPage />} />
            <Route path="/quiz" element={<Quiz />} />
        </Routes>
    );
}

export default App;
