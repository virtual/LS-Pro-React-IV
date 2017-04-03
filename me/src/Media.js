const gallery = [
    {
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_6606-1024x683.jpg',
        description: 'tables by the pool'
    },
    {
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_6252-1024x683.jpg',
        description: 'sunlight through the mountains'
    },
    {
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_5708-1024x683.jpg',
        description: 'cake'
    },
    {
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_0259-1024x683.jpg',
        description: 'Blackhawk MH-60'
    },
    {
        picture: 'http://satinflame.com/wp-content/uploads/2017/03/IMG_0181-1024x683.jpg',
        description: 'Glacier mountains'
    }
];

import React, { Component } from 'react';
import Picture from './Picture';

class Media extends Component {
    render() {
        return (
            <div className="gallery">
                <div className='h1container'><h1>Media</h1>
                </div>
                <div className="row">
                { gallery.map((item, index) => {
                    return <Picture 
                    key={index}
                    picture={item.picture}                        
                    description={item.description}
                    />
                })}
                </div>
            </div>
        );
    }
}

export default Media;