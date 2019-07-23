import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../styles';
import { FullMdl2 } from '../../assets/icons/full-mdl2';

export interface NavProps {
  className?: string;
}

export interface NavContext {
  items: NavItem[];
}

export interface NavItem {
  id: string;
  displayText: string;
  icon: string;
  route: string;
}

export const defaultNavItems = [
  { id: 'pages', displayText: 'Pages', icon: FullMdl2.FileASPX, route: '/app/pages' },
  { id: 'products', displayText: 'Products', icon: FullMdl2.Tag, route: '/app/products' },
  { id: 'urls', displayText: 'URLs', icon: FullMdl2.Link, route: '/app/urls' },
  { id: 'layouts', displayText: 'Layouts', icon: FullMdl2.PageHeader, route: '/app/layouts' },
  { id: 'templates', displayText: 'Templates', icon: FullMdl2.DocumentManagement, route: '/app/templates' },
  { id: 'fragments', displayText: 'Fragments', icon: FullMdl2.AppIconDefault, route: '/app/fragments' },
  { id: 'media', displayText: 'Media', icon: FullMdl2.PhotoVideoMedia, route: '/app/media' },
];

export const Nav: React.FC<NavProps> = ({ className }) => {
  const [navExpanded, setNavExpand] = useState(true);

  return (
    <StyledNav className={className} shouldExpand={navExpanded}>
      <button className="expand-toggle mdl" onClick={e => setNavExpand(!navExpanded)}>
        {FullMdl2.GlobalNavButton}
      </button>
      <ul className="nav-items">
        {defaultNavItems.map(item => (
          <li key={item.id}>
            <NavLink to={item.route} activeClassName="nav-item--selected" className="nav-item">
              <span className="nav-item__left-icon mdl">{item.icon}</span>
              {navExpanded && <span className="nav-item__display-text">{item.displayText}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

interface StyledNavProps {
  shouldExpand?: boolean;
}

const StyledNav = styled.nav<StyledNavProps>`
  --nav-expanded-width: 200px;
  --nav-collapsed-width: 48px;
  --nav-width: ${props => (props.shouldExpand ? 'var(--nav-expanded-width)' : 'var(--nav-collapsed-width)')};
  --row-height: 42px;

  border-right: 1px solid ${colors.gray40};
  display: flex;
  width: var(--nav-width);
  background-color: ${colors.gray20};
  flex-direction: column;

  .expand-toggle {
    padding: 0;
    background-color: transparent;
    border: none;
    width: var(--nav-collapsed-width);
    height: var(--row-height);

    &:hover {
      background-color: ${colors.gray40};
    }
  }

  .nav-items {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    height: var(--row-height);
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 16px;
    position: relative;
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;

    &::before {
      opacity: 0;
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 4px;
      height: 20px;
      width: 4px;
      border-radius: 2px;
      background-color: ${colors.communicationPrimary};
    }

    &:not(.nav-item--selected):hover {
      background-color: ${colors.gray40};
    }
  }

  .nav-item--selected {
    background-color: white;

    &::before {
      opacity: 1;
    }

    .nav-item__display-text {
      font-weight: 600;
    }
  }

  .nav-item__left-icon {
    margin-right: 16px;
  }

  .nav-item__display-text {
    font-size: 14px;
  }
`;
