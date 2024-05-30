import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import styled from 'styled-components';

const Node = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  background: ${(props) => props.theme.nodeBg};
  color: ${(props) => props.theme.nodeColor};
  border: 1px solid ${(props : any) => (props.selected ? props.theme.primary : props.theme.nodeBorder)};

  .react-flow__handle {
    background: ${(props) => props.theme.primary};
    width: 8px;
    height: 10px;
    border-radius: 3px;
  }
`;

const RestApiNode = memo(({ data, selected } : any) => {
  return (
    <Node selected={selected}>
      <div>
        <strong>{data.label}</strong>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Node>
  );
});

export default RestApiNode;