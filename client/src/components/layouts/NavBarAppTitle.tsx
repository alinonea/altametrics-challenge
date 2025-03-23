import { Stack, Typography } from "@mui/material";

export default function NavBarAppTitle() {
    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h6">Invoices App</Typography>
      </Stack>
    );
}