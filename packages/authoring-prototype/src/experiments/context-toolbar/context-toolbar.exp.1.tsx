import * as React from 'react';
import styled from 'styled-components';

export const Toolbar: React.FC<any> = ({ onMouseEnter, onMouseLeave, pos, hoveringElement, pinnedElement, onClose }) => {
  const isVisible = pinnedElement || hoveringElement;
  const targetElement = pinnedElement || hoveringElement;
  const isInteractive = !!pinnedElement;

  return (
    <StyledToolbar
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ transform: `translate(calc(${pos.x}px + 4px), calc(${pos.y}px - 100%))` }}
      className={`toolbar${isVisible ? ' visible' : ''}${isInteractive ? ' interactive' : ''}`}
    >
      <div className={`module-name${isInteractive ? ' interactive' : ''}`}>{targetElement && targetElement.dataset.module}</div>
      {pinnedElement && (
        <div className="actions">
          <button className="action" title="Add module">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 7V8H8V15H7V8H0V7H7V0H8V7H15Z" fill="currentColor" />
            </svg>
          </button>
          <button className="action" title="Duplicate">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 6.28906V16H5V13H1V0H7.71094L10.7109 3H11.7109L15 6.28906ZM12 6H13.2891L12 4.71094V6ZM5 3H9.28906L7.28906 1H2V12H5V3ZM14 7H11V4H6V15H14V7Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="action" title="Move">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.91406 8L3.52344 9.60156L2.8125 10.3125L0 7.5L2.8125 4.6875L3.52344 5.39844L1.91406 7H5V8H1.91406ZM15 7.5L12.2188 10.2734L11.5156 9.57031L13.0859 8H10V7H13.0859L11.4766 5.39844L12.1875 4.6875L15 7.5ZM5.42969 3.48438L4.72656 2.78125L7.5 0L10.3125 2.8125L9.60156 3.52344L8 1.91406V5H7V1.91406L5.42969 3.48438ZM9.60156 11.4766L10.3125 12.1875L7.5 15L4.6875 12.1875L5.39844 11.4766L7 13.0859V10H8V13.0859L9.60156 11.4766Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="action" title="Save as fragment">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 10.9297V4.97656L7.5 2.74219L12 4.97656V10.9297L7.5 13.1719L3 10.9297ZM4 6.09375V10.3125L7 11.8047V7.59375L4 6.09375ZM8 11.8047L11 10.3125V6.09375L8 7.59375V11.8047ZM10.3828 5.28906L7.5 3.85938L4.61719 5.28906L7.5 6.72656L10.3828 5.28906ZM9 0.75L14 3.24219V10.4609L13 9.77344V3.85938L9 1.86719V0.75ZM7.5 14.7812L11.8516 12.625L12.7969 13.2656L7.5 15.9062L2.20312 13.2656L3.14844 12.625L7.5 14.7812ZM6 0.75V1.86719L2 3.85938V9.77344L1 10.4609V3.24219L6 0.75Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="action" title="Remove">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 3H13V14.5C13 14.7083 12.9609 14.9036 12.8828 15.0859C12.8047 15.2682 12.6979 15.4271 12.5625 15.5625C12.4271 15.6979 12.2682 15.8047 12.0859 15.8828C11.9036 15.9609 11.7083 16 11.5 16H3.5C3.29167 16 3.09635 15.9609 2.91406 15.8828C2.73177 15.8047 2.57292 15.6979 2.4375 15.5625C2.30208 15.4271 2.19531 15.2682 2.11719 15.0859C2.03906 14.9036 2 14.7083 2 14.5V3H1V2H5V1C5 0.859375 5.02604 0.729167 5.07812 0.609375C5.13021 0.489583 5.20052 0.385417 5.28906 0.296875C5.38281 0.203125 5.48958 0.130208 5.60938 0.078125C5.72917 0.0260417 5.85938 0 6 0H9C9.14062 0 9.27083 0.0260417 9.39062 0.078125C9.51042 0.130208 9.61458 0.203125 9.70312 0.296875C9.79688 0.385417 9.86979 0.489583 9.92188 0.609375C9.97396 0.729167 10 0.859375 10 1V2H14V3ZM6 2H9V1H6V2ZM12 3H3V14.5C3 14.6354 3.04948 14.7526 3.14844 14.8516C3.2474 14.9505 3.36458 15 3.5 15H11.5C11.6354 15 11.7526 14.9505 11.8516 14.8516C11.9505 14.7526 12 14.6354 12 14.5V3ZM6 13H5V5H6V13ZM8 13H7V5H8V13ZM10 13H9V5H10V13Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="action" title="Close" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.71094 8L14.1016 13.3984L13.3984 14.1016L8 8.71094L2.60156 14.1016L1.89844 13.3984L7.28906 8L1.89844 2.60156L2.60156 1.89844L8 7.28906L13.3984 1.89844L14.1016 2.60156L8.71094 8Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      )}
    </StyledToolbar>
  );
};
const StyledToolbar = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  pointer-events: none;
  color: white;
  border-radius: 2px;
  font-size: 12px;
  height: 24px;
  box-sizing: border-box;
  overflow: hidden; /* make border radius clip child */

  &.visible {
    display: flex;
  }

  &.interactive {
    pointer-events: all;
  }

  .module-name {
    position: relative;
    z-index: 1;
    background-color: #0078d4;
    padding: 0 8px;
    display: flex;
    align-items: center;
    transition: background-color 250ms;
  }

  .module-name.interactive {
    background-color: #005a9e;
  }

  .actions {
    background-color: #0078d4;
    display: flex;
    animation: slidein 250ms;
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background-color: transparent;
    color: white;
  }

  .action:hover {
    background-color: #005a9e;
  }

  @keyframes slidein {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
