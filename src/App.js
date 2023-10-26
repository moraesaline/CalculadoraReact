import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffff;
`;

const Calculator = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 300px;
  padding: 20px;
`;

const Display = styled.input`
  grid-column: span 4;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 24px;
  text-align: right;
`;

const Button = styled.button`
  background-color: #ff69b4;
  color: white;
  font-size: 20px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eee;
  }
`;

const CalculatorButton = styled(Button)`
  grid-column: span 1;
`;

const OperatorButton = styled(Button)`
  grid-column: span 1;
  background-color: #b64ae9;
  &:hover {
    background-color: #eee;
  }
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");
  const [operador, setOperador] = useState("");

  const valorButtonClick = (value) => {
    if (value === "=") {
      try {
        const num1 = parseFloat(primeiroValor);
        const num2 = parseFloat(segundoValor);

        if (operador === "+") {
          setPrimeiroValor((num1 + num2).toString());
        } else if (operador === "-") {
          setPrimeiroValor((num1 - num2).toString());
        } else if (operador === "*") {
          setPrimeiroValor((num1 * num2).toString());
        } else if (operador === "/") {
          setPrimeiroValor((num1 / num2).toString());
        }

        setSegundoValor("");
        setOperador("");
      } catch (error) {
        setPrimeiroValor("Erro");
      }
    } else if (value === "C") {
      setPrimeiroValor("");
      setSegundoValor("");
      setOperador("");
    } else if (["+", "-", "*", "/"].includes(value)) {
      setOperador(value);
      setSegundoValor(primeiroValor);
      setPrimeiroValor("");
    } else {
      setPrimeiroValor(primeiroValor + value);
    }
  };

  return (
    <Container>
      <Calculator>
        <Display type="text" value={primeiroValor} readOnly />
        <CalculatorButton onClick={() => valorButtonClick("7")}>
          7
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("8")}>
          8
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("9")}>
          9
        </CalculatorButton>
        <OperatorButton onClick={() => valorButtonClick("/")}>/</OperatorButton>
        <CalculatorButton onClick={() => valorButtonClick("4")}>
          4
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("5")}>
          5
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("6")}>
          6
        </CalculatorButton>
        <OperatorButton onClick={() => valorButtonClick("")}></OperatorButton>
        <CalculatorButton onClick={() => valorButtonClick("1")}>
          1
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("2")}>
          2
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("3")}>
          3
        </CalculatorButton>
        <OperatorButton onClick={() => valorButtonClick("+")}>+</OperatorButton>
        <CalculatorButton onClick={() => valorButtonClick(".")}>
          .
        </CalculatorButton>
        <CalculatorButton onClick={() => valorButtonClick("0")}>
          0
        </CalculatorButton>
        <OperatorButton onClick={() => valorButtonClick("=")}>=</OperatorButton>
        <OperatorButton onClick={() => valorButtonClick("C")}>C</OperatorButton>
      </Calculator>
    </Container>
  );
}
