import React from 'react';
import DataTable from './DataTable';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data_source: [{id: 1, name: 'Long 1'}, {id: 2, name: 'Long 2'}]};
    }

    render() {
        return <DataTable data={this.state.data_source} />
    }
}

export default ToDoList;