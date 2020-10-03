import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
    // state = {
    //     counters: [
    //         { id: 1, value: 4 },
    //         { id: 2, value: 0 },
    //         { id: 3, value: 0 },
    //         { id: 4, value: 0 }
    //     ]
    // }

    // handleDelete = CounterId => {
    //     // console.log('handle delete ', CounterId);
    //     const counters = this.state.counters.filter(c => c.id !== CounterId);
    //     this.setState({ counters });
    // }

    // handlingevent = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = { ...counter };
    //     counters[index].value++;
    //     this.setState({ counters });
    // }

    // handleReset = () => {
    //     const counters = this.state.counters.map(c => {
    //         c.value = 0;
    //         return c;
    //     });
    //     this.setState({ counters });
    // }

    render() {

        console.log('Counters - Render');

        const { onReset, counters, onDelete, onIncrement,onDecrement } = this.props;

        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                {counters.map(counter =>
                    // <Counter key={counter.id} value={counter.value} selected>
                    //     <h4>Counter #{counter.id}</h4>
                    // </Counter>
                    <Counter
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        key={counter.id}
                        // value={counter.value}
                        // Id={counter.id}
                        counter={counter}
                    />
                )}
            </div>
        );
    }
}

export default counters;