import { TextField } from "@mui/material";

export default function SearchBar({ query, setQuery }) {
  return (
    <TextField
      label="Search APIs"
      variant="outlined"
      fullWidth
      margin="normal"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
