import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actions } from "../../redux/slices";
import { useState } from "react";
import { memo } from "react";
import Button from "../../components/Button.jsx";
import { useCallback } from "react";

// export const Counter = () => {

//   const counter = useSelector((state) => state.counter.count);
//   console.log("counter", counter);

//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h1>counter</h1>
//       <h2>Count value:{counter} </h2>
//       <div className="flex gap-2">
//         <button
//           className="border border-gray-700 rounded-sm p-3"
//           onClick={() => {
//             dispatch(actions.increaseReducer());
//           }}
//         >
//           Increase
//         </button>
//         <button
//           className="border border-gray-700 rounded-sm p-3"
//           onClick={() => {
//             dispatch(actions.decreaseReducer());
//           }}
//         >
//           decrease
//         </button>
//         <button
//           className="border border-gray-700 rounded-sm p-3"
//           onClick={() => {
//             dispatch(actions.resetReducer());
//           }}
//         >
//           reset
//         </button>
//         <button
//           className="border border-gray-700 rounded-sm p-3"
//           onClick={() => {
//             dispatch(actions.randomIncreaseReducer(5));
//           }}
//         >
//           increase random
//         </button>
//       </div>
//     </div>
//   );
// };

export const Page = () => {
  console.log("pageRender");

  const [title, setTitle] = useState("Counter Title");

  return (
    <div>
      <InputComponent setTitle={setTitle} />
      <Counter title={title} />
    </div>
  );
};

const InputComponent = ({ setTitle }) => {
  console.log("InputComponentRender");

  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTitle(value);
        }}
      >
        click to update title
      </button>
    </div>
  );
};

const Counter = ({ title }) => {
  console.log(`CounterRender`);
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );
  const handledecrease = useCallback(
    () => setCount((prevCount) => prevCount - 1),
    []
  );

  return (
    <>
      <h1>{title}</h1>

      <div className="flex gap-3">
        <Button lable="Increase" onClick={handleIncrease} />

        <p>counter:{count}</p>

        <Button lable="decrease" onClick={handledecrease} />
      </div>
    </>
  );
};
