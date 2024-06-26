import React, { useState } from 'react';
import styled from 'styled-components';
import SharkImage from '../assets/SharkImage.webp';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 800px;
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 1.5em;
  color: #333333;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 1em;
`;

const Label = styled.label`
  margin-bottom: .5em;
  color: #333333;
  display: block;
  text-align: left;
`;

const Input = styled.input`
  padding: .5em;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 0.7em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
`;

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home'); // Redirect to the home page after successful login
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    
        <StyledForm onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <FormField>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormField>
          <Button type="submit">Login</Button>
    
        </StyledForm>
  )
};

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <img src={SharkImage} alt="Login" />
        </ImageContainer>
        <FormContainer>
          <Heading>Welcome! Please Sign In</Heading>
          <LoginForm />
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
