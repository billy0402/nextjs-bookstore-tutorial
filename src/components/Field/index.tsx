import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import InputField from './Input';
import SelectField from './Select';
import TextareaField from './Textarea';

export type FieldConfig = {
  /** 欄位名稱 */
  name: string;
  /** 欄位類型 */
  type: string;
  /** 顯示名稱 */
  label: string;
  /** 是否必填 */
  required: boolean;
  /** 選項 (type: select) */
  options?: { value: number; label: string }[];
};

export type FieldProps = {
  config: FieldConfig;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const Field = ({ config, register, errors }: FieldProps) => {
  switch (config.type) {
    case 'textarea':
      return (
        <TextareaField config={config} register={register} errors={errors} />
      );
    case 'select':
      return (
        <SelectField config={config} register={register} errors={errors} />
      );
    default:
      return <InputField config={config} register={register} errors={errors} />;
  }
};

export default Field;
