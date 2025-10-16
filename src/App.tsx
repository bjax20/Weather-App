import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col bg-orange-500 min-h-dvh">
      <Header />
      <main className="flex-1 px-4 bg-blue-300"></main>
    </div>
  );
}
