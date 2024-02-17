import React, { useState } from "react";

const SeachForm = (props) => {
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValue(e.target.value );
    props.onSearch(e.target.value.trim());
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="from-group">
        <input
          type="search"
          data-testid="search-input"
          className="form-control"
          value={value}
          onChange={onChange}
          placeholder="Type to search"
        />
      </div>
    </form>
  );
};
export default SeachForm;
