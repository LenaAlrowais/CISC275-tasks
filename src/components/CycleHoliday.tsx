import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "🎉" | "🦃";

export function CycleHoliday(): React.JSX.Element {
    const holidaysAlphabetical: Holiday[] = ["🎄", "🎆", "🎉", "🎃", "🦃"];

    const holidaysChronological: Holiday[] = ["🎆", "🎃", "🦃", "🎉", "🎄"];

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🎃");

    function advanceAlphabetically(): void {
        const currentIndex = holidaysAlphabetical.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysAlphabetical.length;
        setCurrentHoliday(holidaysAlphabetical[nextIndex]);
    }

    function advanceByYear(): void {
        const currentIndex = holidaysChronological.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysChronological.length;
        setCurrentHoliday(holidaysChronological[nextIndex]);
    }

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
