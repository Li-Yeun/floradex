import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Floradex',
  // TODO add metadata
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex h-full flex-col'>
        {/* <header className='mb-[10vw] h-[20dvh]'> */}
        <header className='pt-[calc(10vw+10svh)]'>
          <Header />
        </header>
        <div className='content-container flex flex-auto flex-col'>
          {children}
        </div>
      </body>
    </html>
  );
}
