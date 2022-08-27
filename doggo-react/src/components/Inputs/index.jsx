import React from "react";

export const Field = ({ children, label = "", id }) => {
  return (
    <div className="field">
      <label htmlFor={id} className="label">
        {label}
      </label>
      {children}
    </div>
  );
};

export const Select = (options) => {
  return (
    <select className="select" name="select">
      {Object.keys(options.breedList).map((breed) => {
        return (
          <option value={breed} key={breed}>
            {breed}
          </option>
        );
      })}
    </select>
  );
};
