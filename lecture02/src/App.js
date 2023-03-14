
import './App.css';
import Comment from './Comment';
import LandingPage from './LandingPage';
const users=[
  {id:1,name:"KimGachon",comment:"안녕하세요. 김가천입니다."},
  {id:2,name:"CaCaOj",comment:"카카오제이입니다~!"},
  {id:3,name:"GaSoon",comment:"가순입니다. 파이팅!!"}
]
function App() {
  return (
    // <div>
    //   {users.map((user)=><Comment key={user.id} name={user.name} comment={user.comment}></Comment>)}
    // </div>
    <LandingPage></LandingPage>
  );
}

export default App;
