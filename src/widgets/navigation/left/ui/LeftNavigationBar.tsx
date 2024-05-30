import { useState } from 'react';
import { Drawer, Box, Toolbar, List, ListItemButton, ListItemText, Collapse, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
export const LeftNavigationBar = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
    setOpen(!open);
    };

    return (
        <Drawer
            variant="permanent"
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
                    <ListItemButton onClick={handleClick}>
                        {open ? <ExpandLess fontSize='small'/> : <ExpandMore fontSize='small'/>}
                        <ListItemText sx={{ ml: 2 }}>
                            <Typography fontWeight={'bold'}>Batch</Typography>
                        </ListItemText>
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 3 }}>
                                <ListItemText sx={{ ml: 5 }}>
                                    <Typography fontSize={'small'}>SMS STATISTICS</Typography>
                                </ListItemText>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 3 }}>
                                <ListItemText sx={{ ml: 5 }}>
                                    <Typography fontSize={'small'}>LARGE EXCEL</Typography>
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Drawer>
    )
}