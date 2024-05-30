import React from 'react';
import styled from 'styled-components';

// Hardcoded username for demonstration
const userName = 'John Doe';

const MainContainer = styled.div`
  max-width:1200px;
`;
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 80px; /* Add this line to create space between the navbar and the container */

  @media (max-width: 768px) {
    margin-top: 60px; /* Adjust the margin-top for smaller screens */
  }
`;

const WelcomeBar = styled.div`
  background-color: skyblue;
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 1.5em;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 15px 30px; /* Padding remains the same */
  margin: 0 50px; /* Increased margin to increase space between buttons */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 80%;


  }
`;
const SearchContainer = styled.div`
  background-color: blue;
  color: white;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  margin-bottom:0px;
  text-align: center;
  font-size: 1.2em;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHead = styled.thead`
  background-color: #007BFF;
  color: white;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const HomePage = () => {
  return (  
    <MainContainer>

 
    <HomePageContainer>
      <WelcomeBar>
        Welcome, {userName}
      </WelcomeBar>
      <ButtonContainer>
        <Button>Golf</Button>
        <Button>Restaurants</Button>
      </ButtonContainer>
      <SearchContainer>
        List of ongoing Searches (List of each query a user has running)
      </SearchContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Type</TableHeader>
            <TableHeader>Date Opened</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Click to Stop</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Example Type</TableCell>
            <TableCell>2024-05-30</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Button>Stop</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Example Type</TableCell>
            <TableCell>2024-05-30</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Button>Stop</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Example Type</TableCell>
            <TableCell>2024-05-30</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Button>Stop</Button>
            </TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </HomePageContainer>
    </MainContainer>
  );
};

export default HomePage;
