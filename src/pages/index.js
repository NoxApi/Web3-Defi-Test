import evmlogo from "./../images/evmlogo.svg"
const Home = () => {
  return (
    <>
    <div style={{ display:"flex",background: "linear-gradient(180deg, #0A0910 0%, #07162D 100%)" ,height:"100vh" }}>
      <img src={evmlogo} alt='logo' class="h-[100vh] w-[100vw] px-[20vw] object-scale-down"  />
      {/* <div class="text-[#F9D390] text-5xl font-serif inline-block h-[90vh]] align-middle">
    EVERMOON FARM
  </div> */}
    </div>
    </>
  );
};

export default Home;
