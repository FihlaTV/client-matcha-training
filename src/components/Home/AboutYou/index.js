import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActions from '../../../actions';
import SelectBox from '../../SelectBox';

class AboutYou extends Component {
  state = {
    labelName: '',
  };

  // handleChange = ({ target: { name, value } }) => {
  handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    // const label = document.querySelector('.label-desc');
    //   label.value = value;
    //   // console.log(label);
    //   this.setState({ [name]: value });
  };

  Query = (evt) => {
    evt.preventDefault();
  };

  render() {
    return (
      <div className="Login">
        <h1>Get to know you more!</h1>
        <form onChange={this.handleChange}>
          <SelectBox name="country" />
          <SelectBox name="" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ flashMessage }) => ({
  flashMessage,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    flashMessage: bindActionCreators(allActions.flashMessage, dispatch),
  },
});

AboutYou.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutYou);
