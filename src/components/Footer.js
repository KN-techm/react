import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div>
            <footer className="footer">
                <span className="text-muted">All Right Reserved 2021 @LTTS</span>
            </footer>
        </div>
    }
}
export default Footer;