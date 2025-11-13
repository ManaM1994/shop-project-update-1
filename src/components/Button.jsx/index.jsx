import { memo } from "react";

const Button = ({ lable, onClick }) => {
  console.log("button render");

  return (
    <div>
      <button
        className="border border-gray-700 rounded-sm p-3 bg-slate-800 text-white"
        onClick={onClick}
      >
        {lable}
      </button>
    </div>
  );
};

export default memo(Button);
