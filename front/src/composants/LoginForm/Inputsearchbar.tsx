import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

type Props = {
  onQueryChange: (newQuery: string) => void;
};

const Inputsearchbar = ({ onQueryChange }: Props) => {
  const [query, setQuery] = useState("");

  const handleInputChange = () => {
    const newQuery = query;
    setQuery(newQuery);
    onQueryChange(newQuery);
  };

  return (
    <div className="flex InputSearchBar mx-2 justify-center">
      <input
        type="text"
        className="bg-slate-600 w-80 h-10 rounded my-1 mr-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleInputChange}>
        Click
      </Button>
    </div>
  );
};

export default Inputsearchbar;
