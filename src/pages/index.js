import evmlogo from "./../images/evmlogo.svg"
const Home = () => {
  return (
    <div class="bg">
    <div style={{ display:"flex" ,height:"100vh",justifyContent:"center",alignItems:"center" }}>
      <img src={evmlogo} alt='logo' class=" object-scale-down w-[100h] h-[100vh]"   />
    </div>
    </div>
  );
};

export default Home;
