import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Box ,Typography,useTheme} from '@mui/material'
import FlexBetween from '../../components/FlexBetween'


const Navbar = () => {
    const {palette}=useTheme()
    const [selected, setSelected] =useState("dashboard")
  return (
    <FlexBetween mb='0.25rem ' p='0.5rem 0rem' color={palette.grey[300]}>
        <FlexBetween gap='0/75rem ' ></FlexBetween>
    </FlexBetween>

  )
}

export default Navbar