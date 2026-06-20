// export default function Spinner({ size = 28 }) {
//   return (
//     <span
//       className="spinner"
//       style={{ width: size, height: size }}
//       role="status"
//       aria-label="Loading video"
//     />
//   );
// }



const Loader = () => {
  return (
    <div className="video-loader">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;