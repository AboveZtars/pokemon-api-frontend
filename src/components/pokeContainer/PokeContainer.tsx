import { useState, useEffect } from "react"
import axios from "axios"

export default function PokeContainer(): JSX.Element {

  const [pokemonData, setPokemonData] = useState({name:"",sprites:{front_default:""},id: 0,base_experience: 0})
  
  async function getPokemonHandler() {
    try {
      const response = await axios.get("https://poke-api-jtpdsf3exa-uc.a.run.app")
      setPokemonData(response.data)
    } catch (error) {
      console.log("Failed to get the pokemon")
    }
  } 
  
  useEffect(() => {
    console.log(pokemonData)
  },[pokemonData])
  
  
  return (
    
       <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: 1000}}>
        <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-rose-500 py-10 px-10">
              <img src={pokemonData.sprites.front_default} alt="" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">{pokemonData.name}</h1>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1">id: {pokemonData.id}</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1">base experience: {pokemonData.base_experience}</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <button 
                              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                              onClick={()=>getPokemonHandler()}
                            >
                              Get New Pokemon
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}


