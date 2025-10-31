import Header from "./components/Header";
import Glass from "../public/assets/images/icon-search.svg";

export default function App() {
  return (
    <div className="flex flex-col bg-neutral-900 min-h-dvh pb-10">
      <Header />
      <main className="px-4 bg-neutral-900">
        <section className="p-4">
          <h1 className="text-white text-5xl font-bold text-center">
            How's the sky looking today?
          </h1>
        </section>

        <section className="my-8 flex flex-col gap-3 md:flex-row md:justify-center">
          <div className="bg-neutral-600 p-4 flex flex-row gap-4 rounded-lg md:w-[30rem]">
            <img src={Glass} />
            <input
              type="search"
              placeholder="Search for a place..."
              className="text-white flex-1"
            />
            ;
          </div>
          <button className="bg-blue-500 p-4 text-white font-semibold rounded-lg">
            Search
          </button>
        </section>

        {/* Main Content */}
        <section className="flex flex-col gap-5 text-white md:flex-row md:mx-20">
          <div className="flex flex-col gap-6 w-full md:w-3/4">
            <div className="flex flex-col gap-4 md:flex-col">
              <div className="bg-[url('/assets/images/bg-today-large.svg')] bg-cover bg-center w-full h-52">
                Berlin, Germany
              </div>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                <div className="h-20 bg-neutral-600">1</div>
                <div className="h-20 bg-neutral-600">2</div>
                <div className="h-20 bg-neutral-600">3</div>
                <div className="h-20 bg-neutral-600">4</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1>Daily Forecast</h1>
              <div className="grid grid-cols-3 gap-2 md:grid-cols-7">
                <div className="h-40 bg-neutral-600">1</div>
                <div className="h-40 bg-neutral-600">2</div>
                <div className="h-40 bg-neutral-600">3</div>
                <div className="h-40 bg-neutral-600">4</div>
                <div className="h-40 bg-neutral-600">5</div>
                <div className="h-40 bg-neutral-600">6</div>
                <div className="h-40 bg-neutral-600">7</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4 w-full bg-neutral-600 md:w-1/4">
            <div className="flex flex-row gap-4">
              <h1>Hourly forcast</h1>
              <div>Dropdown</div>
            </div>
            <div className="flex flex-col gap-4">
              <div>3 pm</div>
              <div>3 pm</div>
              <div>3 pm</div>
              <div>3 pm</div>
              <div>3 pm</div>
              <div>3 pm</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
