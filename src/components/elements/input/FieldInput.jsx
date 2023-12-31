import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PropTypes from 'prop-types';

export default function FieldInput({
  label,
  name,
  type,
  placeholder,
  register,
  min,
  required,
  autoComplete,
  helperTextTop,
  helperTextBottom,
  ...props
}) {
  return (
    <>
      <Label htmlFor={name} className="capitalize">
        {label ? label : name}
      </Label>

      {helperTextTop && (
        <div className="text-xs text-gray-500 font-medium">{helperTextTop}</div>
      )}

      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        min={min}
        required={required}
        autoComplete={autoComplete}
        aria-label={name}
        className={type == 'file' ? 'cursor-pointer' : null}
        {...props}
      />

      {helperTextBottom && (
        <div className="text-xs text-gray-500 font-medium">
          {helperTextBottom}
        </div>
      )}
    </>
  );
}

FieldInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  min: PropTypes.number,
  autoComplete: PropTypes.string,
  helperTextTop: PropTypes.string,
  helperTextBottom: PropTypes.string,
  required: PropTypes.bool,
};
