import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import GallerySection from "../sections/GallerySection/GallerySection";
import FormSection from "../sections/FormSection/FormSection";

const Gallery = (props: any) => {
    console.log(props.GalleryImages);

    return (
        <>
            <Header/>
            <GallerySection/>
            <FormSection/>
            <Footer/>
        </>
    )
        ;
};

export default Gallery;
