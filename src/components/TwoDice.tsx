import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDice, setLeftDice] = useState<number>(1);
    const [rightDice, setRightDice] = useState<number>(6);
    const rollLeftDice = () => {
        setLeftDice(d6());
    };
    const rollRightDice = () => {
        setRightDice(d6());
    };

    let resultMessage = "";
    if (leftDice === 1 && rightDice === 1) {
        resultMessage = "You Lose!";
    } else if (leftDice === rightDice) {
        resultMessage = "You Win!";
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDice}</span>
                <span data-testid="right-die">{rightDice}</span>
            </div>
            <div>
                <Button onClick={rollLeftDice}>Roll Left</Button>
                <Button onClick={rollRightDice}>Roll Right</Button>
            </div>
            {resultMessage && <p>{resultMessage}</p>}
        </div>
    );
}
