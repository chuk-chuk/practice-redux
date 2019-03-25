import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateValue, replaceValue } from '../../reducers/value';

import Button from '../button'

export class Banner extends Component {
    constructor() {
        super();
        this.onLinkClick = this.onLinkClick.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onLinkClick(e) {
        e.preventDefault();
        return this.props.update()
    }

    onButtonClick(e) {
        e.preventDefault();
        return this.props.replace()
    }

    render() {
        return (
        <Fragment>
            <p>The value in the store is {this.props.value}</p>
            <a
                    onClick={this.onLinkClick}
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Update value
                </a>
                <br/>
                <Button onClick={this.onButtonClick} />
        </Fragment>
        )
    }
}

const mapReduxStateToProps = state => {
    return { value: state.subValue.value } // take the rootReducer[reducer] and then its value
}
  
const mapDispatchToProps = dispatch => {
    return {
        update: () => dispatch(updateValue(5)),
        replace: () => dispatch(replaceValue(999))
    }
}

export default connect(
    mapReduxStateToProps,
    mapDispatchToProps
)(Banner);

