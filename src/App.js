import Chat from './components/Chat';
import SidebarIcon from './components/SidebarIcon';
import SidebarUser from './components/SidebarUser';

function App() {
  return (
    <div className='flex'>
      <SidebarIcon />
      <SidebarUser />
      <Chat />
    </div>
  );
}

export default App;
