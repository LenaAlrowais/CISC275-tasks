import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Lena Alrowais
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>Hello World</h1>
            <img
                src="https://www.google.com/imgres?q=totoro&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fmyneighbortotoro%2Fimages%2Fe%2Fee%2FTotoro_image.gif%2Frevision%2Flatest%2Fscale-to-width-down%2F284%3Fcb%3D20140115200547&imgrefurl=https%3A%2F%2Ftotoro.fandom.com%2Fwiki%2FTotoro&docid=1n-04Hy8B3AYUM&tbnid=WnlYfPUuk91l9M&vet=12ahUKEwiqorz2nq-IAxUSFlkFHeXtD-8QM3oECBgQAA..i&w=258&h=381&hcb=2&ved=2ahUKEwiqorz2nq-IAxUSFlkFHeXtD-8QM3oECBgQAA"
                alt="A picture of Totoro"
            />
            Fruits I like:
            <ol>
                <li>Mangoes</li>
                <li>Strawberries</li>
                <li>Lemons</li>
            </ol>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "20%",
                                height: "20%",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "20%",
                                height: "20%",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
