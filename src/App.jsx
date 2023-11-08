import Box from "./components/Box";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center gap-20">
      <Box bgColor="bg-red-500" isRounded={true} title="Box1" />
      <Box bgColor="bg-blue-500" isRounded={false} title="Box2" />
      <Box bgColor="bg-yellow-500" isRounded={true} title="Box3" />
    </div>
  );
};

export default App;
