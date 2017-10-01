class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
            this.config = config;
    	    this.state = this.config.initial;
    	    this.undoStack = [];
    	    this.undoStack.push(this.state);
    	    this.redoStack = [];
    
    
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
    return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
    this.state = state;
    this.undoStack.push(this.state);
    this.redoStack.length = 0;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        this.state = this.config.states[this.state].transitions[event];
        this.undoStack.push(this.state);
        this.redoStack.length = 0;
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
     this.state = this.config.initial;
     this.undoStack.push(this.state);}

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
