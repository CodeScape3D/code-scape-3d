import { Button } from '@mui/material'
import PropTypes from 'prop-types'

export const BasicButton = ({ children, onClick = () => { }, backgroundColor = "gray.main"}) => {
    return (
        <Button
            onClick={onClick}
            variant="contained"
            sx={{
                borderRadius: "10px",
                backgroundColor: backgroundColor ,
                ":hover": {
                    backgroundColor: backgroundColor,
                },
                textTransform: "none",
                fontWeight: "bold",
            }} className={`btn flex items-center justify-start gap-3`}
        >
            {children}
        </Button>
    )
}

BasicButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
}

