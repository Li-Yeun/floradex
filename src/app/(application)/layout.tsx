import Footer from '../components/Footer';

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <footer className='fixed bottom-0 h-[5rem] w-full bg-[#fdfdfd]'>
        <Footer />
      </footer>
    </>
  );
}
