import React, {useState} from "react" ;

 
function Room() {
  let [isLit,setLit] =   useState(true);
  let [age,setAge] = useState(18);
  function updateLit(){
    console.log('Update');
    setLit(!isLit);
    setAge(++age);
}

  return (
    <div >
      This  Room is {isLit ? "lit": "dark"}
      <br/>
      Age: { age}
      <br/>
    <button onClick = {updateLit} > Toggle Light</button>
    </div>
    
  );
}

export default Room;
