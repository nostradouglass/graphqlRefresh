
 import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";
import CompanyList from "./components/CompanyList";
import CreateCompany from "./components/CreateCompany";

 function App() {
  return (
    <div className="App">
      <UsersList />
      <br />
      <CreateUser />
      <br />
      <CompanyList />
      <br />
      <CreateCompany />
    </div>
  );
}

export default App;
