import "./globals.css";
import { Inter } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { NoteProvider } from "./contexts/NoteContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FontProvider } from "./contexts/FontContext";
import ClientWrapper from "./_components/ClientWrapper";
import { DesktopProvider } from "./contexts/DesktopContext";

export const metadata = {
  title: {
    default: "Note Taking App",
    template: "%s | Note Taking App",
  },
  description:
    "Capture and organize your thoughts effortlessly with our intuitive note-taking app.",
};

const inter = Inter({ subsets: ["latin"], display: "swap" });
const notoSerif = Noto_Serif({ subsets: ["latin"], display: "swap" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-neutral-0 antialiased`}>
        <FontProvider>
          <ThemeProvider>
            <DesktopProvider>
              <NoteProvider>
                <ClientWrapper
                  inter={inter}
                  notoSerif={notoSerif}
                  sourceCodePro={sourceCodePro}
                >
                  {children}
                </ClientWrapper>
              </NoteProvider>
            </DesktopProvider>
          </ThemeProvider>
        </FontProvider>
        <Toaster
          position="bottom-right"
          gutter={8}
          containerStyle={{ marginBottom: "70px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
      </body>
    </html>
  );
}
