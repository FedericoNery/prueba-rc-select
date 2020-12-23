import { Option } from 'rc-select'
import React from 'react'
import PropTypes from 'prop-types'

const OptionInterface = (props) => {
    const { className } = props
    return <Option 
        className={className}
        {...props}
    />
}


OptionInterface.defaultProps = {
    className: ""
}

OptionInterface.propTypes = {
    className: PropTypes.string
}

export default OptionInterface