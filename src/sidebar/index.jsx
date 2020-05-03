import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    BusinessIcon,
    ReceiptIcon,
    StoreIcon,
    Drawer
} from '../utils/mui';
import { Link } from 'react-router-dom';
import './sidebar.css';

function sidebar(props) {
    if (props.windowState === ('sm' || 'md')) {
        return (
            <Drawer open={props.toggleDrawerState} onClose={props.toggleDrawer}>
                <List component="nav" aria-label="main mailbox folders" style={{ width: 300 }}>
                    <Link onClick={props.toggleDrawer} to="/">
                        <ListItem button>
                            <ListItemText primary="Clients" />
                        </ListItem>
                    </Link>
                    <Link onClick={props.toggleDrawer} to="/invoices">
                        <ListItem button>
                            <ListItemText primary="Invoice" />
                        </ListItem>
                    </Link>
                    <Link onClick={props.toggleDrawer} to="/products">
                        <ListItem button>
                            <ListItemText primary="Products" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        )
    } else {
        return (
            <Box boxShadow={3} className={"sidebar " + (props.toggleDrawerState ? "sidebar-opened" : "sidebar-closed")}>
                <List component="nav">
                    <Link to="/">
                        <ListItem button>
                            <ListItemIcon>
                                <BusinessIcon />
                            </ListItemIcon>
                            <ListItemText primary="Clients" />
                        </ListItem>
                    </Link>
                    <Link to="/invoices">
                        <ListItem button>
                            <ListItemIcon>
                                <ReceiptIcon />
                            </ListItemIcon>
                            <ListItemText primary="Invoice" />
                        </ListItem>
                    </Link>
                    <Link to="/products">
                        <ListItem button>
                            <ListItemIcon>
                                <StoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItem>
                    </Link>
                </List>
            </Box>
        )
    }
}

export default function Sidebar(props) {
    return (
        <React.Fragment>
            {sidebar(props)}
        </React.Fragment>
    )
}