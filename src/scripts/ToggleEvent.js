import React from 'react';

class ToggleEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, isCheckParent: false };


        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    onChangeCheckbox = (event) => {
        // console.log(event.target.checked);
        const checked = event.target.checked;
        this.setState(state => {
            console.log(state);
            return {          
                isCheckParent: checked
            }
        });
    }

    render() {
        return (
            <div>
                <h1>This is toggle event</h1>

                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                <table border="1px">
                    <thead>
                        <tr>
                            <td><input type="checkbox" onChange={this.onChangeCheckbox}></input></td>
                            <td>Id</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" checked={this.state.isCheckParent} onChange={() => { }} ></input></td>
                            <td>1</td>
                            <td>Giang Văn Mai</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked={this.state.isCheckParent} readOnly disabled></input></td>
                            <td>2</td>
                            <td>Giang Văn Lậu</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" checked={true} readOnly></input></td>
                            <td>2</td>
                            <td>Giang Văn Giang</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ToggleEvent;