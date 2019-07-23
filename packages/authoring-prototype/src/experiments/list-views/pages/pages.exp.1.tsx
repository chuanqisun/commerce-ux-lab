import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../../styles';
import { FullMdl2 } from '../../../assets/icons/full-mdl2';
import { ScrollablePane, ScrollbarVisibility, StickyPositionType, Sticky } from 'office-ui-fabric-react';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { ListHeader } from '../list-header/list-header.exp.1';

export const defaultPages = [];

export interface PagesProps {
  className?: string;
}

export const Pages: React.FC<PagesProps> = ({ className }) => (
  <StyledDiv className={className}>
    <CommandBar items={getCommandBarItems()} />
    <ListHeader>Pages</ListHeader>
    <div className="pane-host">
      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
        <DetailsList
          items={getListItems()}
          columns={columns}
          onRenderDetailsHeader={(headerProps, defaultRender) => {
            return (
              <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true} stickyBackgroundColor="transparent">
                <div>{defaultRender!(headerProps)}</div>
              </Sticky>
            );
          }}
        />
      </ScrollablePane>
    </div>
  </StyledDiv>
);

const getListItems = () => {
  let result = [];
  for (let i = 0; i < 50; i++) {
    result.push({
      key: i,
      name: 'Item ' + i,
      value: i,
    });
  }

  return result;
};

const columns = [
  { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, isResizable: true },
  { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, isResizable: true },
];

const getCommandBarItems = () => {
  return [
    {
      key: 'newItem',
      name: 'New page',
      iconProps: {
        iconName: 'Add',
      },
    },
    {
      key: 'delete',
      name: 'Delete',
      iconProps: {
        iconName: 'Delete',
      },
    },
    {
      key: 'publish',
      name: 'Publish',
      iconProps: {
        iconName: 'PublishContent',
      },
    },
  ];
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  .pane-host {
    flex: 1 1 auto;
    position: relative;
  }
`;
