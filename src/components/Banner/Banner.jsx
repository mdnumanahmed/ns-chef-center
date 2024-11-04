const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/background/20230516/original/pngtree-large-kitchen-with-several-chefs-working-in-it-picture-image_2617005.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold leading-relaxed">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="btn btn-primary">Explore Now</button>
            <button className=" ml-4 btn btn-outline text-white">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
