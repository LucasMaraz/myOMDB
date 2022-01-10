import React from "react";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  return (
    <React.Fragment>
      <div class="w-1/6 h-96 bg-gray-900 m-16 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <div class="mb-8 ">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src="https://paradigmcoaching.us/wp-content/uploads/2021/09/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-white font-bold mb-2">{user.username}</p>
          <p class="text-base text-gray-400 font-normal">
            Favorites: {user.favoritesId.length}
          </p>
          <Link to={`/users/${user.id}`}>
            <button
              className="mt-6 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              View favorites
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
export default User;
