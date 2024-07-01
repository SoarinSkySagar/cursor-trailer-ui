"use client"
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 60%;
  min-height: 50%;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 80%;
    height: 50%
  }
`;

const CardTitle = styled.h2`
  margin-top: 0;
`;

const CardContent = styled.p`
  margin-bottom: 0;
`;

const Card = ({ title, content }) => {
  return (
    <CardContainer>
      <CardTitle className='text-red-700 font-bold'>{title}</CardTitle>
      <CardContent className='text-red-500'>{content}</CardContent>
    </CardContainer>
  );
};

export default Card;
