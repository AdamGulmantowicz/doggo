import React, { useRef } from "react";

const Form = ({ children, onSubmit, ...rest }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    onSubmit(formData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form" {...rest}>
      {children}
    </form>
  );
};

export default Form;
