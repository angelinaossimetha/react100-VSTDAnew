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
                <h1 className='white'>Very Simple Todo App</h1>
                <subtitle className='white'>Track all of the things</subtitle>
            </div>
        );
    }
}

export default Header;