import { createSlice } from "@reduxjs/toolkit";
import Nodo from "../../animations/stack/algorithms/Nodo";

const initialState = {
  head: new Nodo(
    4,
    new Nodo(
      5,
      new Nodo(6, new Nodo(7, new Nodo(8, new Nodo(9, new Nodo(10)))))
    )
  ),
  elementos: [],
  stepHistory: [],
  timeStep: 1,

  funAction: null,

  history: -1,
  firstSet: [],
  secondSet: [],
  timeId: [],
  isHead: 4,
  isTail: 10,

  srcHead: null,
  playing: false,
};

export const linkedListSlice = createSlice({
  name: "linkedList",
  initialState,
  reducers: {},
});

export const {} = linkedListSlice.actions;
