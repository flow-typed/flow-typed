// @flow
import Modal from 'react-modal';

const A = <Modal/>;
const B = <Modal isOpen closeTimeoutMS={200} ariaHideApp={false}/>;
// We can't do a error test here due to wrong tracing by react.
// const C = <Modal ariaHideApp={100}/>
