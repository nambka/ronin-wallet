const Input = {
  variants: {
    outline: {
      field: {
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
  },
}

export default Input
