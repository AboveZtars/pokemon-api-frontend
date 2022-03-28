import { useState, useEffect } from "react"
import axios from "axios"
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup} from "firebase/auth";

function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export default function PokeContainer(): JSX.Element {

  const [pokemonData, setPokemonData] = useState({name:"",sprites:{front_default:""},id: 0,base_experience: 0})
  
  async function handleAuth(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

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
        <div className="md:flex w-full md:justify-center">
            <div className="hidden flex justify-center text-center  md:block w-1/2 bg-rose-500 py-10 px-10">
              <img className="w-4/6 ml-16 " src={pokemonData.sprites.front_default} alt="" />
            </div>
            <div className="w-full flex flex-col md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">{capitalizeFirstLetter(pokemonData.name)}</h1>
                </div>
                <div className="grid grid-rows-1 h-full ">
                    <div className="flex text-center w-full">
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="" className="text-md font-semibold px-1">id: {pokemonData.id}</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="" className="text-md font-semibold px-1">base experience: {pokemonData.base_experience}</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full">
                        <div className="w-full px-3">
                            <button 
                              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                              onClick={()=>getPokemonHandler()}
                            >
                              Get New Pokemon
                            </button>
                            <button 
                            onClick={()=>handleAuth()}>iniciarcon google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}


