import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, photoDescr, onLargeImgOpen, largeImageUrl }) {
    return (
        <img
            className={s.image}
            src={src}
            alt={photoDescr}
            onClick={() => onLargeImgOpen(largeImageUrl)}
        />
    );
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    photoDescr: PropTypes.string.isRequired,
    onLargeImgOpen: PropTypes.func.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
