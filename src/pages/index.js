import evmlogo from "./../images/evmlogo.svg"
const Home = () => {
  return (
    <>
    <div style={{ display:"flex",background: "linear-gradient(180deg, #0A0910 0%, #07162D 100%)" ,height:"100vh",justifyContent:"center",alignItems:"center" }}>
      <img src={evmlogo} alt='logo' class=" object-scale-down w-[100h] h-[100vh]"   />
    </div>
    </>
  );
};

export default Home;
