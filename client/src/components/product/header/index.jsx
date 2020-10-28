import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
function ProductHeader() {
    return (
        <Box pt={2} pb={1} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Products</Typography>
            <Button color="primary" variant="contained" size="small">ADD</Button>
        </Box>
    )
}

export default React.memo(ProductHeader)