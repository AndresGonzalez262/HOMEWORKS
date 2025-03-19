import React, { useState } from "react";

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.length > 0 ? this.items.shift() : null;
    }

    peek() {
        return this.items.length > 0 ? this.items[0] : null;
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items);
    }
}

const ATMQueueApp = () => {
    const [queue] = useState(new Queue());
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [queueList, setQueueList] = useState([]);

    const addPerson = () => {
        if (name && amount) {
            const person = { name, amount };
            queue.enqueue(person);
            setQueueList([...queue.items]);
            setName("");
            setAmount("");
        }
    };

    const removePerson = () => {
        queue.dequeue();
        setQueueList([...queue.items]);
    };

    return (
        <div>
            <h2>ATM Queue</h2>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Withdrawal Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={addPerson}>Add to Queue</button>
                <button onClick={removePerson} disabled={queue.isEmpty()}>Remove from Queue</button>
            </div>
            <h3>Queue:</h3>
            <ul>
                {queueList.map((person, index) => (
                    <li key={index}>{person.name} - ${person.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default ATMQueueApp;
