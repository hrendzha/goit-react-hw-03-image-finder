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
        isLoaderVisible: false,
        isModalOpen: false,
        largeImageUrl: '',
        query: '',
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const { query: currentQuery, page: currentPage } = this.state;
        const { query: prevQuery, page: prevPage } = prevState;

        if (currentQuery !== prevQuery) {
            this.toggleLoader();

            imagesApi
                .fetchWithQuery(currentQuery, currentPage)
                .then(photos => this.setState({ photos }))
                .catch(error => console.log(error))
                .finally(() => this.toggleLoader());
        }

        if (currentPage !== prevPage && currentPage !== 1) {
            this.toggleLoader();

            imagesApi
                .fetchWithQuery(currentQuery, currentPage)
                .then(photos => {
                    this.setState(prevState => ({
                        photos: [...prevState.photos, ...photos],
                    }));

                    scrollToNewImages();
                })
                .catch(error => console.log(error))
                .finally(() => this.toggleLoader());
        }
    }

    toggleLoader = () =>
        this.setState(prevState => ({
            isLoaderVisible: !prevState.isLoaderVisible,
        }));

    handleFormSubmit = query => this.setState({ query, page: 1 });

    handleLoadMoreBtnClick = () =>
        this.setState(prevState => ({ page: prevState.page + 1 }));

    handleModalOpen = largeImageUrl =>
        this.setState({
            isModalOpen: true,
            largeImageUrl,
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
