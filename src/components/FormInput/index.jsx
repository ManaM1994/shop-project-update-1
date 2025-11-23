const FormInput = ({ lable, type = "text", errors, ...field }) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={lable}>{lable}:</label>
      <input
        {...field}
        type={type}
        className="w-[300px] rounded-md border border-gray-300 p-2 bg-gray-300"
      />
      {errors && <span>{errors}</span>}
    </div>
  );
};

export default FormInput;
