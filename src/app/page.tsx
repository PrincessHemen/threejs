

import CanvasModel from '../canvas/index'
import HomePage from './home/page'
import Customizer from './customizer/page';


export default function Home() {
  return (
    <main className='app transition-all ease-in'>
      
      <HomePage/>
      
      <CanvasModel/>
      <Customizer/>
      

    </main>
  );
}
