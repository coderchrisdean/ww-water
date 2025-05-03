import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNote';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const drawerWidth = 220;

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  background: 'rgba(255,255,255,0.95)',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.03)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
  },
}));

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon sx={{ color: '#0072A0' }} /> },
  { text: 'Users', icon: <PeopleIcon sx={{ color: '#0072A0' }} /> },
  { text: 'Bookings', icon: <EventNoteIcon sx={{ color: '#0072A0' }} /> },
  { text: 'Inventory', icon: <InventoryIcon sx={{ color: '#0072A0' }} /> },
  { text: 'Reports', icon: <AssessmentIcon sx={{ color: '#0072A0' }} /> },
  { text: 'Settings', icon: <SettingsIcon sx={{ color: '#0072A0' }} /> },
];

export default function AdminDashboard(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" fontFamily="Inter" sx={{ color: '#0072A0', fontWeight: 700 }}>
          Wet N Wild Admin
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontFamily: 'Inter', fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: 'linear-gradient(90deg, #00A0B0 0%, #0072A0 100%)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.10)'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" fontFamily="Inter" sx={{ fontWeight: 700, letterSpacing: 2 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="admin navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)',
          minHeight: '100vh'
        }}
      >
        <Toolbar />
        <Typography variant="h4" fontFamily="Inter" sx={{ fontWeight: 700, mb: 2, color: '#0072A0' }}>
          Overview
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <StatCard>
              <PeopleIcon color="primary" sx={{ fontSize: 40 }} />
              <Box>
                <Typography variant="h6" fontFamily="Inter, Roboto, Arial, sans-serif">Users</Typography>
                <Typography variant="h4" fontFamily="Inter, Roboto, Arial, sans-serif">0</Typography>
              </Box>
            </StatCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StatCard>
              <EventNoteIcon color="primary" sx={{ fontSize: 40 }} />
              <Box>
                <Typography variant="h6" fontFamily="Inter, Roboto, Arial, sans-serif">Bookings</Typography>
                <Typography variant="h4" fontFamily="Inter, Roboto, Arial, sans-serif">0</Typography>
              </Box>
            </StatCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StatCard>
              <InventoryIcon color="primary" sx={{ fontSize: 40 }} />
              <Box>
                <Typography variant="h6" fontFamily="Inter, Roboto, Arial, sans-serif">Inventory</Typography>
                <Typography variant="h4" fontFamily="Inter, Roboto, Arial, sans-serif">0</Typography>
              </Box>
            </StatCard>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Paper sx={{ p: 3, borderRadius: 4, background: '#fff' }}>
            <Typography variant="h6" fontFamily="Inter, Roboto, Arial, sans-serif" sx={{ color: '#0072A0', mb: 1 }}>
              Explore your data
            </Typography>
            <Typography variant="body1" fontFamily="Inter, Roboto, Arial, sans-serif">
              Uncover performance and visitor insights with our data wizardry.
            </Typography>
            {/* Placeholder for charts/graphs */}
            <Box sx={{ height: 200, background: '#e0f7fa', borderRadius: 2, mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0072A0', fontSize: 24 }}>
              [Charts Coming Soon]
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
