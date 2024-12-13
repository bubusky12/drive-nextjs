import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import File from '../components/File';

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: '20px' }}>
          <File />
        </div>
      </div>
    </div>
  );
}