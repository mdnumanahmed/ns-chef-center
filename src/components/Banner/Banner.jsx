const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/background/20230516/original/pngtree-large-kitchen-with-several-chefs-working-in-it-picture-image_2617005.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold leading-relaxed">
              Welcome to NS Chef Corner!
            </h1>
            <p className="mb-5">
              Learning to cook is more than just knowing how to follow a recipe.
              We have all the tools and resources you need to become a more
              skilled and confident cook. Tips, tricks, techniques, science deep
              dives, and visual guides.
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
