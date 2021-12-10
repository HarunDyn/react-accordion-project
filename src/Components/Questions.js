import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Questions.css";

function Questions({ title, info }) {
  const [show, setShow] = useState(true);
  return (
    <section className="container">
      <div className="header">
        <h4>{title}</h4>
        <button
          className={show ? "minus" : "plus"}
          onClick={() => setShow(!show)}
        >
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p>{show && info}</p>
    </section>
  );
}

export default Questions;
