import React from "react";
import { Stack } from "@material-ui/lab";
import { Alert } from "@material-ui/lab";

const AlertBar = React.forwardRef(function Alert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CustomizedSnackbar({ type, text }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    // <Stack spacing={2} sx={{ width: "20%" }}>
    <Alert severity={type} open={open} autohideduration={100}>
      {text}
    </Alert>
    // </Stack>
  );
}

export { AlertBar, CustomizedSnackbar };
