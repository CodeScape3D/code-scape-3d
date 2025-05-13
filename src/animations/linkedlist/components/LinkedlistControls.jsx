import {
  Button,
  TextField,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {
  svgBack,
  svgForward,
  svgPlay,
  svgRepeat,
} from "../../../assets/svg/SvgConstans";
import { BasicButton } from "../../../components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  playLinkedList,
  goBackwardLinkedList,
  goForwardLinkedList,
  repeatLinkedList,
} from "../../../store/linkedlist/linkedListThunks";

import { createRecordStack } from "../../../store/linkedlist/linkedListSlice";

export const LinkedlistControls = () => {
  const { t } = useTranslation();
  const [insertModalIsOpen, setInsertIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteIsOpen] = useState(false);
  const [insertPosition, setInsertPosition] = useState(null);
  const [deletePosition, setDeletePosition] = useState(null);
  const [elementValue, setElementValue] = useState(0);

  const dispatch = useDispatch();

  const handleInsertClick = () => {
    setInsertIsOpen(true);
  };

  const handleDeleteClick = () => {
    setDeleteIsOpen(true);
  };

  const handleConfirmInsert = (position) => {
    console.log(`Insert ${elementValue} at the ${position}`);
    dispatch(createRecordStack({ action: `insert${position}`, value: elementValue }));
    dispatch(playLinkedList());
    setInsertPosition(position);
    setInsertIsOpen(false);
  };

  const handleConfirmDelete = (position) => {
    console.log(`Delete ${position === "element" ? elementValue : position}`);
    dispatch(createRecordStack({ action: `delete${position}`, value: elementValue }));
    dispatch(playLinkedList());
    setDeletePosition(position);
    setDeleteIsOpen(false);
  };

  return (
    <div className="w-full md:w-80 mx-auto md:ml-4 mb-4 flex flex-col md:justify-between">
      <div className="flex justify-center space-x-4 mb-3">
        <BasicButton onClick={() => dispatch(goBackwardLinkedList())}>
          <span>{svgBack}</span>
        </BasicButton>

        <BasicButton onClick={() => dispatch(playLinkedList())}>
          <span>{svgPlay}</span>
        </BasicButton>

        <BasicButton onClick={() => dispatch(goForwardLinkedList())}>
          <span>{svgForward}</span>
        </BasicButton>

        <BasicButton onClick={() => dispatch(repeatLinkedList())}>
          <span>{svgRepeat}</span>
        </BasicButton>
      </div>
      <div className="flex justify-center space-x-4 items-center">
        <TextField
          label={t("element")}
          variant="outlined"
          type="number"
          value={elementValue}
          onChange={(e) => setElementValue(e.target.value)}
          style={{ width: "90px" }}
        />
        <Button
          variant="contained"
          onClick={handleInsertClick}
          sx={{
            height: "48px",
            backgroundColor: "gray.main",
          }}
        >
          {t("insert")}
        </Button>
        <Button
          variant="contained"
          onClick={handleDeleteClick}
          sx={{
            height: "48px",
            backgroundColor: "gray.main",
          }}
        >
          {t("delete")}
        </Button>
      </div>

      {/* Diálogo para seleccionar posición de inserción */}
      <MuiDialog
        open={insertModalIsOpen}
        onClose={() => setInsertIsOpen(false)}
      >
        <DialogTitle>{t("choose_position")}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t("insert_at_head_or_tail")}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmInsert("head")} color="primary">
            {t("head")}
          </Button>
          <Button onClick={() => handleConfirmInsert("tail")} color="primary">
            {t("tail")}
          </Button>
        </DialogActions>
      </MuiDialog>

      {/* Diálogo para seleccionar opción de eliminación */}
      <MuiDialog
        open={deleteModalIsOpen}
        onClose={() => setDeleteIsOpen(false)}
      >
        <DialogTitle>{t("choose_delete_position")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("delete_head_tail_or_element")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmDelete("head")} color="primary">
            {t("head")}
          </Button>
          <Button onClick={() => handleConfirmDelete("tail")} color="primary">
            {t("tail")}
          </Button>
          <Button
            onClick={() => handleConfirmDelete("element")}
            color="primary"
          >
            {t("element_specific")}
          </Button>
        </DialogActions>
      </MuiDialog>
    </div>
  );
};
