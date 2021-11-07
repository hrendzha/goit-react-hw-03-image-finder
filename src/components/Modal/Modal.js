import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
    static propTypes = {
        largeImageUrl: PropTypes.string.isRequired,
        onModalClose: PropTypes.func.isRequired,
    };

    onEscPress = e => {
        if (e.code !== 'Escape') return;
        this.props.onModalClose();
    };

    componentDidMount() {
        window.addEventListener('keydown', this.onEscPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscPress);
    }

    render() {
        const { largeImageUrl, onModalClose } = this.props;

        return (
            <div className={s.overlay} onClick={onModalClose}>
                <div className={s.modal}>
                    <img src={largeImageUrl} alt="" />
                </div>
            </div>
        );
    }
}

export default Modal;
