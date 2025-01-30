'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { TextField, Button, Paper, Typography, Box } from '@mui/material'
import { Lock } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', { email, password })
    
    // Logika untuk memeriksa kredensial pengguna
    // Misalnya, jika login berhasil:
    if (email === 'user@example.com' && password === 'password123') {
      // Arahkan ke dashboard
      router.push('/dashboard')
    } else {
      // Tampilkan pesan kesalahan atau lakukan tindakan lain
      console.log('Login gagal')
    }
  }

  return (
    <motion.div
      as="div"
      className="min-h-screen flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left section with image - 65% of layout */}
      <div className="hidden md:flex md:w-2/3 bg-white items-center justify-center p-12">
        <div className="relative w-full h-full">
          <Image
            src="/images/polici.png"
            alt="Police Image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      {/* Right section with login form - 35% of layout */}
      <motion.div
        as="div"
        className="w-full md:w-1/3 flex items-center justify-center p-12 bg-gray-100"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md">
          <Box className="flex flex-col items-center mb-8">
            <Lock className="text-blue-600 mb-4" size={48} />
            <Typography component="h1" variant="h4" className="text-center font-bold">
              Login Aplikasi Laporan Kehilangan
            </Typography>
          </Box>
          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="medium"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="medium"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className="mt-6"
            >
              Login
            </Button>
          </form>
          <Typography variant="body1" className="mt-6 text-center text-gray-600">
            Belum punya akun? Hubungi admin untuk registrasi.
          </Typography>
        </div>
      </motion.div>
    </motion.div>
  )
}

