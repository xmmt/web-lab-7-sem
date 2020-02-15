import React, { Component } from 'react';
import City from './City';
import {
  addCityAction,
  inputChangeAction,
  fetchDataAction
} from '../actions/items';
import { connect } from 'react-redux';

export class Cities extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.add(this.props.newCityValue);
  };

  handleChange = event => {
    this.props.changeInput(event.target.value);
  };

  render() {
    return (
      <div style={{ backgroundColor: "dark-grey" }}>
        <div className="container-fluid" style={{ paddingRight: 0 }}>
          <div className="inputForm" id="form1">
            <form onSubmit={this.handleSubmit}>
              <div
                className="d-flex justify-content-end"
                style={{ paddingTop: 20, paddingBottom: 15 }}
              >
                <h3 className="p-2">Город </h3>
                <input
                  type="text"
                  className="p-2 textbox"
                  style={{ marginLeft: 10 }}
                  value={this.props.newCityValue}
                  onChange={this.handleChange}
                />
                <input
                  className="p-2 btn btn-primary"
                  type="submit"
                  value="Добавить в избранное"
                  style={{ marginLeft: 10 }}
                />
              </div>
            </form>
          </div>
          <div className="row">
            {this.props.items.map((favCity, i = 0) => {
              i++;
              return [
                <City key={i} serverInfo={favCity} />,
                i % 2 === 0 && <div key={-i} className="w-100" />
              ];
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newCityValue: state.newCityValue,
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(fetchDataAction(url)),
  add: city => dispatch(addCityAction(city)),
  changeInput: input => dispatch(inputChangeAction(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
