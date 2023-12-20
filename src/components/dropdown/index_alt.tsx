import React from "react";

function useOutsideAlerter(ref: any, setX: any): void {
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setX(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setX]);
}

const DropdownAlt = (props: {
  button: JSX.Element;
  children: JSX.Element;
  classNames: string;
  animation?: string;
  open: boolean;
  setOpen: any;
}) => {
  const { button, children, classNames, animation , open, setOpen} = props;
  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef, setOpen);

  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpen(!open)}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation
            ? animation
            : "origin-top-right transition-all duration-300 ease-in-out"
        } ${open ? "scale-100" : "scale-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownAlt;
