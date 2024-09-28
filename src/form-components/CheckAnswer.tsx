import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    const isCorrect =
        userAnswer.trim().toLowerCase() === expectedAnswer.trim().toLowerCase();

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Type your answer"
            />
            {}
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
