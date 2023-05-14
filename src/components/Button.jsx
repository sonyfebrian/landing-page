const Button = ({ children, ...rest }) => {
  return (
    <button className="rounded-full bg-cinnabar font-poppins text-white px-3 py-1 text-base">
      {children}
    </button>
  );
};

export default Button;
