import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const Backdrop = ({onHideCart}) => {
    return (
        <div className={styles.backdrop} onClick={onHideCart}></div>
    )
}
const ModalItem = ({children}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays') // вставляем модальное окно через портал

const Modal = ({children, onHideCart}) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart={onHideCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalItem>{children}</ModalItem>, portalElement)}
        </React.Fragment>
    )
}

export default Modal