import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const DELETE = "DELETE";
const ADD = "ADD";

const TaskList = [
  { id: 0, text: "this is task one" },
  { id: 1, text: "this is task two" },
  { id: 2, text: "this is task three" },
  { id: 3, text: "this is task four" },
];

const redecer = (state = [], action) => {
  if (action.type === ADD) {
    let id = 1;
    if (state.length) {
      const lastItem = state[state.length - 1];
      id = lastItem.id + 1;
    }
    return [...state, { id, text: action.payload }];
  }
  if (action.type === DELETE) {
    const newList = state.filter((item) => item.id !== action.payload);
    return newList;
  }

  return state;
};

export const ReducerTest = () => {
  const [tasks, dispatch] = useReducer(redecer, TaskList);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-3 justify-center m-4">
      <div className="flex gap-3">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: ADD, payload: value });
          }}
        >
          add to list
        </button>
      </div>
      <div>
        {tasks.map((item) => (
          <div key={item.id} className="flex gap-3 mb-3">
            <p>{item.text}</p>
            <button
              className="bg-red-600 text-white rounded-sm"
              onClick={() => {
                dispatch({ type: DELETE, payload: item.id });
              }}
            >
              remove task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
