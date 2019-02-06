import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import url from '../utils/const';
import { formatName } from '../utils/helpers';

import PlayerForm from '../components/PlayerForm';

class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      rating: '',
      handedness: 'left',
      error: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    if (name === 'rating') {
      if (!value || value.match(/^[0-9]\d*$/)) {
        this.setState({
          [name]: value,
        });
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      const data = JSON.stringify({
        first_name: formatName(this.state.firstName),
        last_name: formatName(this.state.lastName),
        rating: this.state.rating,
        handedness: this.state.handedness,
      });
      const token = sessionStorage.getItem('token');
      axios({
        method: 'post',
        url: `${url}/players`,
        data,
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      })
        .then(() => {
          this.setState({
            firstName: '',
            lastName: '',
            rating: '',
            handedness: 'left',
            error: '',
          });
          this.props.navigate('../../roster');
        })
        .catch(error => {
          if (error) {
            this.setState({
              error: 'We\'re having trouble creating a new player. This is either a problem with our servers or your internet connection. Please try again later.',
            });
          }
        });
    }
  }

  handleValidation() {
    if (!this.state.firstName || !this.state.lastName) {
      this.setState({
        error: 'Please enter both a first and last name',
      });
      return false;
    } else if (!this.state.rating) {
      this.setState({
        error: 'Please enter a rating',
      });
      return false;
    }
    this.setState({
      error: '',
    });
    return true;
  }

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">New Player.</h1>
          <PlayerForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            rating={this.state.rating}
            handedness={this.state.handedness}
            error={this.state.error}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default PlayerPage;

PlayerPage.propTypes = {
  navigate: PropTypes.func,
};

PlayerPage.defaultProps = {
  navigate: () => {},
};
