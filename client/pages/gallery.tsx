import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import GallerySection from "../sections/GallerySection/GallerySection";
import { fetchQuery } from "../services/ssr";

const Gallery = (props: any) => {
  console.log(props.GalleryImages);

  return (
    <Header>
      <GallerySection GalleryImages={props.GalleryImages} />
      <Footer></Footer>
    </Header>
  );
};

export default Gallery;

export async function getServerSideProps(context: any) {
  try {
    const GalleryImages = await fetchQuery("api/gallery-images?populate=image");

    return {
      props: {
        GalleryImages: GalleryImages.data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
