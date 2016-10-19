// @flow
import Modal from 'react-modal';

const A = <Modal/>;
const B = <Modal isOpen closeTimeoutMS={200} ariaHideApp={false}/>;
// $ExpectError How should we type this?!
const C: string = <Modal ariaHideApp={100}/>

Modal.setAppElement('#foo');
Modal.setAppElement(document.getElementById('foo'));
// $ExpectError only string or Element
Modal.setAppElement(2);
