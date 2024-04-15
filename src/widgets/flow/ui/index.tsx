import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import { nodes as initialNodes, edges as initialEdges } from '../model/index.tsx';
import CustomNode from './CustomNode2.tsx';

import 'reactflow/dist/style.css';

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance : any) => console.log('flow loaded:', reactFlowInstance);

export const Flow = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params : any) => setEdges((eds) => addEdge(params, eds)), []);

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node?.type === 'custom')?.data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  const addNode = useCallback(() => {
    setNodes((nds) => {
      return [
        ...nds,
        {
          id: `dndnode-${nds.length}`,
          type: 'output',
          position: { x: Math.random() * 500, y: Math.random() * 500 },
          data: {
            label: `hello`,
          },
        },
      ];
    })  
  }, []);

  return (
    <div style={{ width: '100vw', height: '80vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edgesWithUpdatedTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        nodeTypes={nodeTypes}
        deleteKeyCode={"Delete"}
      >
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      <button onClick={addNode}>추가</button>
    </div>
  );
};