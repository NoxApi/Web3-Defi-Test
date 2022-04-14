import evmlogo from "./../images/evmlogo.svg"
const Home = () => {
  return (
    <div class="bg">
    <div style={{ display:"flex" ,height:"100vh",justifyContent:"center",alignItems:"center" }}>
      <img src={evmlogo} alt='logo' class="MBH:w-[200vw] MBH:h-[100vw] MBH:MT- imgtrans object-scale-down w-[50vw] h-[80%] " />
    </div>
    </div>
  );
};

export default Home;
