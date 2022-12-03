import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export function Book() {
  const { id } = useParams();
  const { hello } = useOutletContext();
  return (
    <>
      <h1>
        Book {id} {hello}
      </h1>
    </>
  );
}
