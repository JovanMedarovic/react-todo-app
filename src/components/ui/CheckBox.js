import React, {Component} from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange(e) {
        const {checked} = e.target;

        this.setState({checked});
        this.props.onChange(checked);
    }

    render() {
        return (<input type="checkbox" onChange={this.handleChange.bind(this)}/>);
    }
}

export default CheckBox;
