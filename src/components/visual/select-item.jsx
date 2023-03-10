import React from 'react'
import ReactSelect from 'react-select'

const VARIANTS = {
  primary: {
    control: {
      backgroundColor: '#000000',
    },

    placeholder: {
      color: '#9CA3AF',
    },

    input: {
      color: '#E5E7EB',
    },

    singleValue: {
      color: '#E5E7EB',
    },

    option: {
      backgroundColor: 'transparent',
      backgroundColorFocused: '#4B5563',
      color: '#E5E7EB',
    },

    menu: {
      backgroundColor: '#000000',
    },
  },
}

const singleSelectStyle = (variant = 'primary', name) => {
  const style = VARIANTS[variant]

  return {
    control: (provided, state) => ({
      ...provided,
      height: '100px',
      width: '100px',
      backgroundColor: style.control.backgroundColor,
      opacity: '0.85',
      transition: 'box-shadow 0.1s ease-in-out',
      border: '1px solid',
      borderImageSlice: 1,
      borderImageSource: 'repeating-linear-gradient(to top, wheat, #000000, #000000, wheat)',
    }),

    placeholder: (provided) => ({
      ...provided,
      color: style.placeholder.color,
    }),

    input: (provided) => ({
      ...provided,
      color: style.input.color,
    }),

    singleValue: (provided) => ({
      ...provided,
      whiteSpace: 'break-spaces',
      color: style.singleValue.color,
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? style.option.backgroundColorFocused
        : style.option.backgroundColor,
      color: style.option.color,
      border: '1px solid',
      boxShadow: '0 0 10px wheat',
      borderImageSlice: 1,
      borderImageSource: 'repeating-linear-gradient(to right, wheat, #000000, #000000, wheat)',
      margin: '2px 0 2px 0',
    }),

    menu: (provided) => ({
      ...provided,
      top: name === 'legs' ? '-150%' : 0,
      width: '100px',
      boxShadow: '0 0 10px #FF0000',
      backgroundColor: style.menu.backgroundColor,
    }),
  }
}

export function SelectItem({ variant, ...props }) {
  return (
    <ReactSelect
      {...props}
      styles={singleSelectStyle(variant, props.name)}
      isMulti={false}
      isSearchable={false}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
    />
  )
}