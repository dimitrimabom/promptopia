import "@/styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@utils/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <Provider>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
