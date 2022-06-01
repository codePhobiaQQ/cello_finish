import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500;600&display=swap"
          as="font"
          type="font"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
          as="font"
          type="font"
        />
        <link
          rel="preload"
          href="./../styles/fonts/BigillaRegular.woff2"
          as="font"
          type="font/woff2"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(88218773, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/88218773"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}
