import Select from 'rc-select'
import React from 'react'
import PropTypes from 'prop-types'

const SelectInterface = (props) => {
    const { dropdownClassName, dropdownStyle, dropdownAlign, dropdownMenuStyle, placeholder, optionFilterProp, optionLabelProp, style } = props
    return <Select
        style={style}
        dropdownClassName={dropdownClassName}
        dropdownStyle={dropdownStyle}
        dropdownAlign={dropdownAlign}
        dropdownMenuStyle={dropdownMenuStyle}
        placeholder={placeholder}
        optionFilterProp={optionFilterProp}
        optionLabelProp={optionLabelProp}
        {...props}
    />
}

SelectInterface.defaultProps = {
    dropdownClassName: "",
    dropdownStyle: {},
    dropdownAlign: {},
    dropdownMenuStyle: {},
    placeholder: "",
    optionFilterProp: {},
    optionLabelProp: {},
    style: {}
}

SelectInterface.propTypes = {
    dropdownClassName: PropTypes.string,
    dropdownStyle: PropTypes.object,
    dropdownAlign: PropTypes.object,
    dropdownMenuStyle: PropTypes.object,
    placeholder: PropTypes.string,
    optionFilterProp: PropTypes.object,
    optionLabelProp: PropTypes.object,
    style: PropTypes.object,
}

export default SelectInterface