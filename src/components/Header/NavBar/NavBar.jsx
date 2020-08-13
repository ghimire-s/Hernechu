import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNav } from '../../../actions/websiteAction';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    componentDidMount() {
        this.props.getNav()
    }

    render() {
        const navElement = this.props.navItem.map((item) => (
            <li>
                <Link to={item === "Home" ? `/` : `/${item}`}>
                    {item}
                </Link>
            </li>
        ));
        return (
            <div className="navBar">
                <ul>
                    {navElement}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    navItem: state.website.navBar
});

export default connect(mapStateToProps, { getNav })(NavBar)

