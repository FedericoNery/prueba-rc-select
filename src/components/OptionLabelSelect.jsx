import Select from 'rc-select';
import React from 'react';

const data = [];

for (let i = 0; i < 10; i += 1) {
  data.push({
    value: i,
    label: `label ${i}`,
    displayLabel: `display ${i}`,
  });
}

function OptionLabelSelect() {
  return (
    <div>
      <h2>Select optionLabelProp</h2>
      <Select
        style={{ width: 500 }}
        optionLabelProp="displayLabel"
        mode="multiple"
        allowClear
        options={data}
      />
    </div>
  );
}

export default OptionLabelSelect;