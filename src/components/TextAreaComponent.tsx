import { ChangeEvent } from 'react';

interface TextAreaComponentProps {
  label: string;
  required?: boolean;
  inputValue: string;
  placeholder?: string;
  errorMessage?: string;
  minRows: number;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({
  label,
  required = false,
  inputValue,
  placeholder = 'Enter text here',
  errorMessage,
  minRows = 3,
  handleInputChange,
}) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="mb-4 flex w-full flex-col space-y-2">
        <label htmlFor="textarea" className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <textarea
          required={required}
          id="textarea"
          placeholder={placeholder}
          value={inputValue}
          rows={minRows}
          onChange={handleInputChange}
          className={`w-full border px-4 py-2 ${
            errorMessage ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default TextAreaComponent;
