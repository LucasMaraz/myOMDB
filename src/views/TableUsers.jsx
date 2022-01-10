import axios from "axios";
import React from "react";
import User from "../components/User";

const TableUsers = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/users").then((users) => setUsers(users.data));

    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div class="flex flex-wrap align-center mt-16 ml-20">
        {users.map((us, i) => {
          return <User key={i} user={us} />;
        })}
      </div>
      <div className="h-96"></div>
    </React.Fragment>
  );
};

export default TableUsers;
