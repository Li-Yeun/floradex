import Footer from '../components/Footer';

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='relative h-[calc(100%-5rem)] w-full'> {children}</div>

      <footer className='fixed bottom-0 z-50 h-[5rem] w-full bg-[#fdfdfd]'>
        <Footer />
      </footer>
    </>
  );
}
