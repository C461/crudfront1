function HomePage() {
  return (
    <>
      <div className="flex  flex-col items-center justify-center h-screen">
        <h1 className=" cursor-pointer font-bold text-8xl transform transition-transform hover:scale-110">
          ¡You need to create a user!
        </h1>
        <p className="mt-[2%] font-medium">
          This is an app to create tasks, it has functions such as login,
          register and user authentication.
        </p>
      </div>
    </>
  );
}

export default HomePage;
