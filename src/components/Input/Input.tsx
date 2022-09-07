import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  icon?: IconDefinition;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ type, name, placeholder, icon, onChange }: InputProps) {
  return (
    <div>
      {icon && <FontAwesomeIcon icon={icon} />}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
