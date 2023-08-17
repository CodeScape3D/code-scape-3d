
import PropTypes from "prop-types"

export const AnswersGrid = ({children}) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 md:w-11/12 lg:w-3/4 gap-x-10 gap-y-5 h-auto">{children}</div>
  )
}

AnswersGrid.propTypes = { 
    children: PropTypes.node.isRequired
}
