import { useNavigate, useParams } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function JewelryDetails() {
  const { token } = useAuth();
  const { id } = useParams();
  const {
    data: jewel,
    loading,
    error,
  } = useQuery(`/jewelry/${id}`, "jewel");

  if (loading) return <p>Loading...</p>;
  if (error || !book) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>{jewel.name}</h1>
      <p>{jewel.description}</p>
      <img src={jewel.image}/>
      {/* TO-DO: add purchase button and connect to cart */}
    </>
  );
}