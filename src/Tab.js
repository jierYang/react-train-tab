import React from 'react';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    select = select => this.setState({currentIndex: select})

    render() {
        const {currentIndex} = this.state;
        return (
            <div>
                {/*<span>你选择的是{currentIndex}</span>*/}
                {
                    React.Children.map(this.props.children, (ele, index) =>
                        <div onClick={this.select.bind(this, index)}>{ele.props.name}</div>)
                }
                <div>
                    {
                        React.Children.map(this.props.children, (ele, index) => currentIndex === index && ele)
                    }
                </div>
            </div>

        )
    }
}

export default Tab;
