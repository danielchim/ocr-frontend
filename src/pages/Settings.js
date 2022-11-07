import BugReportIcon from '@mui/icons-material/BugReport'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import LaunchIcon from '@mui/icons-material/Launch'
import {
    Button, Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControlLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Switch, Typography
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import { Layout } from '../Layout'
import {Link} from "react-router-dom";



const Settings = function Settings (props) {
    const [open, setOpen] = useState(false)
    const [isConfirmed, setIsConfirmed] = useState(false)
    const handleOpen = () => {
        setOpen(true)
        setIsConfirmed(false)
    }
    const handleClose = () => {
        setOpen(false)
        setIsConfirmed(false)
    }

    const handleChecked = () => {
        if (isConfirmed) {
            setIsConfirmed(false)
        } else {
            setIsConfirmed(true)
        }
    }


    const [openInvite, setOpenInvite] = useState(false)

    const userAdvances = useMemo(() => {
        const advances = []
        advances.push(
            (
                <ListItemButton
                    disabled={!props.canInvite}
                    key='invite-user' onClick={() => setOpenInvite(true)}
                >
                    <ListItemIcon>
                        <LaunchIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        You are on the wait list to invite new people
                    </ListItemText>
                </ListItemButton>
            )
        )
        return advances
    }, [props.canInvite])
    return (
        <>
            <Layout maxWidth='xs'>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                >
                    <ListSubheader>
                        Invites
                    </ListSubheader>
                    {userAdvances}
                    <ListSubheader>
                        User settings
                    </ListSubheader>
                    <ListItemButton onClick={() => console.log('hi')}>
                        <ListItemIcon>
                            <LaunchIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Password and authentication'/>
                    </ListItemButton>
                    <ListSubheader>
                        Sheet Features
                    </ListSubheader>
                    <Link to={'/'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LaunchIcon/>
                            </ListItemIcon>
                                <ListItemText primary='系統設定'/>
                        </ListItemButton>
                    </Link>
                    <ListItem>
                        <ListItemText
                            id='switch-pydatafront-from-local'
                            primary='Load local data'
                        />
                        <Switch
                            edge='end'
                            size='small'
                            checked={true}
                            onChange={event => {
                                console.log('hi')
                            }}
                            inputProps={{
                                'aria-labelledby': 'switch-list-label-pydatafront-from-local'
                            }}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LaunchIcon/>
                        </ListItemIcon>
                        <ListItemText
                            id='switch-dynamic-apply-function'
                            primary='Dynamic Apply Data (unstable)'
                        />
                        <Switch
                            edge='end'
                            size='small'
                            checked={false}
                            onChange={event => {
                                console.log('hi')
                            }}
                            inputProps={{
                                'aria-labelledby': 'switch-list-label-dynamic-apply-function'
                            }}
                        />
                    </ListItem>
                    <ListSubheader>Settings</ListSubheader>
                    <ListItem>
                        <ListItemIcon>
                            <BugReportIcon/>
                        </ListItemIcon>
                        <ListItemText
                            id='switch-debug'
                            primary='Debug Mode'
                        />
                        <Switch
                            edge='end'
                            size='small'
                            checked={true}
                            onChange={event => {
                                console.log('hi')
                            }}
                            inputProps={{
                                'aria-labelledby': 'switch-list-label-debug'
                            }}
                        />
                    </ListItem>
                    <ListItemButton onClick={handleOpen}>
                        <ListItemIcon>
                            <CleaningServicesIcon/>
                        </ListItemIcon>
                        <ListItemText id='button-clear-data' primary='Clear All Data'/>
                    </ListItemButton>
                </List>
            </Layout>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>
                    {'Clear all your local data?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        <Typography>We will erase all data in your browser, including your <strong>existing data</strong>.</Typography>
                        <Typography fontWeight={'bold'}>This is an irreversible action!!!</Typography>
                    </DialogContentText>
                    <br/>
                    <FormControlLabel control={<Checkbox onChange={handleChecked}/>} label='I understand the risk of clearing all the data.' />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={() => console.log('hi')} variant='contained' disabled={!isConfirmed}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Settings
