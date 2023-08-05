import { useNavigate } from "react-router-dom"
import { BasicButton } from "./BasicButton"

export const HomeQuiz = () => {

  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col justify-center items-center" >
      <h1
        className="font-black text-4xl md:text-5xl mb-2" >
        Quizzes
      </h1>
      <BasicButton children="Quiz" onClick={() => navigate("/quiz")} backgroundColor='bg-prymary' />

    </div>
  )
}
