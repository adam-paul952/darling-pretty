interface ITailwindCSSButtonInputProps {
  buttonTitle: string;
  onClick: any;
  disabled?: boolean;
  children?: React.ReactNode;
}

const TailwindCSSButton = (props: ITailwindCSSButtonInputProps) => {
  return (
    <button
      className="max-w-fit
                  px-6
                  py-2.5
                  my-1
                  bg-gray-300
                  text-black
                  font-medium
                  text-lg
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-gray-500 hover:shadow-lg
                  focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-gray-500 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.buttonTitle}
      {props.children}
    </button>
  );
};

export default TailwindCSSButton;
