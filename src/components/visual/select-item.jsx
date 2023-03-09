import React from 'react'
import ReactSelect from 'react-select'

const VARIANTS = {
  primary: {
    control: {
      backgroundColor: '#374151',
      boxShadow: '#6366F1',
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
      backgroundColor: '#374151',
    },
  },
}

const singleSelectStyle = (variant = 'primary', name) => {
  const style = VARIANTS[variant]

  return {
    control: (provided, state) => ({
      ...provided,
      height: name === 'torso' ? '225px' : '100px',
      width: '100px',
      backgroundColor: style.control.backgroundColor,
      boxShadow: state.isFocused ? `0 0 0 3px ${style.control.boxShadow}, 0 0 #0000` : '',
      transition: 'box-shadow 0.1s ease-in-out',
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
      color: style.singleValue.color,
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? style.option.backgroundColorFocused
        : style.option.backgroundColor,
      color: style.option.color,
    }),

    menu: (provided) => ({
      ...provided,
      height: '100px',
      width: '100px',
      backgroundColor: style.menu.backgroundColor,
    }),
  }
}

export function Select({ variant, ...props }) {
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