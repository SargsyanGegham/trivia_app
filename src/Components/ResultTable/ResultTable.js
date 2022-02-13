import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function ResultTable({ rows }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Win count</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Category}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="left">{row.winCount}</TableCell>
              <TableCell align="left">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
