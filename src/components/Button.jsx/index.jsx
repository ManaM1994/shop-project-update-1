import { memo } from "react";

const Button = ({ lable, onClick }) => {
  return (
    <div>
      <button className="border border-gray-700 rounded-md p-3 bg-slate-800 text-white">
        {lable}
      </button>
    </div>
  );
};

export default memo(Button);
