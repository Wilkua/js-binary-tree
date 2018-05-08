
const debugEnabled = true;
const debug = (...args) => {
    if (debugEnabled) {
        console.info(...args);
    }
};

class TrieNode {
    constructor(val = null) {
        if (val instanceof TrieNode) {
            debug('TrieNode#CloneConstructor');
            this._left = val.left;
            this._right = val.right;
            this._value = val.value;
        } else {
            debug('TrieNode#Constructor :', val);
            this._left = null;
            this._right = null;
            this._value = val;
        }
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
    }

    get left() {
        return this._left;
    }

    set left(val) {
        this._left = val;
    }

    get right() {
        return this._right;
    }

    set right(val) {
        this._right = val;
    }

    insertLeft(val) {
        debug('TrieNode#insertLeft :', val);
        const leftNode = new TrieNode(val);
        let ret = new TrieNode(this);
        ret.left = leftNode;
        return ret;
    }

    insertRight(val) {
        debug('TrieNode#insertRight :', val);
        const rightNode = new TrieNode(val);
        let ret = new TrieNode(this);
        ret.right = rightNode;
        return ret;
    }
}

class Trie {
    constructor(root = null) {
        if (root instanceof Trie) {
            debug('Trie#CloneConstructor');
            this._rootNode = root.root;
        } else if (root instanceof TrieNode) {
            debug('Trie#Constructor :', root);
            this._rootNode = root;
        } else {
            debug('Trie#Constructor :', root);
            this._rootNode = new TrieNode(root);
        }
    }

    get root() {
        return this._rootNode;
    }

    insert(val) {
        debug('Trie#Insert :', val);
        let ret = null;
        if (this._rootNode == null) {
            ret = new Trie(val);
        } else if (this._rootNode.value == null) {
            ret = new Trie(new TrieNode(val));
        } else if (this._rootNode.value > val) {
            ret = new Trie(this._rootNode.insertLeft(val));
        } else {
            ret = new Trie(this._rootNode.insertRight(val));
        }

        return ret;
    }
}

