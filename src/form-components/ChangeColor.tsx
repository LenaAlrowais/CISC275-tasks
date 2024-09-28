import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("red");

    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "black",
    ];

    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {}
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    type="radio"
                    inline
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                    onChange={handleColorChange}
                    style={{ color: color }}
                />
            ))}
            {}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    border: "1px solid black",
                    backgroundColor: selectedColor,
                    color: "white",
                    display: "inline-block",
                }}
            >
                You have chosen {selectedColor}.
            </div>
        </div>
    );
}
