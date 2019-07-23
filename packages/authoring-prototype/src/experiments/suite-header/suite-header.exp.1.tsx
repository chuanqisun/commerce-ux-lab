import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Avatar from '../../assets/images/UserAvatar02.png';
import { FullMdl2 } from '../../assets/icons/full-mdl2';
import { colors } from '../../styles/colors/colors';
import { Panel } from 'office-ui-fabric-react/lib/Panel';

export interface SuiteHeaderProps {
  className?: string;
}

export const SuiteHeader: React.FC<SuiteHeaderProps> = ({ className }) => {
  const [showMePanel, setShowMePanel] = useState(false);
  return (
    <StyledHeader className={className}>
      <button className="waffle-button mdl">{FullMdl2.WaffleOffice365}</button>
      <a className="app-name" href="/">
        Rushmore
      </a>

      <button className="menu-button mdl">{FullMdl2.Settings}</button>
      <button className="menu-button mdl">{FullMdl2.Help}</button>
      <button className="me-button" onClick={e => setShowMePanel(true)}>
        <img className="avatar" src={Avatar} />
      </button>
      <Panel isOpen={showMePanel} onDismiss={e => setShowMePanel(false)} isLightDismiss={true} layerProps={{ styles: { root: { top: '48px' } } }}>
        <ul>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/exp">All experiments</a>
          </li>
        </ul>
      </Panel>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  background-color: ${colors.sharedCyan30};

  > * {
    flex-shrink: 0;
  }

  .waffle-button {
    width: 48px;
    height: 48px;
    font-size: 16px;
    background-color: transparent;
    color: white;
    border: none;
  }
  .app-name {
    color: white;
    margin: 0 auto 0 8px;
    display: inline-flex;
    align-items: center;
    height: 100%;
    font-weight: 600;
    text-decoration: none;
  }
  .avatar {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }

  .menu-button {
    width: 48px;
    height: 48px;
    color: white;
    background-color: transparent;
    border: none;
    font-size: 16px;
  }

  .me-button {
    background-color: transparent;
    border: none;
    position: relative;
    width: 48px;
    height: 48px;
  }
`;
