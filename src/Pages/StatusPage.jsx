import React from 'react';
import styled from 'styled-components';

// Hardcoded username and status for demonstration
const userName = 'John Doe';
const status = 'Running'; // This can be dynamic based on your application state

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Bar = styled.div`
  background-color: skyblue;
  width: 100%;
  text-align: center;
  padding: 30px;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StatusBar = styled.div`
  background-color: lightgray;
  width: 100%;
  text-align: center;
  padding: 25px;
  font-size: 1.5em;
  margin-bottom: 30px;
`;

const ScriptGUI = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.2em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 20px 40px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StatusPage = () => {
  return (
    <Container>
      <Bar>Welcome, {userName}</Bar>
      <StatusBar>Current Status: {status}</StatusBar>
      <ScriptGUI>
        {/* Replace with the actual GUI of the script */}
        <p>Script GUI goes here</p>
      </ScriptGUI>
      <ButtonContainer>
        <Button>Start</Button>
        <Button>Stop</Button>
      </ButtonContainer>
    </Container>
  );
};

export default StatusPage;
