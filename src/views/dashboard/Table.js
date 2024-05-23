// ** MUI Imports
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const initialRows = [
  {
    age: 27,
    date: '09/27/2018',
    name: 'Rice',
    salary: '$19586.23',
    email: 'eebsworth2m@sbwire.com',
    designation: 'Made in Rwanda'
  },
  {
    age: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    name: 'Rice',
    email: 'kocrevy0@thetimes.co.uk',
    designation: 'Made in Rwanda'
  },
  {
    age: 59,
    date: '10/15/2017',
    name: 'Beans',
    salary: '$18991.67',
    email: 'ediehn6@163.com',
    designation: 'Made in Rwanda'
  },
  {
    age: 30,
    date: '06/12/2018',
    status: 'resigned',
    salary: '$19252.12',
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
    designation: 'Made in Rwanda'
  },
  {
    age: 66,
    status: 'applied',
    date: '03/24/2018',
    salary: '$13076.28',
    name: 'Annie Martin',
    designation: 'Operator',
    email: 'sganderton2@tuttocitta.it'
  },
  {
    age: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    name: 'RIce',
    email: 'hnisius4@gnu.org',
    designation: 'Made in Rwanda'
  },
  {
    age: 61,
    date: '06/01/2017',
    salary: '$17803.80',
    name: 'Noodles',
    designation: 'Made in CHina',
    email: 'ghoneywood5@narod.ru'
  },
  {
    age: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Rice',
    designation: 'Made in Rwanda',
    email: 'dcrossman3@google.co.jp'
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  const [rows, setRows] = useState(initialRows)
  const [newProduct, setNewProduct] = useState({
    age: '',
    name: '',
    date: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const handleAddProduct = () => {
    setRows([...rows, { ...newProduct, age: Number(newProduct.age) }])
    setNewProduct({
      age: '',
      name: '',
      date: ''
    })
  }

  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <TextField
          label='ID'
          name='age'
          value={newProduct.age}
          onChange={handleInputChange}
          sx={{ mr: 2 }}
        />
        <TextField
          label='Product Name'
          name='name'
          value={newProduct.name}
          onChange={handleInputChange}
          sx={{ mr: 2 }}
        />
        <TextField
          label='Date'
          name='date'
          value={newProduct.date}
          onChange={handleInputChange}
          sx={{ mr: 2 }}
        />
        <Button variant='contained' onClick={handleAddProduct}>Add Product</Button>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Product Id</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{row.age}</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
