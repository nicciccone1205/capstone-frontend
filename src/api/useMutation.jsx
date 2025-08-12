import { useState } from "react";
import { useApi } from "./ApiContext";

export default function useMutation(method, resource, tagsToInvalidate) {
  const { request, invalidateTags } = useApi();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const result = await request(resource, {
        method,
        body: JSON.stringify(body),
      });
      setData(result);
      console.log(result);
      
      invalidateTags(tagsToInvalidate);
      return result;
    } catch (e) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }

    return false;
  };

  return { mutate, data, loading, error };
}
