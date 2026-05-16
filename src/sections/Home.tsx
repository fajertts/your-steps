const Home = () => {
  return (
    <>
      <section className="w-full relative h-screen bg-cover bg-center transition-all duration-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" object-cover w-full h-full z-0"
          >
            <source src="/shoes.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};
export default Home;
