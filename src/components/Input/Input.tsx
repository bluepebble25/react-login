/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import palette from '../../lib/styles/palette';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  icon?: IconDefinition;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ type, name, placeholder, icon, onChange }: InputProps) {
  return (
    <div css={inputBoxStyle}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        css={inputStyle}
        {...(type === 'password' && { autoComplete: 'on' })}
      />
      {icon && (
        <span css={iconStyle}>
          <FontAwesomeIcon icon={icon} color={palette.grey} />
        </span>
      )}
    </div>
  );
}

const inputBoxStyle = css`
  position: relative;
  margin-top: 15px;
  height: 40px;
`;

const inputStyle = css`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  font-size: 16px;

  &:focus {
    border: 2px solid ${palette.blue};
    outline: none;
  }
`;

const iconStyle = css`
  position: absolute;
  display: block;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

export default Input;
