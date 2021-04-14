import { Component } from "react";
import Search from "../SearchForm/SearchForm";
import Table from "../Table/Table";
import API from "../../utils/API";
import _get from "lodash/get";

class MainContianer extends Component {
  state = {
    results: [],
    toggle: true,
    searchInput: "",
  };
  
  renderEmplList = () => {
    API.getUsers()
      .then((res) => {
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.renderEmplList();
  }

  sortByName = (param) => {
    const sortedEmployeeList = this.state.results.sort((emp1, emp2) =>
      this.state.toggle
        ? _get(emp1, param).localeCompare(_get(emp2, param))
        : _get(emp2, param).localeCompare(_get(emp1, param))
    );
    this.setState({ results: sortedEmployeeList, toggle: !this.state.toggle });
  };

  searchFilter = (event) => {
    // const newEmployeeList = this.state.results.filter(employee => employee.name.first === input)
    this.setState({ searchInput: event.target.value.toLowerCase() });
  };

  render() {
    return (
      <div className="container">
        <Search search={this.searchFilter} />
        <Table
          searchInput={this.state.searchInput}
          results={this.state.results}
          handleDelete={this.handleDelete}
          sortByName={this.sortByName}
        />
      </div>
    );
  }
}

export default MainContianer;
