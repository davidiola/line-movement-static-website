import React from 'react';
import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

class DateInfo extends React.Component {
  render() {
    return (
      <Space
        size={'small'}
        style={{ padding: '20px 0px' }}
      >
        <div>View games on:</div>
        <DatePicker
          onChange={onChange}
        />
      </Space>
    );
  }
}

export default DateInfo;