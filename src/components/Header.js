import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <div><h3 href="#" className="navbar-brand">Student Management App</h3></div>
                </nav>
            </header>
        </div>;
    }
}

export default Header;