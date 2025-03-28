import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  TextField,
  InputAdornment,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Popover, // <-- Added for the filter popover
  Switch, // <-- Using Switch for toggling columns
  FormControlLabel, // <-- To wrap each switch with a label
  Button,
  Box,
  Divider,
} from "@mui/material";
import {
  FiEdit,
  FiEye,
  FiGrid,
  FiSettings,
  FiSliders,
  FiTrash,
} from "react-icons/fi";
import { FiSearch, FiFilter } from "react-icons/fi";
import PropTypes from "prop-types";

function DynamicTable({
  columns,
  data,
  showActions = true,
  showPagination = true,
  showSearch = true,
  onViewDetails,
  onEdit,
  onDelete,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  // ---------------------------------------------------
  // 1. Track the list of columns that are currently visible
  // ---------------------------------------------------
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((col) => col.field) // by default, all columns are visible
  );

  // ---------------------------------------------------
  // 2. State and handlers for the Popover (filter menu)
  // ---------------------------------------------------
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleOpenFilter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  const openFilterPopover = Boolean(anchorEl);
  const popoverId = openFilterPopover ? "column-filter-popover" : undefined;

  const handleToggleColumn = (field) => {
    if (visibleColumns.includes(field)) {
      // If the column is currently visible, remove it
      setVisibleColumns(visibleColumns.filter((col) => col !== field));
    } else {
      // If the column is hidden, add it
      setVisibleColumns([...visibleColumns, field]);
    }
  };

  const handleHideAll = () => {
    setVisibleColumns([]); // empty means no columns visible
  };

  const handleShowAll = () => {
    setVisibleColumns(columns.map((col) => col.field)); // reset to all columns
  };

  return (
    <>
      {showSearch && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "4px",
          }}
        >
          <Box>
            <TextField
              label="search here"
              variant="outlined"
              size="small"
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FiSearch color="gray" />
                  </InputAdornment>
                ),
              }}
              sx={{
                maxWidth: 300,
                mb: 1.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "2px", // This applies border-radius correctly
                  boxShadow: 3, // Adds a slight shadow
                },
              }}
            />
          </Box>

          <Box>
            <IconButton aria-describedby={popoverId} onClick={handleOpenFilter}>
              <FiFilter />
            </IconButton>
            <IconButton>
              <FiGrid />
            </IconButton>
            <IconButton>
              <FiSliders />
            </IconButton>
            <IconButton>
              <FiSettings />
            </IconButton>

            <Popover
              id={popoverId}
              open={openFilterPopover}
              anchorEl={anchorEl}
              onClose={handleCloseFilter}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "rgb(221, 234, 255)",
                },
              }}
            >
              {/* You can style this div as needed for your design */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px",
                  minWidth: "200px",
                }}
              >
                {/* Hide All / Show All buttons */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "bold",
                  }}
                >
                  <Button
                    style={{
                      fontWeight: "bold",
                    }}
                    size="small"
                    onClick={handleHideAll}
                  >
                    Hide All
                  </Button>
                  <Button
                    style={{
                      fontWeight: "bold",
                    }}
                    size="small"
                    onClick={handleShowAll}
                  >
                    Show All
                  </Button>
                </div>
                <Divider sx={{ my: 1 }} />

                {/* List of columns with Switches */}
                {columns.map((col) => (
                  <FormControlLabel
                    key={col.field}
                    control={
                      <Switch
                        checked={visibleColumns.includes(col.field)}
                        onChange={() => handleToggleColumn(col.field)}
                        color="primary"
                      />
                    }
                    label={col.headerName}
                  />
                ))}
              </div>
            </Popover>
          </Box>
        </Box>
      )}

      <TableContainer
        component={Paper}
        elevation={2}
        sx={{
          overflow: "hidden",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {columns
                .filter((col) => visibleColumns.includes(col.field))
                .map((col) => (
                  <TableCell
                    key={col.field}
                    sx={{
                      bgcolor: "rgba(96, 130, 182, 0.6)",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    {col.headerName}
                  </TableCell>
                ))}
              {showActions && (
                <TableCell
                  sx={{
                    width: "120px",
                    pl: 6,
                    bgcolor: "rgba(96, 130, 182, 0.6)",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow
                  key={row.id || rowIndex}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(96, 130, 182, 0.4)",
                      transition: "background-color 0.2s ease-in-out",
                    },
                  }}
                >
                  {columns
                    .filter((col) => visibleColumns.includes(col.field))
                    .map((col) => (
                      <TableCell align="start" key={col.field}>
                        {row[col.field]}
                      </TableCell>
                    ))}

                  {showActions && (
                    <TableCell
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        gap: "4px",
                        "& .MuiIconButton-root": {
                          fontSize: "20px",
                          padding: "4px",
                          marginInline: "6px",
                        },
                      }}
                    >
                      <Tooltip title="View Details">
                        <IconButton
                          onClick={() => onViewDetails(row.id)}
                          color="primary"
                        >
                          <FiEye />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Edit">
                        <IconButton
                          onClick={() => onEdit(row.id)}
                          color="primary"
                        >
                          <FiEdit />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() => onDelete(row.id)}
                          color="error"
                        >
                          <FiTrash />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        {showPagination && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderTop: "1px solid #ddd",
              fontWeight: "bold",
              "& .MuiTablePagination-root": {
                fontWeight: "bold",
                fontSize: "16px",
              },
              "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
                {
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#333",
                },
              "& .MuiSelect-select, & .MuiTablePagination-actions": {
                fontWeight: "bold",
              },
            }}
          />
        )}
      </TableContainer>
    </>
  );
}

DynamicTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DynamicTable;
