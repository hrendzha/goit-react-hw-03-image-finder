import { Component } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import { imagesApi } from './services/imagesApi';
import scrollToNewImages from './js/scrollToNewImages';

class App extends Component {
    state = {
        photos: [],
        isClickOnLoadMoreBtn: false,
        isLoaderVisible: false,
        isModalOpen: false,
        largeImageUrl: '',
    };

    componentDidUpdate(prevProps, prevState) {
        const { isClickOnLoadMoreBtn } = this.state;

        if (isClickOnLoadMoreBtn) {
            scrollToNewImages();
        }
    }

    handleFormSubmit = async searchQuery => {
        try {
            this.setState({
                isLoaderVisible: true,
                isClickOnLoadMoreBtn: false,
            });

            imagesApi.resetPage();
            const photos = await imagesApi.fetchWithQuery(searchQuery);

            this.setState({ photos });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoaderVisible: false });
        }
    };

    handleLoadMoreBtnClick = async () => {
        try {
            this.setState({
                isLoaderVisible: true,
                isClickOnLoadMoreBtn: true,
            });

            const photos = await imagesApi.fetchWithQuery();

            this.setState(prevState => ({
                photos: [...prevState.photos, ...photos],
            }));
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoaderVisible: false });
        }
    };

    handleModalOpen = largeImageUrl =>
        this.setState({
            isModalOpen: true,
            largeImageUrl,
            isClickOnLoadMoreBtn: false,
        });

    handleModalClose = () => this.setState({ isModalOpen: false });

    render() {
        const { photos, isLoaderVisible, isModalOpen, largeImageUrl } =
            this.state;

        return (
            <>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery
                    photos={photos}
                    onModalOpen={this.handleModalOpen}
                />
                {Boolean(photos.length) && !isLoaderVisible && (
                    <Button onClick={this.handleLoadMoreBtnClick} />
                )}
                <Loader
                    className="loader"
                    visible={isLoaderVisible}
                    type="ThreeDots"
                    color="#00BFFF"
                    height={80}
                    width={80}
                />
                {isModalOpen && (
                    <Modal
                        largeImageUrl={largeImageUrl}
                        onModalClose={this.handleModalClose}
                    />
                )}
            </>
        );
    }
}

export default App;

/**
 * App
 *   Searchbar
 *     Form
 *   ImageGallery
 *     ImageGalleryItem
 *   LoadMoreBtn
 *   Loader
 *   Modal
 */
