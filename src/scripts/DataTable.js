import React from 'react'

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ischeckParent: false, seletedItems: new Set()}
    }

    onCheckChangeChild = (event, id) => {
        event.target.checked ? this.state.seletedItems.add(id): this.state.seletedItems.delete(id);
        const isCheck = this.props.data.length === this.state.seletedItems.size;
        this.setState({
            ischeckParent: isCheck
        })
    }

    onCheckChangeParent = (event) => {
        const isChecked = event.target.checked;
        console.log(isChecked);
        this.setState(state => {
            if(isChecked) {
                this.props.data.forEach(element => {
                    this.state.seletedItems.add(element.id);
                });
            }
            else {
                this.state.seletedItems.clear();
            }
            return  {
                ischeckParent: isChecked
            }
        })
    } 

    render() {
        //console.log(this.props.data);
        return <div>
            <table border='1'>
                <thead>
                    <tr>
                        <td><input type="checkbox" checked={this.state.ischeckParent} onChange={this.onCheckChangeParent} /></td>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((item, idx) => {
                            return <tr key={item.id}>
                                <td><input type="checkbox" checked={this.state.seletedItems.has(item.id)} onChange={(e) =>{this.onCheckChangeChild(e, item.id)}} /></td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    }
}

export default DataTable;