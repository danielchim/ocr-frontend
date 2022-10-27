import {Box, Typography} from "@mui/material";

const HandDrawZone = () => {
    return(
        <div>
            <Typography>漢字識別</Typography>
            <Box
                sx={{
                    width: '100%',
                    height: 300,
                    backgroundColor: 'primary.dark',
                }}
            />
        </div>
    )
}

export default HandDrawZone;