import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement } from "chart.js"
import { PercentageIndicator } from ".."

ChartJS.register(ArcElement)

const exampleData = {
    datasets: [
        {
            data: [7, 3],
            backgroundColor: ["#87BA7A", "#FF7575"],
        }
    ]
}

export const AnswersChart = ({data = exampleData, options = {}}) => {
    return (
        <div className="relative w-fit">
            <Pie
                data={data}
                options={options}
            >
            </Pie>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-16 bg-white rounded-full">

            </div>

            <PercentageIndicator percentage={"35"} position={"top-1/4"} />
            <PercentageIndicator percentage={"67"} position={"left-0 top-3/4"} textColor="text-success" />

        </div>
    )
}