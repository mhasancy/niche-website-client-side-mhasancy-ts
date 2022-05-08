//imported file
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import * as React from "react";
import useAuth from "../../../hooks/useAuth";

//manage products component
const ManageProducts = () => {
  const { dataContext } = useAuth();
  //destructuring
  const { productsData, deleteProduct } = dataContext;
  const rows = productsData;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box>
      <Typography component="h1" variant="h4">
        Manage All Products
      </Typography>
      <br />
      <Paper
        className="container"
        sx={{ maxWidth: "85vw", overflow: "hidden" }}
      >
        <TableContainer sx={{ maxHeight: 440, overflowX: "auto" }}>
          <Table
            sx={{ overflowX: "auto" }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Titles</TableCell>
                <TableCell>Details</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({ _id, title, intro, price }) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={_id}>
                      <TableCell>{title}</TableCell>
                      <TableCell align="left">{intro}</TableCell>
                      <TableCell align="right">{price}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Delete" arrow>
                          <IconButton onClick={() => deleteProduct(_id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
export default ManageProducts;
