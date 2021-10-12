import './App.css';
import EmpleadosList from './components/EmpleadosList';

function App() {

  let empleados = [ 
    { 
      id: 1, 
      fullName: "Lego Dueñas", 
      title: "Jefe de Contaduría", 
      department: "Negocios", 
      pic: "4", 
      size:"small" 
    }, 
    { 
      id: 2, 
      fullName: "Lego Vallés",  
      title: "Contador", 
      department: "Negocios", 
      pic: "5", 
      size:"small", 
    }, 
    { 
      id: 3, 
      fullName: "Lego Meza", 
      title: "Administrador", 
      department: "Negocios", 
      pic: "6", 
      size:"large" 
    }, 
    { 
      id: 4, 
      fullName: "Lego Ocampo", 
      title: "Frontend Dev", 
      department: "Ingeniería", 
      pic: "7", 
      size:"large" 
    }, 
    { 
      id: 5, 
      fullName: "Lego Jiménez", 
      title: "Director", 
      department: "Marketing", 
      pic: "8", 
      size:"large" },
      { 
        id: 6, 
        fullName: "Lego Pérez", 
        title: "Frontend Dev", 
        department: "Ingeniería", 
        pic: "3", 
        size:"large" 
      }, 
      { 
        id: 7, 
        fullName: "Lego Balderas", 
        title: "Estrategia Digital", 
        department: "Marketing", 
        pic: "2", 
        size:"large" 
      }, 
      { 
        id: 8, 
        fullName: "Lego Watemberg", 
        title: "Backend Dev", 
        department: "Ingeniería", 
        pic: "1", 
        size:"large" 
      }, 
      { 
        id: 9, 
        fullName: "Lego Jung", 
        title: "DevOps Engineer", 
        department: "Ingeniería", 
        pic: "0", 
        size:"large" 
      } 
    ]
  return (
    <div className="App">
      <EmpleadosList listado={empleados}/>
    </div>
  );
}

export default App;
