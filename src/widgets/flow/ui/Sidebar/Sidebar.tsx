import { Drawer, Box, Toolbar, List, ListItemText, Typography } from '@mui/material';

export const Sidebar = () => {
    const onDragStart = (event : any, nodeType : string, nodeName: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('application/reactflow/nodeName', nodeName);
        event.dataTransfer.effectAllowed = 'move';
      };

    return (
        <Drawer
            variant="permanent"
            anchor="right"
            sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                >
                        <ListItemText sx={{ m: 2 }}>
                            <Typography textAlign={'center'} fontWeight={'bold'} border={1} onDragStart={(event) => onDragStart(event, 'start', 'START')} draggable>
                                START
                            </Typography>
                        </ListItemText>
                        <ListItemText sx={{ m: 2 }}>
                            <Typography textAlign={'center'} fontWeight={'bold'} border={1} onDragStart={(event) => onDragStart(event, 'restApi', 'REST API')} draggable>
                                REST API
                            </Typography>
                        </ListItemText>
                        <ListItemText sx={{ m: 2 }}>
                            <Typography textAlign={'center'} fontWeight={'bold'} border={1} onDragStart={(event) => onDragStart(event, 'ssh', 'CONNECT SSH')} draggable>
                                CONNECT SSH
                            </Typography>
                        </ListItemText>
                        <ListItemText sx={{ m: 2 }}>
                            <Typography textAlign={'center'} fontWeight={'bold'} border={1} onDragStart={(event) => onDragStart(event, 'output', 'DONE')} draggable>
                                DONE
                            </Typography>
                        </ListItemText>
                </List>
            </Box>
        </Drawer>
    )
}