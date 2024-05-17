import MultipleSelect from "./components/MultipleSelect";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className=" w-3/4">
        <h1 className="text-blue-600 font-mono ">React-Multiple-Select</h1>
        <MultipleSelect />
      </div>
    </div>
  );
};

export default App;
