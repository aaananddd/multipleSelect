import ReactTextEditor from "./components/ReactTextEditor";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className=" w-3/4">

         {/* <ResumeTemplate /> */}
         {/* <InternProfileModal /> */}
         {/* <MultipleValueSelect /> */}
         <ReactTextEditor />
      </div>
    </div>
  );
};

export default App;
