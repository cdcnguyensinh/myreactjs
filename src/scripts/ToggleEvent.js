import React from 'react';


const data_source = [
    {
        id: 1,
        name: 'long handsom'
    },
    {
        id: 2,
        name: 'long handsome 2'
    },
    {
        id: 3,
        name: 'long handsome 3'
    }
]


class ToggleEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, isCheckParent: false, selectedItems: new Set(), inputItemName: "" };

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
        const isCheckedParent = event.target.checked;
        this.setState(state => {
            if (isCheckedParent) {
                data_source.forEach(element => {
                    this.state.selectedItems.add(element.id);
                });
            }
            else {
                this.state.selectedItems.clear();
            }
            //isCheckParent = isCheckedParent;
            return {
                isCheckParent: isCheckedParent
            }
        });
    }

    onChangeCheckboxChildren = (event, id) => {
        const checked = event.target.checked;
        //const newData = checked ? [...this.state.selectedItems, id] : this.state.selectedItems.filter(i => i !== id);
        checked ? this.state.selectedItems.add(id) : this.state.selectedItems.delete(id);
        const newData = this.state.selectedItems;
        const isCheckAll = newData.size === data_source.length;
        console.log(newData);

        this.setState({
            selectedItems: newData,
            isCheckParent: isCheckAll
        })
    }

    onChangeInputItemName = (event) => {
        const valueOfInputItemName = event.target.value;
        this.setState({
            inputItemName: valueOfInputItemName
        });
    }

    onAddItem = () => {
        var idItem = data_source.length + 1;
        data_source.push({id: idItem, name: this.state.inputItemName});
        this.setState({});
    }

    onDeleteItem = () => {
        if(window.confirm("Are you sure?")) {
            // for (let index = 0; index < data_source.length; index++) {
            //     const element = data_source[index];
            //     if(this.state.selectedItems.has(element.id)) {
            //         data_source.splice(index, this.setState.selectedItems.size);
            //     }
            // }

            const filterd = data_source.filter((value, index) => {
                return !this.state.selectedItems.has(value.id);
            });

            
            this.setState({});
        }
    }

    render() {
        return (
            <div>
                <h1>This is toggle event</h1>

                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <table>
                    <tbody>
                        <tr>
                            <td><input type="text" value={this.state.inputItemName} onChange={this.onChangeInputItemName} ></input></td>
                            <td>
                                <button onClick={this.onAddItem }>
                                    Add
                                </button>
                                <button onClick={this.onDeleteItem}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table border="1px">
                    <thead>
                        <tr>
                            <td><input type="checkbox" checked={this.state.isCheckParent} onChange={this.onChangeCheckboxParent}></input></td>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data_source.map((item, idx) => {
                                return <tr key={item.id}>
                                    <td><input type="checkbox" checked={this.state.selectedItems.has(item.id)} onChange={(e) => this.onChangeCheckboxChildren(e, item.id)} ></input></td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button>Edit</button>
                                    </td>
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