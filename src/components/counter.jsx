import React, { Component } from 'react';

class Counter extends Component {

    // state = {
    //     value: this.props.counter.value
    // };

    // constructor() {
    //     super();
    //     this.handlingEvent = this.handlingEvent.bind(this);
    // }

    // handlingEvent = (product) => {
    //     //console.log('Increment Event', this);
    //     //obj.method();
    //     //function();
    //     this.setState({ count: this.state.count + 1 })
    //     //console.log(product);
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProp :', prevProps);
        console.log('prevState :', prevState);

        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajaxcall and get new data from server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    render() {

        //console.log('props:', this.props);
        console.log('Counter - Render');

        const { onIncrement, onDelete, onDecrement } = this.props;

        return (
            <div>
                {/* {this.props.children} */}
                <span className={this.getBadgeClasses()}>
                    {this.formateCount()}
                </span>
                <button
                    onClick={() => onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                    Incriment
                </button>
                <button
                    onClick={() => onDecrement(this.props.counter)}
                    className="btn btn-warning btn-sm m-2"
                    disabled={this.props.counter.value === 0}>
                    Decriment
                </button>
                <button onClick={() => onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formateCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

}

export default Counter;