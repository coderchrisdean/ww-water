import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Wet N Wild Water Toys
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? false : true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} to="/dashboard/user">
              <ListItemText primary="User Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/admin">
              <ListItemText primary="Admin Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to="/logout">
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%', mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
