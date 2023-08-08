
import PropTypes from "prop-types"

export const AnswersGrid = ({children}) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-3/4 gap-x-10 gap-y-5">{children}</div>
  )
}

AnswersGrid.propTypes = { 
    children: PropTypes.node.isRequired
}
