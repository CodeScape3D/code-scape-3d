import {
  svgProgramacion1,
  svgProgramacion2,
  svgProgramacion3,
  svgBubbleSort,
  svgQuickSort,
  svgShellSort,
  svgInsertionSort,
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
    curso: "Programacion1",
    titulo: "Bubble Sort",
    imagen: svgBubbleSort,
  },
  {
    id: 2,
    curso: "Programacion2",
    titulo: "Quick Sort",
    imagen: svgQuickSort,
  },
  {
    id: 3,
    curso: "Programacion3",
    titulo: "Shell Sort",
    imagen: svgShellSort,
  },
  {
    id: 4,
    curso: "Programacion2",
    titulo: "Insertion Sort",
    imagen: svgInsertionSort,
  },
];
