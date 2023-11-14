import { Button, TextField } from "@mui/material";
import { svgBack, svgForward, svgPlay, svgRepeat } from "../../../assets/svg/SvgConstans";
import { BasicButton } from "../../../components";

export const LinkedlistControls = () => {
  return (
    <div className='w-full md:w-80 mx-auto md:ml-4 mb-4 flex flex-col md:justify-between'>
      <div className="flex justify-center space-x-4 mb-3">
        <BasicButton onClick={(e) => console.log("back")}>
          <span>{svgBack}</span>
        </BasicButton>

        <BasicButton onClick={(e) => console.log("play")}>
          <span> {svgPlay}</span>
        </BasicButton>

        <BasicButton onClick={(e) => console.log("forward")}>
          <span>{svgForward}</span>
        </BasicButton>

        <BasicButton onClick={(e) => console.log("repeat")}>
          <span>{svgRepeat}</span>
        </BasicButton>

      </div>
      <div className="flex justify-center space-x-4 items-center">
        <TextField
          label="Int"
          variant="outlined"
          type="number"
          value={0}
          onChange={(e) => console.log("onchange")}
          style={{ width: "90px" }}
        />
        <Button
          variant="contained"
          onClick={(e) => console.log("onclick")}
          sx={{
            height: "48px",
            backgroundColor: "gray.main",
          }}
        >
          Insert
        </Button>
        <Button
          variant="contained"
          onClick={(e) => console.log("onclick")}
          sx={{
            height: "48px",
            backgroundColor: "gray.main",
          }}>
          Remove
        </Button>
      </div>
    </div>
  );
}