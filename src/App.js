import Header from './components/UI/Header';

function App() {
  return (
    <div className="flex flex-col h-screen bg-fuchsia-600">
      <Header />
      <div className="bg-black grow">
        Content
      </div>
    </div>
  );
}

export default App;
