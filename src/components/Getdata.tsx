import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Getdata() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/users")
      .then((res) => {
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
          setUsers(res?.data);
        }, 1500);
      })
      .catch((err) => setError(err));
  }, []);
  return (
    <div>
      <h2>Ma liste</h2>
      {loader && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && <h2 className="text-danger">Erreur de chargement</h2>}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Rôle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
