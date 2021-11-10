(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__gboaM",galleryItem:"ImageGallery_galleryItem__zZSAU"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},26:function(e,t,a){e.exports={image:"ImageGalleryItem_image__2xsbt"}},27:function(e,t,a){e.exports={btn:"Button_btn__3xaJM"}},34:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(24),c=a.n(o),l=(a(32),a(33),a(34),a(15)),s=a(4),i=a(5),u=a(7),h=a(6),d=a(25),p=a.n(d),b=a(8),g=a.n(b),m=a(0),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleChange=function(t){return e.setState({searchQuery:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchQuery;(0,e.props.onSubmit)(a)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(m.jsx)("header",{className:g.a.searchBar,children:Object(m.jsxs)("form",{className:g.a.searchForm,onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:g.a.btn,children:Object(m.jsx)("span",{className:g.a.btnLabel,children:"Search"})}),Object(m.jsx)("input",{className:g.a.input,type:"text",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})]})})}}]),a}(n.Component),j=f,y=a(26),O=a.n(y);var v=function(e){var t=e.src,a=e.photoDescr,n=e.onModalOpen,r=e.largeImageUrl;return Object(m.jsx)("img",{className:O.a.image,src:t,alt:a,onClick:function(){return n(r)}})},_=a(12),x=a.n(_);var w=function(e){var t=e.photos,a=e.onModalOpen;return Object(m.jsx)("ul",{className:x.a.gallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(m.jsx)("li",{className:x.a.galleryItem,children:Object(m.jsx)(v,{src:n,photoDescr:o,onModalOpen:a,largeImageUrl:r})},t)}))})},L=a(27),S=a.n(L);var M=function(e){var t=e.onClick;return Object(m.jsx)("button",{className:S.a.btn,type:"button",onClick:t,children:"Load more"})},C=a(13),k=a.n(C),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onModalClose()},e.handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onModalClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageUrl;return Object(m.jsx)("div",{className:k.a.overlay,onClick:this.handleOverlayClick,children:Object(m.jsx)("div",{className:k.a.modal,children:Object(m.jsx)("img",{src:e,alt:""})})})}}]),a}(n.Component),U=I,N=a(14),F=a.n(N);F.a.defaults.baseURL="https://pixabay.com/api/";var B=function(e,t){var a=new URLSearchParams({key:"23262939-6c0fd5a3da3fb9e3fdc7add54",q:e,page:t,per_page:12,orientation:"horizontal",image_type:"photo"});return F.a.get("?".concat(a)).then((function(e){return e.data.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}))}))};var D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={photos:[],isLoaderVisible:!1,isModalOpen:!1,largeImageUrl:"",query:"",page:1},e.toggleLoader=function(){return e.setState((function(e){return{isLoaderVisible:!e.isLoaderVisible}}))},e.handleFormSubmit=function(t){return e.setState({query:t,page:1})},e.handleLoadMoreBtnClick=function(){return e.setState((function(e){return{page:e.page+1}}))},e.handleModalOpen=function(t){return e.setState({isModalOpen:!0,largeImageUrl:t})},e.handleModalClose=function(){return e.setState({isModalOpen:!1})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.query,o=n.page,c=t.query,s=t.page;r!==c&&(this.toggleLoader(),B(r,o).then((function(e){return a.setState({photos:e})})).catch((function(e){return console.log(e)})).finally((function(){return a.toggleLoader()}))),o!==s&&1!==o&&(this.toggleLoader(),B(r,o).then((function(e){a.setState((function(t){return{photos:[].concat(Object(l.a)(t.photos),Object(l.a)(e))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return console.log(e)})).finally((function(){return a.toggleLoader()})))}},{key:"render",value:function(){var e=this.state,t=e.photos,a=e.isLoaderVisible,n=e.isModalOpen,r=e.largeImageUrl;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(m.jsx)(w,{photos:t,onModalOpen:this.handleModalOpen}),Boolean(t.length)&&!a&&Object(m.jsx)(M,{onClick:this.handleLoadMoreBtnClick}),Object(m.jsx)(p.a,{className:"loader",visible:a,type:"ThreeDots",color:"#00BFFF",height:80,width:80}),n&&Object(m.jsx)(U,{largeImageUrl:r,onModalClose:this.handleModalClose})]})}}]),a}(n.Component),R=D;c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchBar:"Searchbar_searchBar__3w0z0",searchForm:"Searchbar_searchForm__23jwf",btn:"Searchbar_btn__37Gab",btnLabel:"Searchbar_btnLabel__2RFBj",input:"Searchbar_input__2C4aO"}}},[[74,1,2]]]);
//# sourceMappingURL=main.a5ac1566.chunk.js.map