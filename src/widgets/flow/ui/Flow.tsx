import { useState, useRef, useCallback } from 'react';
import { Box, Toolbar } from '@mui/material';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import { nodes as initialNodes, edges as initialEdges } from '../model/index.tsx';
import { StartNode } from 'entities/node';
import RestApiNode from './Nodes/RestApiNode.tsx';
import{ ThemeProvider } from 'styled-components';
import 'reactflow/dist/style.css';

const theme = {
    bg: '#fff',
    primary: '#ff0072',
  
    nodeBg: '#f2f2f5',
    nodeColor: '#222',
    nodeBorder: '#222',
  
    minimapMaskBg: '#f2f2f5',
  
    controlsBg: '#fefefe',
    controlsBgHover: '#eee',
    controlsColor: '#222',
    controlsBorder: '#ddd'
}

const nodeTypes = {
  start: StartNode,
  restApi: RestApiNode
};

const minimapStyle = {
  height: 120,
};

export const Flow = () => {
    const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params : any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
    const getId = () => `${Math.random()}`;
    const reactFlowWrapper = useRef<any>(null);

    const onInit = (_reactFlowInstance : any) =>
    setReactFlowInstance(_reactFlowInstance);

    const onDragOver = (event : any) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event : any) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        const name = event.dataTransfer.getData('application/reactflow/nodeName');
        const position = reactFlowInstance?.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });

        const newNode = {
            id: getId(),
            type,
            position,
            data: { label: `${name}` },
        };

        setNodes((es) => es.concat(newNode));
    };

    return (
        <ThemeProvider theme={theme}>
            <Box display='flex' flexDirection='column' sx={{ flexGrow: 1 }} ref={reactFlowWrapper} className="reactflow-wrapper">
                <Toolbar/>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onInit={onInit}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onConnect={onConnect}
                    fitView
                    nodeTypes={nodeTypes}
                    deleteKeyCode={"Delete"}
                >
                    <MiniMap style={minimapStyle} zoomable pannable />
                    <Controls />
                    <Background color="#aaa" gap={16} />
                    </ReactFlow>
            </Box>
        </ThemeProvider>
    );
};