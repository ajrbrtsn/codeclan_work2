import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator-add');
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(button4);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
    })

  it ('should subtract', () => {
    const button7 = container.getByTestId('number7');
    const button3 = container.getByTestId('number3');
    const subtract = container.getByTestId('operator-subtract');
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button3);
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('4')
  })
  it ('should multiply', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiply = container.getByTestId('operator-multiply');
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15')
  })
  it ('should divide', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divide = container.getByTestId('operator-divide');
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3')
  })
  it ('should concatenate', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('217')
  })
  it ('should add/ multiply/ divide', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const add = container.getByTestId('operator-add');
    const multiply = container.getByTestId('operator-multiply');
    const divide = container.getByTestId('operator-divide');
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(multiply);
    fireEvent.click(button7);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3')
  })
  it('should clear', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator-add');
    const clear = container.getByTestId('clear');
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(button4);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
    fireEvent.click(clear);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('0')
  })
})

