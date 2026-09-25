import { useState } from 'react'

function App() {
  const [selectedType, setSelectedType] = useState('')

  function getMatchup(type) {
  // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
  return `Fake API response: You are fighting a ${type}-type Pokémon.`;
}

  function handleTypeClick(type) {
    const response = getMatchup(type);
    setSelectedType(response);
  }

  return (
    <main className="min-h-screen bg-sky-50 px-4 py-10 text-slate-900 sm:px-6">
      <section className="mx-auto max-w-xl overflow-hidden rounded-3xl border-4 border-slate-900 bg-white shadow-[8px_8px_0_#172033]">
        <header className="flex items-center justify-between border-b-4 border-slate-900 bg-red-500 px-6 py-5 text-white">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-100">Trainer toolkit</p>
            <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">Pokemon Battle Assistant</h1>
          </div>
          <span className="grid size-12 place-items-center rounded-full border-4 border-slate-900 bg-white text-xl font-black text-slate-900" aria-hidden="true">
            P
          </span>
        </header>

        <div className="space-y-6 px-6 py-8 sm:px-10">
          <div>
            <p className="text-lg font-bold">What type of Pokemon are you fighting?</p>
            <p className="mt-1 text-sm text-slate-500">Choose a type to see your best move.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ['Fire', 'bg-orange-400'],
              ['Water', 'bg-blue-400'],
              ['Grass', 'bg-emerald-400'],
              ['Ground', 'bg-amber-300'],
            ].map(([type, color]) => (
              <button
                className={`${color} rounded-xl border-2 border-slate-900 px-3 py-3 font-bold shadow-[3px_3px_0_#172033] transition-transform hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus:outline-none focus:ring-4 focus:ring-sky-200`}
                key={type}
                onClick={() => handleTypeClick(type.name)}
                type="button"
              >
                {type}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Battle readout</p>
            <p className="mt-2 text-sm text-slate-500">
              {selectedType ? `You clicked: ${selectedType}` : 'Select an opponent type to get started.'}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
