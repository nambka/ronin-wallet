const Input = {
  variants: {
    outline: {
      field: {
        border: '1px',
        borderStyle: 'solid',
        borderColor: '#bcd',
        _focus: {
          boxShadow: 'none',
          borderColor: '#1c94f4', //darker blue: #1273ea
          outline: 'none',
        },
        _invalid: {
          boxShadow: 'none',  
          borderColor: '#fc8181',
          outline: 'none',
        },
      },
    },
    filled: {
      field: {
        border: '1px',
        borderStyle: 'solid',
        borderColor: '#bcd',
        cursor: 'pointer',
      },
    },
  }
}

export default Input
