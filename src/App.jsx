import CrossIcon from "./components/CrossIcon";
import Luna from "./components/Luna"
const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen ">
      <header className="container mx-auto px-4">


        <div className="flex justify-between">
          <h1 className="uppercase text 2xl font-bold text-white">Todo</h1>

          <button><Luna/></button>



        </div>
        <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 mt-8">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input className="w-full text-gray-400" type="text" placeholder="create a new todo..." />

        </form>

      </header>
      <main className="container mx-auto px-4 mt-8  ">
        <div className="bg-white rounded-md px-4">
          <article className="flex gap-4 border-b border-b-gray-400 px-5 py-4" >
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-500 text-m">Complete Online JavaScript</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-5 py-4" >
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-500 text-m">Jog around the park 3x</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-5 py-4" >
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-500 text-m">10 minutes meditation</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-5 py-4" >
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-500 text-m">Read for 1 hour</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-5 py-4" >
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-500 text-m">Pick up groceries</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-5 py-4" >
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-500 text-m">Complete task App</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>

          <section className="flex justify-between px-4 py-4 text-gray-400">
            <span>5 items left</span>
            <button>Clear Completed</button>
          </section>
        </div>

        <div className="bg-white rounded-md container mx-auto px-4 py-4 mt-8">
          <section className="flex justify-center gap-4">
            <button className="text-blue-500 font-semibold text-sm">All</button>
            <button className="text-gray-400 font-semibold text-sm">Active</button>
            <button className="text-gray-400 font-semibold text-sm">Completed</button>
          </section>
        </div>
        <p className="flex justify-center py-10 text-gray-600">Drag an Drop to reorder list</p>

      </main>
    </div>

  )
}
export default App;