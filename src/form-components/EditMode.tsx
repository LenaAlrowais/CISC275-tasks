import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);

    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function handleStudentStatusChange(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {}
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => {
                    setEditMode(!editMode);
                }}
                className="mb-3"
            />

            {editMode ?
                <Form>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formIsStudent" className="mt-3">
                        <Form.Check
                            type="checkbox"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={handleStudentStatusChange}
                        />
                    </Form.Group>
                </Form>
            :   <div>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </div>
            }
        </div>
    );
}
