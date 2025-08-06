import Navbar from "./shareds/components/Navbar";

export const metadata = {
  title: "MaztherTutoriales",
  icons: {
      icon: [
        { url: '/icons/logo.jpg', sizes: '32x32' },
        { url: '/icons/logo.jpg', sizes: '16x16' },
      ],
      apple: [
        { url: '/icons/logo.jpg', sizes: '180x180' },
      ],
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section>
          <Navbar />
        </section>
        {children}
      </body>
    </html>
  );
}
