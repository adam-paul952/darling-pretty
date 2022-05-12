export interface ITailwindCSSFormInputProps {
  id: string;
  label: string;
  type?: string;
  placeHolder?: string;
  required: boolean;
  onChange?: any;
  value: string;
  disabled?: boolean;
}

const TailwindCSSFormInput = (props: ITailwindCSSFormInputProps) => {
  return (
    <div className="form-group mb-6">
      <label className="m-1">
        {props.label}
        {props.required && <span className="text-danger">*</span>}
      </label>
      <input
        type={props.type ? props.type : "text"}
        className="w-1/2 
          form-control
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
        id={props.id}
        placeholder={props.placeHolder}
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
      />
    </div>
  );
};

export default TailwindCSSFormInput;
