import { Node } from 'shared/ui/node';

export const StartNode = (props : any) => {

    return (
        <Node 
            {...props}
            pr='source'
            label='START'
            onDoubleClick={() => alert('acascs')}
        />
    );
};