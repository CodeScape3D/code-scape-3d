import { NavBar, Footer} from "./"

function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-white">
      <NavBar />
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
}

export default Home;
