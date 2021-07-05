import React from 'react';
import Delete from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default ({ row, columns, handleDelete,openOptionsMenu }) => {
    return (
        <TableRow key={row._id}>
            {columns.map(column => {
                if (column === 'recipient') return <TableCell key={row[column].name} component="th" scope="row">{row[column].name}</TableCell>
                if (column === 'products') return <TableCell key={row[column].length} component="th" scope="row">{row[column].length}</TableCell>
                if (column === 'draft') return <TableCell key={row[column]} component="th" scope="row">{row[column] ? 'yes' : "no"}</TableCell>
                if (row[column]) return <TableCell key={row[column]} component="th" scope="row">{row[column]}</TableCell>
                return <TableCell key={column} component="th" scope="row"> - </TableCell>
            })}
            <TableCell align="right" component="th" scope="row">
                <IconButton size="small" onClick={() => handleDelete(row._id)}><Delete /></IconButton>
            </TableCell>
            <TableCell align="right" component="th" scope="row">
                <IconButton size="small" onClick={(e) => openOptionsMenu(e,row)}><MoreVertIcon /></IconButton>
            </TableCell>
        </TableRow>
    )
}