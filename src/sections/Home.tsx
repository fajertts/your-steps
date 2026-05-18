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
            className=" object-cover w-full h-full absolute z-1 "
          >
            <source src="/shoes.mp4" type="video/mp4" />
          </video>
          <div className="absolute left-15 bottom-50 z-2">
            <p className=" text-2xl font-bold font-cairo text-white ">fsdfs</p>
            <p className=" text-5xl font-bold font-cairo text-white ">abbbhh</p>
          </div>
        </div>

      </section>
    </>
  );
};
export default Home;
