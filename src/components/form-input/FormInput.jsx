import { FormInputLabel, Group, InputForm, } from './FormInput.styles'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <InputForm {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
        )}
        
    </Group>
  )
}

export default FormInput
