import { useContext, useState } from "react";
import { DepartmentContext } from "./context";
import { Box } from "@mui/system";
import Table from "./Table";
import { Button, Typography } from "@mui/material";
import Form from "./add";

const index = () => {
  const { departments } = useContext(DepartmentContext);
  const [openForm, setOpenForm] = useState(false);

  return (
    <Box>
      <Box
        mb={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ backgroundColor: "rgba(96, 130, 182, 0.6)", padding: "10px" }}
      >
        <Typography variant="h6" fontWeight="bold">
          Departments Management
        </Typography>
        <Button
          variant="contained"
          onClick={() => setOpenForm(true)}
          sx={{
            backgroundColor: "rgb(41, 93, 172)",
            "&:hover": {
              backgroundColor: "rgb(47, 74, 122)", // Slightly darker shade for hover
            },
          }}
        >
          Add Department
        </Button>
      </Box>

      <Table />

      {openForm && (
        <Form
          open={openForm}
          onClose={() => setOpenForm(false)}
          //   onSubmit={handleAdd}
          //   Mode="Create"
        />
      )}
    </Box>
  );
};

export default index;
