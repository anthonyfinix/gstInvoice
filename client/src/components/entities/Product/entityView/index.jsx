import React from 'react';
import Box from '@material-ui/core/Box';
import ProductHeader from './header';
import ProductTable from './table'
import { TextField } from '@material-ui/core';
function Product({ context, ...props }) {
    const contextData = React.useContext(context)
    const handleSearch = (e) => { contextData.searchItems(e.target.value) }
    const getTable = () => {
        if (!!contextData.items && contextData.items.length > 0) {
            return (<ProductTable items={contextData.items} columns={contextData.columns} deleteItem={contextData.deleteItem} />)
        }
    }
    return (
        <Box style={{height:"100%"}} display="flex" flexDirection="column">
            <Box px={2}>
                <ProductHeader title={contextData.title} toggleDialog={contextData.toggleDialog} context={contextData} />
                <TextField style={{ marginLeft: "auto" }} onChange={handleSearch} variant="outlined" size="small" label="search" />
            </Box>
            <Box style={{height:"100%",overflowY:"scroll"}}>
                {getTable()}
            </Box>
        </Box>
    )
}

export default React.memo(Product)