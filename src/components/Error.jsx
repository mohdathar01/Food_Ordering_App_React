import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!!!!!</h1>
      <p>Something Went Wrong </p>
      <p>unexpected Error Please Go to Home</p>
      <h2>{err.status}</h2>
      <p>{err.statusText}</p>
    </div>
  );
};
export default Error;
