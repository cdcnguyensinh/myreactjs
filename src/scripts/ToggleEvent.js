import React from 'react';

const data_source = [
    {
        id: 1,
        name: 'long'
    },
    {
        id: 2,
        name: 'long2'
    }
]

class ToggleEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, isCheckParent: false, selectedItems: new Set() };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    onChangeCheckboxParent = (event) => {
        // console.log(event.target.checked);
        const checked = event.target.checked;
        this.setState(state => {
            console.log(state);
            return {
                isCheckParent: checked
            }
        });
    }

    onChangeCheckboxChildren = (event, id) => {
        const checked = event.target.checked;
        //const newData = checked ? [...this.state.selectedItems, id] : this.state.selectedItems.filter(i => i !== id);
        const newData2 = checked ? this.state.selectedItems.add(id) : this.state.selectedItems.delete(id);
        const newData = this.state.selectedItems;
        const isCheckAll = newData.size === data_source.length;
        console.log(newData);

        this.setState({
            selectedItems: newData,
            isCheckParent: isCheckAll
        })
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
                            <td><input type="checkbox" checked={this.state.isCheckParent} onChange={this.onChangeCheckboxParent}></input></td>
                            <td>Id</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data_source.map((item, idx) => {
                                return <tr key={item.id}>
                                    <td><input type="checkbox" checked={this.state.selectedItems.has(item.id)} onChange={(e) => this.onChangeCheckboxChildren(e, item.id)} ></input></td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ToggleEvent;