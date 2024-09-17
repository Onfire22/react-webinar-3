import React from "react";
import List from '../list/index';

const index = () => {
  const items = [{
    code: 1,
  }];
  return (
    <div>
      <List list={items} />
      <div>
        итого summ
      </div>
    </div>
  );
};

export default index;
