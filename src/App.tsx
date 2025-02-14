import { MultiStepForm } from "./components/MultiStepForm";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-auto bg-[#02191D] max-md:px-[20px]">
      <Navbar />
      <MultiStepForm />
    </div>
  );
}

export default App;
