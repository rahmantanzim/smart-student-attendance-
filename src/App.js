import './App.css'
import Students from './components/Students/Students';
import StudentProvider from './contexts/Student';
function App() {
  return (
    <StudentProvider>
    <div className="App">
      <Students/>
    </div>
    </StudentProvider>
  );
}

export default App;
