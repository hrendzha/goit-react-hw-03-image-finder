import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ photos, onLargeImgOpen }) {
    return (
        <ul className={s.gallery}>
            {photos.map(
                ({
                    id,
                    webformatURL: src,
                    largeImageURL: largeImageUrl,
                    tags: photoDescr,
                }) => (
                    <li className={s.galleryItem} key={id}>
                        <ImageGalleryItem
                            src={src}
                            photoDescr={photoDescr}
                            onLargeImgOpen={onLargeImgOpen}
                            largeImageUrl={largeImageUrl}
                        />
                    </li>
                ),
            )}
        </ul>
    );
}

ImageGallery.propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default ImageGallery;
