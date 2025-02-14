import { MultiStepForm } from "./components/MultiStepForm";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="w-full [@media(min-width:786px)_and_(max-width:1000px)]:h-screen  bg-[#02191D] bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.2)_0%,rgba(36,160,181,0)_100%)] max-md:px-[20px]">
      <Navbar />
      <MultiStepForm />
    </div>
  );
}

export default App;
