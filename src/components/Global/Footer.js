//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/footer.css';

class Footer extends Component {
    static propTypes = {
        copyright: PropTypes.string
    };
    render() {
        const { copyright = '&copy; React 2018' } = this.props;
        return (
        <div className="Footer">
            <h1>{copyright}</h1>
            
        </div>
        );
    }
}

export default Footer;
