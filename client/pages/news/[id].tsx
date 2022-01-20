import {useEffect, useState} from "react";
import Header from "../../hoc/Header";
import Menu from "../../components/Menu/Menu";
import {useRouter} from "next/router";
import { GetStaticPaths } from "next";
import axios from "axios";

const NewsPage = (props: any) => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [news, setNews] = useState<any>(null)
  const router = useRouter();

  console.log(props.data);

  useEffect(() => {
  }, [])

  console.log(news);

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section>
          <div className="container">
            <h2>{props.data.NewsTitle}</h2>
          </div>
        </section>
      </div>
    </Header>
  );
};

export default NewsPage;

export async function getServerSideProps(context: any) {
  console.log(context);
  const id = context.query.id;
  const data = await fetch(`http://localhost:1337/news-elements/${+id + 1}`).then((data) => {
    return data.json();
  });
  return {
    props: {data}, // will be passed to the page component as props
  }
}

// export const getStaticProps: any = async (context: any) => {
//   try {
//     console.log("context", context);
//     const data = await fetch('http://localhost:1337/news-elements').then((data) => {
//       return data.json();
//     });
//     return {
//       props: {
//         data
//       }
//     }
//   } catch (error) {
//     console.log(error.message)
//     return {data: {}};
//   }
// }
