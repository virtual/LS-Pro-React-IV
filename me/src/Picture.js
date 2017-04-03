import React, {Component} from 'react';

class Picture extends Component {
    render() {
        return (
            <div>
                <div className='col-sm-3 col-xs-6'>
                    <img
                        className='thumbnail'
                        src={this.props.picture}
                        alt={this.props.description}/>
                </div>
            </div>
        );
    }
}

export default Picture;