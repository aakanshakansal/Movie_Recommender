// import React from "react";

// function AddToFavorites(props) {
//   return (
//     <div>
//       <span className="mr-2">Add to Favourites</span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="16"
//         height="16"
//         fill={props.isFavorite ? "red" : "none"}
//         className="bi bi-heart-fill"
//         viewBox="0 0 16 16"
//         stroke="red"
//         strokeWidth="1"
//       >
//         <path
//           fillRule="evenodd"
//           d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
//         />
//       </svg>
//     </div>
//   );
// }

// export default AddToFavorites;
import React from "react";

function AddToFavorites(props) {
  return (
    <div>
      <span className="mr-2">
        {props.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={props.isFavorite ? "red" : "none"}
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
        stroke="red"
        strokeWidth="1"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
        />
      </svg>
    </div>
  );
}

export default AddToFavorites;
