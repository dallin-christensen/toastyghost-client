import { TextField, TextFieldProps } from "@mui/material"

function TextInput(props: TextFieldProps) {
  return (
    <TextField
      variant="outlined"
      size="medium"
      fullWidth
      {...props}
    />
  )
}

export default TextInput