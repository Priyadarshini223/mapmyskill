import React from 'react'
import './sidebar.css'

import DashboardIcon from '@mui/icons-material/Dashboard';
import SegmentIcon from '@mui/icons-material/Segment';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import PinDropIcon from '@mui/icons-material/PinDrop';
const data = [
    { id: 1, icon: <DashboardIcon />, con: "Dashboard" },
    { id: 2, icon: <SegmentIcon />, con: "Segment" },
    { id: 3, icon: <RecentActorsIcon />, con: "Contacts" },
    { id: 4, icon: <EditNotificationsIcon />, con: "Notifications" },
    { id: 5, icon: <PinDropIcon />, con: "Location" }
]
const Sidebar = () => {
    return (
        <div id='sidebar' className='sidebar'>
            <h3>MyFirst Project</h3>
            {
                data.map((res) => (
                    <p key={res.id}>{res.icon} {res.con}</p>
                ))
            }

        </div>
    )
}

export default Sidebar
