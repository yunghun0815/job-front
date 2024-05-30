import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Node } from 'shared/ui/node';

const StartNode = memo(({ data, selected } : any) => {
  return (
    <Node selected={selected}>
      <div>
        <strong>{data.label}</strong>
      </div>
      <Handle type="source" position={Position.Right} />
    </Node>
  );
});

export default StartNode;