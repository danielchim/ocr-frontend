import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import {
    AppBar,
    Box, Button,
    Container, Divider, Drawer,
    IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton,
    Toolbar, Tooltip,
    Typography
} from '@mui/material'
import {Link, useHref} from "react-router-dom";
import { useCallback, useState } from 'react'



export const Layout = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false)


    const handleCloseDrawer = () => setOpenDrawer(false)

    return (
        <>
            <AppBar position='sticky' color='primary'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open-drawer'
                        onClick={() => setOpenDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        href={'/'}
                        style={{ textDecoration: 'none' }}
                        component='a'
                        color={'#FFFFFF'}
                        variant='h6'
                        sx={{
                            pl: 1,
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}>
                        漢字識別系統
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                    </Box>
                    <Link to={'/settings'} >
                        <Tooltip title='Settings'>
                            <IconButton
                                style={{color: '#FFFFFF'}}
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='open-settings'
                            >
                                <SettingsIcon/>
                            </IconButton>
                        </Tooltip>
                    </Link>

                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 1 }} maxWidth={props.maxWidth} component='main'>
                {props.children}
            </Container>
            <Box
                component='footer'
                sx={{
                    textAlign: 'center'
                }}>
                <Typography margin='50px' variant='caption' align='center'>
                    @2022 {' '} HSUHK.
                </Typography>
            </Box>
            <Drawer
                anchor='left'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box
                    sx={{
                        width: 256,
                        a: {
                            width: '100%'
                        }
                    }}
                    role='presentation'
                >
                    <Toolbar>
                        <Typography variant='h6'>
                            漢字識別系統
                        </Typography>
                    </Toolbar>
                    <Divider/>
                    <List>
                        <ListItem disablePadding>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <ListItemButton onClick={handleCloseDrawer} aria-label='navigate-to-main menu' >
                                    <ListItemIcon>
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText>Home</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem disablePadding>
                            <Link to={'/settings'} style={{ textDecoration: 'none' }}>
                                <ListItemButton onClick={handleCloseDrawer} aria-label='navigate-to-settings'>
                                    <ListItemIcon>
                                        <SettingsIcon/>
                                    </ListItemIcon>
                                    <ListItemText>Settings</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}
