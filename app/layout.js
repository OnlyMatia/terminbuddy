
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "TerminBuddy - Find your own sport",
  description: "TerminBuddy is a platform for sports enthusiasts looking to find teammates for their own game or join someone else's, meet great people, and have a good time together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` `}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
