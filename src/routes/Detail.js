import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Detail = ({ toDos }) => {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === +id);

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
