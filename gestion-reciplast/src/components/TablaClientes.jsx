import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid, TextField, Button, Checkbox } from '@mui/material';

function createData(name, fecha, compras) {
    return {
        name,
        fecha,
        compras,
        history: [
            {
                id: 2345,
                total: 3587,
            },
            {
                id: 3452,
                total: 3453,
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">
                    <Checkbox />
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.fecha}</TableCell>
                <TableCell align="right">{row.compras}</TableCell>
                <TableCell align="center">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>

                        {/* Detalle de cada fila */}
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Ventas realizadas al cliente
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Id</TableCell>
                                        <TableCell align="center">Total ($)</TableCell>
                                        <TableCell align="center"> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.id}>
                                            <TableCell component="th" scope="row" align="center">
                                                {historyRow.id}
                                            </TableCell>
                                            <TableCell align="center">
                                                {historyRow.total}
                                            </TableCell>
                                            <TableCell align="center">
                                                <Button variant="outlined" size="medium">
                                                    Detalle
                                                </Button>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const rows = [
    createData('Jorge Gonzalez', "02/05/2023", 99),
    createData('Sixto Arrejin', "01/06/2023", 91),
    createData('Tobias Maciel Meister', "17/06/2023", 2),
    createData('Nilson', "19/06/2023", 99),
];

export default function TablaClientes() {
    return (
        <Grid>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell> </TableCell>
                            <TableCell><Typography variant="h6" color="initial">Nombre</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h6" color="initial">Fecha Registro</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h6" color="initial">Ventas</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6" color="initial">Ver ventas</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}