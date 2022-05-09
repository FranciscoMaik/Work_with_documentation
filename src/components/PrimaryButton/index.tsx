import React from 'react';
import styled from 'styled-components';

// import {Container} from './styled';

const Container = styled.div`
  display: flex;
`;

export interface PrimaryButtonProps {
  name: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = function ({
  name = 'Project',
}) {
  return (
    <Container>
      <h1>{name}</h1>
    </Container>
  );
};
