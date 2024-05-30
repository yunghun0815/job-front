import { memo } from 'react';

import { Handle, Position, HandleType } from 'reactflow';
import { Typography } from '@mui/material';
import styled from 'styled-components';

interface NodeProps {
    label: string;
    pt?: HandleType;
    pb?: HandleType;
    pl?: HandleType;
    pr?: HandleType;
    selected?: boolean;
    onDoubleClick?: () => void;
  }

const Wrapper = styled.div<any>`
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
const NodeHandle = ({ pt, pb, pl, pr }: Partial<NodeProps>) => (
    <>
        {pt && <Handle type={pt} position={Position.Top} />}
        {pb && <Handle type={pb} position={Position.Bottom} />}
        {pl && <Handle type={pl} position={Position.Left} />}
        {pr && <Handle type={pr} position={Position.Right} />}        
    </>
)

export const Node = memo((props : NodeProps) => {

    return (
        <Wrapper 
            selected={props.selected}
            onDoubleClick={props.onDoubleClick}
        >
            <Typography>{props.label}</Typography>
            <NodeHandle pt={props.pt} pb={props.pb} pl={props.pl} pr={props.pr} />
        </Wrapper>
    );
});