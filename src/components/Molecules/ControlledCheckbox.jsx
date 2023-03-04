import React,{useState} from "react";
import { Checkbox } from "@mui/material";
const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
      <Checkbox
        sx={{
          "&": { padding: 0 },
          "& .MuiSvgIcon-root": { fontSize: 28 },
  
          "&:hover": { bgcolor: "transparent", padding: 0 },
          "&.Mui-checked": {
            color: "#ffa800",
          },
        }}
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    );
  };

  export default ControlledCheckbox;