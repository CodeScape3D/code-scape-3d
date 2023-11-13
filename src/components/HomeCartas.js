import {
  svgProgramacion1,
  svgProgramacion2,
  svgProgramacion3,
  svgBubbleSort,
  svgQuickSort,
  svgShellSort,
  svgInsertionSort,
  svgPilesHome,
  svgSelectionHome,
  svgHeapHome,
  SvgListaEnlazada,
} from "../assets/svg/SvgConstans";

export const courses = [
  {
    id: 1,
    imagen: svgProgramacion1,
    titulo: "Programación l",
    value: "Programacion1",
  },
  {
    id: 2,
    imagen: svgProgramacion2,
    titulo: "Programación ll",
    value: "Programacion2",
  },
  {
    id: 3,
    imagen: svgProgramacion3,
    titulo: "Programación lll",
    value: "Programacion3",
  },
];

export const topic = [
  {
    id: 1,
    curso: "Programacion2",
    titulo: "Bubble Sort",
    param: "bubble",
    imagen: svgBubbleSort,
  },
  {
    id: 2,
    curso: "Programacion2",
    titulo: "Quick Sort",
    param: "quick",
    imagen: svgQuickSort,
  },
  {
    id: 4,
    curso: "Programacion2",
    titulo: "Insertion Sort",
    param: "insertion",
    imagen: svgInsertionSort,
  },
  {
    id: 6,
    curso: "Programacion2",
    titulo: "Selection Sort",
    param: "selection",
    imagen: svgSelectionHome,
  },
  {
    id: 3,
    curso: "Programacion2",
    titulo: "Shell Sort",
    param: "shell",
    imagen: svgShellSort,
  },
  {
    id: 7,
    curso: "Programacion2",
    titulo: "Heap Sort",
    param: "heap",
    imagen: svgHeapHome,
  },
  {
    id: 5,
    curso: "Programacion2",
    titulo: "Pilas",
    param: "stack",
    imagen: svgPilesHome,
  },
  {
    id: 8,
    curso: "Programacion2",
    titulo: "Lista Enlazada",
    param: "linkedlist",
    imagen: SvgListaEnlazada,
  },
];
