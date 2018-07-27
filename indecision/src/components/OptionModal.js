import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal  // Have to have the following 2 options
        isOpen={!!props.selectedOption} // Convert selectedOption to a "true" boolean.
        onRequestClose={props.handleClearSelectedOption} // This enables the ESC and outside click actions to close the dialog.
        contentLabel='Selected Option'
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;
