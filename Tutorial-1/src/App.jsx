import {Wrapper} from "./components/Wrapper"
import {UserCard} from "./components/UserCard"
export default function App(){
  const users  = [{
    name : "Virat Kohli",
    role : "Batsman",
    country : "India",
  },{
    name : "MS Dhoni",
    role : "Wicket Keeper",
    country : "India",
  }
];
  return(
    <div>
      <h1>User Dashbored</h1>
      <Wrapper title = "User List">
      </Wrapper>
      <UserCard data = {users}>
      </UserCard>
    </div>
  )
}