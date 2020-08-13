import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWebsiteName } from '../../../actions/websiteAction'

class Logo extends Component {
    componentDidMount() {
        this.props.getWebsiteName();
    }
    render() {
        return (
            <div>
                {this.props.logo}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    logo: state.website.websiteName
});

export default connect(mapStateToProps, { getWebsiteName })(Logo)