import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    inputValue: 0,
    operator: '',
    resultValue: 0,
    calculator: false,
    showingResult: false,
};

const calculator = (state = initialAppState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_NUMBER:
            return {
                ...state,
                inputValue: state.inputValue * 10 + action.number,
                showingResult: false,
            };

        case actionTypes.PLUS:
            if (state.calculator === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operator: '+',
                    resultValue: state.resultValue + state.inputValue,
                    showingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operator: '+',
                    calculator: true,
                    resultValue: state.inputValue,
                    showingResult: true,
                };
            }

        case actionTypes.MINUS:
            if (state.calculator === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operator: '-',
                    resultValue: state.resultValue - state.inputValue,
                    showingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operator: '-',
                    calculator: true,
                    resultValue: state.inputValue,
                    showingResult: true,
                };
            }

        case actionTypes.MULTIPLY:
            if (state.calculator === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operator: '*',
                    resultValue: state.resultValue * state.inputValue,
                    showingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operator: '*',
                    calculator: true,
                    resultValue: state.inputValue,
                    showingResult: true,
                };
            }

        case actionTypes.DIVIDE:
            if (state.calculator === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operator: '/',
                    resultValue: state.resultValue / state.inputValue,
                    showingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operator: '/',
                    calculator: true,
                    resultValue: state.inputValue,
                    showingResult: true,
                };
            }

        case actionTypes.CLEAR:
            return {
                inputValue: 0,
                operator: '',
                calculator: false,
                resultValue: 0,
                showingResult: false,
            };

        case actionTypes.EQUAL:
            switch (state.operator) {
                case '+':
                    return {
                        inputValue: state.resultValue + state.inputValue,
                        operator: '',
                        calculator: false,
                        resultValue: state.resultValue + state.inputValue,
                        showingResult: true,
                    };

                case '-':
                    return {
                        inputValue: state.resultValue - state.inputValue,
                        operator: '',
                        calculator: false,
                        resultValue: state.resultValue - state.inputValue,
                        showingResult: true,
                    };

                case '*':
                    return {
                        inputValue: state.resultValue * state.inputValue,
                        operator: '',
                        calculator: false,
                        resultValue: state.resultValue * state.inputValue,
                        showingResult: true,
                    };

                case '/':
                    return {
                        inputValue: state.resultValue / state.inputValue,
                        operator: '',
                        calculator: false,
                        resultValue: state.resultValue / state.inputValue,
                        showingResult: true,
                    };

                default:
                    return state;
            }

        default:
            return state;
    }
};

export default calculator;