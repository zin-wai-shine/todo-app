import { createContext, useReducer } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import EmptyTest from './components/EmptyTest';
import List from './components/List';
import Search from './components/Search';


export const listContext = createContext();

function App() {

  const reducer = (state, action) => {

      switch(action.type){

          case "add" :
            return {
              ...state,
              data:[...state.data, action.payloat]
            };

          case "edit":
            return {
              ...state,
              data:[

                  ...state.data.map( (res, index) => index === action.payloat.id ? action.payloat.newValue : res  )

              ]
            }
            
          case "delete":
            return{
              ...state,
              data:[
                ...state.data.filter((res, index) => index !== action.payloat.id)
              ]

            }

            case "search":
              return{
                
                ...state,

                filterText: action.payloat.search

              }

          default:
            return state;

      }

  }

  const [state, dispatch] = useReducer(reducer, {data: [] , filterText:""});

  return (

      <>
      
          <listContext.Provider value={[state, dispatch]}>

             <div className='p-20 h-screen w-full bg-slate-700 flex flex-col items-center gap-2'>

                    <h1 className='text-3xl text-slate-400 font-extrabold'>TODO LIST</h1>
              
                    <Search />

                    <AddForm />

                    <List />

                    <EmptyTest />

             </div> 

          </listContext.Provider>
      
      </>

  );
}

export default App;
