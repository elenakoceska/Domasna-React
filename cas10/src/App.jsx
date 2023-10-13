// import Hello from './components/Hello';
import { HelloFunc } from './components/HelloFunc';
import {HomeworkFunc} from './components/HomeworkFunc';

export function App(){
  return(
    <div id='app'>
      <h1>App</h1>
      {/* <Hello/> */}
      <HelloFunc/>
      <HomeworkFunc/>
    </div>
  )
}
