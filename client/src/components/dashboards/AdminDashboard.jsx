import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { motion } from 'framer-motion';
import DashboardLayout from './DashboardLayout';

const AdminDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Mock API call to fetch users
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'User' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin' },
      ]);
    }, 1000);

    // Mock API call to fetch bookings
    setTimeout(() => {
      setBookings([
        { id: 1, user: 'John Doe', jetSki: 'WaveRunner', date: '2025-05-01', status: 'Completed' },
        { id: 2, user: 'Jane Smith', jetSki: 'Sea-Doo', date: '2025-05-15', status: 'Upcoming' },
      ]);
    }, 1000);

    // Mock API call to fetch inventory
    setTimeout(() => {
      setInventory([
        { id: 1, model: 'WaveRunner', status: 'Available', availability: 'In Stock' },
        { id: 2, model: 'Sea-Doo', status: 'Maintenance', availability: 'Out of Stock' },
      ]);
    }, 1000);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenDialog = (item, type) => {
    setSelectedItem({ ...item, type });
    setFormData(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
    setFormData({});
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Mock API call to save data
    console.log('Saving data:', formData);
    handleCloseDialog();
  };

  const usersColumns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <Button onClick={() => handleOpenDialog(params.row, 'user')} variant="contained" color="primary" size="small" style={{ marginRight: 5 }}>
            Edit
          </Button>
          <Button onClick={() => console.log('Delete user:', params.row.id)} variant="contained" color="error" size="small">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const bookingsColumns = [
    { field: 'user', headerName: 'User', width: 150 },
    { field: 'jetSki', headerName: 'Jet Ski', width: 150 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button onClick={() => handleOpenDialog(params.row, 'booking')} variant="contained" color="primary" size="small">
          Update Status
        </Button>
      ),
    },
  ];

  const inventoryColumns = [
    { field: 'model', headerName: 'Model', width: 150 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'availability', headerName: 'Availability', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div>
          <Button onClick={() => handleOpenDialog(params.row, 'inventory')} variant="contained" color="primary" size="small" style={{ marginRight: 5 }}>
            Edit
          </Button>
          <Button onClick={() => console.log('Delete inventory:', params.row.id)} variant="contained" color="error" size="small">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="admin dashboard tabs">
        <Tab label="Users" />
        <Tab label="Bookings" />
        <Tab label="Inventory" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {tabValue === 0 && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={users}
                columns={usersColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
            <Button onClick={() => handleOpenDialog({}, 'user')} variant="contained" color="primary" style={{ marginTop: 10 }}>
              Add User
            </Button>
          </motion.div>
        )}
        {tabValue === 1 && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={bookings}
                columns={bookingsColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
          </motion.div>
        )}
        {tabValue === 2 && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={inventory}
                columns={inventoryColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
            <Button onClick={() => handleOpenDialog({}, 'inventory')} variant="contained" color="primary" style={{ marginTop: 10 }}>
              Add Jet Ski
            </Button>
          </motion.div>
        )}
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {selectedItem?.id ? `Edit ${selectedItem.type}` : `Add ${selectedItem?.type || 'Item'}`}
        </DialogTitle>
        <DialogContent>
          {selectedItem?.type === 'user' && (
            <div>
              <TextField
                label="Name"
                name="name"
                value={formData.name || ''}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email || ''}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Role"
                name="role"
                value={formData.role || ''}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
              />
            </div>
          )}
          {selectedItem?.type === 'booking' && (
            <TextField
              label="Status"
              name="status"
              value={formData.status || ''}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
          )}
          {selectedItem?.type === 'inventory' && (
            <div>
              <TextField
                label="Model"
                name="model"
                value={formData.model || ''}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Status"
                name="status"
                value={formData.status || ''}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Availability"
                name="availability"
                value={formData.availability || ''}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
};

export default AdminDashboard;
