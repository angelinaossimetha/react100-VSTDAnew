import React, { PureComponent } from 'react';
/* 
    1. Static Text 
        1a. Title
        2a. Subtitle
*/
class Header extends PureComponent {
    render() {
        return (
            <div>
                <h1 className='display-3 white'>Very Simple Todo App</h1>
                <h3 className='white'>Track all of the things</h3>
                <hr className="tagline"/>
            </div>
        );
    }
}

export default Header;