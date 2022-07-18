import { IInputProps, Input as NativeBaseInput } from "native-base";

export default function Input({...rest}: IInputProps){
  return (
    <NativeBaseInput 
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      font-size="md"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700"
      }}
      {...rest}
    />
  )
}