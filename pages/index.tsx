import tw from "twin.macro";

const Container = tw.div`flex h-screen justify-center items-center`;
const PinkContainer = tw(Container)`bg-pink-200`;
const Title = tw.span`font-bold text-xl animate-bounce`;

const Home = () => {
  return (
    <>
      <PinkContainer>
        <Title>nyfi</Title>
      </PinkContainer>
    </>
  );
};

export default Home;
