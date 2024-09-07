import {
  Header,
  SortControls,
  SortCode,
  SortChart,
} from "../sorting/components";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { BasicButton } from "../../components";
import { StackChart, StackCode, StackControls } from "../stack";
import {
  LinkedlistChart,
  LinkedlistCode,
  LinkedlistControls,
} from "../linkedlist";
import { useTranslation } from "react-i18next";
import { useAnimationLogic } from "../../hooks";

export const AnimationView = () => {
  const { t } = useTranslation();
  const { animacion } = useParams();

  const {
    algorithm,
    sort,
    modalIsOpen,
    setIsOpen,
    generatedArray,
    currentQuestion,
  } = useAnimationLogic();

  const classNameChart =
    "flex-grow mb-4 w-full items-center justify-center " +
    (animacion === "stack" || animacion === "linkedlist" ? "flex" : "");
  return (
    <div className="flex flex-col items-center mt-3 w-full h-full flex-grow">
      <Header
        titulo={
          sort
            ? algorithm
            : animacion === "linkedlist"
            ? t("linkedlist")
            : animacion === "stack"
            ? t("stack")
            : animacion
        }
        quiz={animacion}
        descripcionQuiz={
          (sort
            ? algorithm
            : animacion === "linkedlist"
            ? t("linkedlist")
            : animacion === "stack"
            ? t("stack")
            : animacion) +
          " " +
          t("quiz")
        }
      />

      <div className={classNameChart}>
        {animacion === "stack" ? <StackChart /> : ""}
        {sort ? <SortChart /> : ""}
        {animacion === "linkedlist" && <LinkedlistChart />}
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 flex items-center">
          {animacion === "stack" ? <StackControls /> : ""}
          {sort ? <SortControls /> : ""}
          {animacion === "linkedlist" && <LinkedlistControls />}
        </div>

        <div className="md:w-1/2 flex items-center">
          {animacion === "stack" ? <StackCode /> : ""}
          {sort ? <SortCode /> : ""}
          {animacion === "linkedlist" && <LinkedlistCode />}
        </div>
      </div>

      <Dialog open={modalIsOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>{t("feedback")}</DialogTitle>

        <DialogContent>
          <DialogContentText>{currentQuestion.feedback}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <BasicButton onClick={() => setIsOpen(false)}>
            {t("close")}
          </BasicButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
