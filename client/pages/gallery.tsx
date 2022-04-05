import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import GallerySection from "../sections/GallerySection/GallerySection";
import { fetchQuery } from "../services/ssr";

const Gallery = (props: any) => {
  return (
    <Header>
      <GallerySection />
      <Footer
        FooterSection={{
          FooterSectionRu: props.FooterSectionRu,
          FooterSectionEn: props.FooterSectionEn,
          FooterSectionDe: props.FooterSectionDe,
        }}
      ></Footer>
    </Header>
  );
};

export default Gallery;

export async function getServerSideProps(context: any) {
  try {
    const FooterSectionRu = await fetchQuery(
      "api/footer-section?populate=*&locale=ru"
    );
    const FooterSectionEn = await fetchQuery(
      "api/footer-section?populate=*&locale=en"
    );
    const FooterSectionDe = await fetchQuery(
      "api/footer-section?populate=*&locale=de"
    );

    console.log(FooterSectionRu.data.attributes.FooterSection);

    return {
      props: {
        FooterSectionRu: FooterSectionRu.data.attributes.FooterSection,
        FooterSectionEn: FooterSectionEn.data.attributes.FooterSection,
        FooterSectionDe: FooterSectionDe.data.attributes.FooterSection,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
