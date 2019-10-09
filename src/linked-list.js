const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head == null ? null : this._head.data;
    }

    tail() {
        return this._tail == null ? null : this._tail.data;
    }

    at(index) {
        let current = this._head;
        let counter = 1;
        if (index == 0) {
            return this._head.data;
        } else {
            while (current) {
                current = current.next;
                if (counter == index) {
                    return current.data;
                }
                counter++;
            }
        }

    }

    insertAt(index, data) {

        let current = this._head;
        let counter = 1;
        let node = new Node(data);
        if (index == 0) {
            if (this._head!==null) {
                this._head.prev = node;
                node.next = this._head;
                this._head = node;
            }
        } else {
            while (current) {
                current = current.next;
                if (counter == index) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                }
                counter++;
            }
        }
        return this;
    }

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {

        let current = this._head;
        let counter = 1;
        if (index == 0) {
            if (!this._head.next) {
                this._head = null;
            } else {
                this._head = this._head.next;
                this._head.prev = null;
            }
        } else {
            while (current) {
                current = current.next
                if (current == this._tail) {
                    this._tail = this._tail.prev;
                    this._tail.next = null;
                } else if (counter == index) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break;
                }
                counter++;
            }
        }
        this.length--;
        return this;
    }

    reverse() {

        let current = this._head;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let counter = 1;
        if (this._head.data == data) {
            return 0;
        } else {
            while (current) {
                current = current.next;
                if (current == null) {
                    return -1;
                } else if (current.data == data) {
                    return counter;
                }
                counter++;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
