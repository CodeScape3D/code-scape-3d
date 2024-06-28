import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { SortControls } from "../../../animations"
import { sortsSlice } from "../../../store"

const testStore = configureStore({
  reducer: {
    sorts: sortsSlice.reducer,
  }
});

describe("Pruebas en el componente de controles de las animaciones", () => {
  test("Debe renderizar el componente", () => {
    render(
      <Provider store={testStore}>
        <SortControls />
      </Provider>
    );
    expect(screen.getByText("Speed Selector")).toBeTruthy();
    expect(screen.getByText("Array Length")).toBeTruthy();
    expect(screen.getByTestId("goBackward")).toBeTruthy();
    expect(screen.getByTestId("playPause")).toBeTruthy();
    expect(screen.getByTestId("goForward")).toBeTruthy();
    expect(screen.getByTestId("repeat")).toBeTruthy();
  })
});