import * as React from 'react';
import styled from 'styled-components';

export interface ListHeaderProps {
  className?: string;
}

export const ListHeader: React.FC<ListHeaderProps> = props => <StyledH1 className={props.className}>{props.children}</StyledH1>;

const StyledH1 = styled.h1`
  padding-left: 24px;
  font-size: 20px;
`;
