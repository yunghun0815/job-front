import { NodeProps } from 'reactflow';
 
type NodeData = {
  value: number;
};
 
// type CustomNode  = Node<NodeData>;
 
export const CustomNode = ({ data }: NodeProps<NodeData>) => {
  return <div>A big number: {data.value}</div>;
}