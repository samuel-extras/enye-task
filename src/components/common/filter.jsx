import React, { Component } from "react";
import { Select } from "antd";


const { Option } = Select;
class Filters extends Component {

  raiseSort = (path) => {
    const sortedColumn = { ...this.props.sortedColumn };

    if (sortedColumn.path === path) {
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.props.onSort(sortedColumn);
  };
  renderSotedIcon = (column) => {
    if (column.path !== this.props.sortedColumn.path) return null;
    if (this.props.sortedColumn.order === "asc")
      return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };
   
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Select
          style={{ width: 200, marginRight: "20px" }}
          placeholder="Filter by gender"
          optionFilterProp="children"
          onSelect={this.props.onSelect}
          name="gender"
        >
          <Option value="all">
            All Gender
          </Option>
          <Option name="gender" value="male">
            Male
          </Option>
          <Option name="gender" value="female">
            Female
          </Option>
          <Option name="gender" value="prefer to skip">
            Prefer to skip
          </Option>
        </Select>
        <Select
          style={{ width: 200 }}
          placeholder="Filter by payment method"
          optionFilterProp="children"
          onSelect={this.props.onSelect}
        >
          <Option  value="all">
            All Payment Method
          </Option>
          <Option name="payment method" value="paypal">
            Paypal
          </Option>
          <Option name="payment method" value="check">
            Check
          </Option>
          <Option name="payment method" value="cc">
            CC
          </Option>
          <Option name="payment method" value="money order">
            Money Order
          </Option>
        </Select>
      </div>
    );
  }
}

export default Filters;
