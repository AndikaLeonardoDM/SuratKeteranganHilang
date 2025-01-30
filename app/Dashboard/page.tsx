'use client'

import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Home,
  FileText,
  Users,
  Settings,
  LogOut,
} from 'lucide-react'

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const menuItems = [
    { text: 'Beranda', icon: <Home /> },
    { text: 'Laporan', icon: <FileText /> },
    { text: 'Pengguna', icon: <Users /> },
    { text: 'Pengaturan', icon: <Settings /> },
  ]

  return (
    <div className="flex h-screen">
      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Sistem Laporan Kehilangan
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            marginTop: '64px',
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem component="button" key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem component="button" className="mt-auto text-red-600">
              <ListItemIcon>
                <LogOut className="text-red-600" />
              </ListItemIcon>
              <ListItemText primary="Keluar" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '64px',
          marginLeft: '240px',
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Statistik Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Typography variant="h6" className="mb-2">
              Total Laporan
            </Typography>
            <Typography variant="h3" className="font-bold text-blue-600">
              150
            </Typography>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Typography variant="h6" className="mb-2">
              Laporan Diproses
            </Typography>
            <Typography variant="h3" className="font-bold text-yellow-600">
              45
            </Typography>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Typography variant="h6" className="mb-2">
              Laporan Selesai
            </Typography>
            <Typography variant="h3" className="font-bold text-green-600">
              105
            </Typography>
          </div>
        </div>

        {/* Tabel Laporan Terbaru */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <Typography variant="h6" className="mb-4">
            Laporan Terbaru
          </Typography>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">No</th>
                <th className="p-3 text-left">Tanggal</th>
                <th className="p-3 text-left">Jenis Laporan</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-b">
                  <td className="p-3">{item}</td>
                  <td className="p-3">2024-03-{item}</td>
                  <td className="p-3">Kehilangan KTP</td>
                  <td className="p-3">
                    <span className="px-2 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                      Diproses
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
    </div>
  )
}