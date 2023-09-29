import { useState } from "react";

export const Forms = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [showValues,setShowValues] = useState("true");

  return (
    <div>
      <p>1.Enter your Username</p>
      <input
        type="text"
        placeholder="UserName"
        value={userName}
        //onChange={(event)=>{setUserName(event.target.value)}}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br />

      <p>2.Enter your Fullname</p>
      <input
        type="text"
        placeholder="FullName"
        value={fullName}
        onChange={(event) => {
          setFullName(event.target.value);
        }}
      />
      <br />

      <p>3.Enter Your e-mail</p>
      <input
        type="email"
        placeholder="e-mail"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <br />

      <p>4.Enter your Date of Birth</p>
      <input
        type="date"
        placeholder="Enter Birth Date"
        value={dateOfBirth}
        onChange={(event) => {
          setDateOfBirth(event.target.value);
        }}
      />
      <br />

      <p>5.Enter your Address</p>
      <input
        type="text"
        placeholder="address"
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={()=>{setShowValues(!showValues)}}>{showValues === true ? "Hide table" : "Show table"}</button>
      <br/>
      <br/>
      {showValues && <table border={1}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>dateofbirth</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>{userName}</b>
            </td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{dateOfBirth}</td>
            <td>{address}</td>
          </tr>
        </tbody>
      </table>}
    </div>
  );
};
