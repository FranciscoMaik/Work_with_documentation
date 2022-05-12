import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SecondaryButtonProps extends HTMLButtonElement {
  name: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = function ({
  name = 'Click',
}) {
  return (
    <Container>
      <button type="button">{name}</button>
    </Container>
  );
};
