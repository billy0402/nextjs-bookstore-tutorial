import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import { FieldProps } from '..';

const InputField = ({ config, register, errors }: FieldProps) => {
  return (
    <FormControl isInvalid={!!errors?.[config.name]}>
      <FormLabel>{config.label}</FormLabel>
      <Input
        {...register(config.name, {
          required: config.required && `${config.label}為必填欄位`,
        })}
        type={config.type}
      />
      {errors.title && (
        <FormErrorMessage>
          {errors[config.name]?.message as string}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputField;
