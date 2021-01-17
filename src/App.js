import React, { Component } from "react";
import "./App.css";
import CardList from "./components/common/cards";
import SearchBox from "./components/common/searchBox";

import { Pagination } from "antd";
import { paginate } from "./utils/paginate";

import Filters from "./components/common/filter";


class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
      pageSize: 20,

      currentPage: 1,
      sort: "",
      sortedOption: "",
    };
  }

  componentDidMount() {
    fetch("http://api.enye.tech/v1/challenge/records")
      .then((response) => response.json())
      .then((users) => users.records.profiles)
      .then((data) => this.setState({ users: data }));
  }
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSort = (option, name) => {
    this.setState({ sortedOption: option });
    this.setState({ sort: name.name });
  };
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      users,
      searchField,
      sort,
      sortedOption,
    } = this.state;

    const filteredUsers =
      users.filter((user) =>
        user.FirstName.toLowerCase().includes(searchField.toLowerCase())
      ) ||
      users.filter((user) =>
        user.LastName.toLowerCase().includes(searchField.toLowerCase())
      );
 const sorted=()=>{
    if (sort === "gender") {
     return filteredUsers.filter(
        (user) => user.Gender.toLowerCase() === sortedOption.toLowerCase()
      );
    } else if (sort === "payment method") {
     return filteredUsers.filter(
        (user) => user.PaymentMethod.toLowerCase() === sortedOption.toLowerCase()
      );
    } else if(sortedOption==='All gender' || sortedOption=== "All payment method") {
     return filteredUsers
    }else{
      return filteredUsers
    }
  }
    const displayUsers = paginate(
      sorted(),
      currentPage,
      pageSize
    );
    return { displayUsers };
  };

  render() {
    const { users, pageSize, currentPage } = this.state;
    const totalSize = users.length;

    const { displayUsers } = this.getPageData();
    return (
      <div
        className="App"
        style={{ backgroundImage: `url("/background.jpg")` }}
      >
        <div
          style={{ alignItems: "left", textAlign: "left", paddingLeft: "10px" }}
        >
          <img
            alt
            width="140px"
            src="http://345451-1068034-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/556x300_white.png"
          />
        </div>
        <h1 style={{ color: "#fff" }}>Users Profile Details</h1>
        <SearchBox
          placeholder="search User"
          handleChange={this.handleChange}
        />{" "}
        <Filters onSelect={(option, name) => this.handleSort(option, name)} />
        <CardList users={displayUsers} />
        <Pagination
          total={totalSize}
          current={currentPage}
          pageSize={pageSize}
          defaultCurrent={1}
          defaultPageSize={20}
          hideOnSinglePage={true}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}
export default App;
