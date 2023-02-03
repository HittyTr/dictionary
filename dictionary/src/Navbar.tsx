import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import React from "react"
import Switch from '@mui/material/Switch';

export default function Navbar(){
  return (
    <div className='navbar'>
      <AutoStoriesIcon/>
      <div className='navbar__details'>
        <select name='font' value="font">
          <option value="serif">Serif</option>
          <option value="Sans serif">Sans serif</option>
        </select>
        <div>
        <Switch />
        <DarkModeOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}