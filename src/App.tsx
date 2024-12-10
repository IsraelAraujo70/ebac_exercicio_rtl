import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://th.bing.com/th/id/OIP.7JGrZBLCBlCcdAJmM8-1lAHaEK?rs=1&pid=ImgDetMain">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
