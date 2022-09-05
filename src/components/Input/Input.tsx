import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface InputProps {
  placeholder?: string;
  icon?: IconDefinition;
}

function Input({ placeholder, icon }: InputProps) {
  return (
    <div>
      {icon && <FontAwesomeIcon icon={icon} />}
      <input placeholder={placeholder} />
    </div>
  );
}

export default Input;
