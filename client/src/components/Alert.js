import React from "react";

export default function Alert({ error }) {
  return (
    <>
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>{error}</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
}
