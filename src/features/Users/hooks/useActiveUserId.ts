import { useEffect } from "react";
import { useHistory, useParams } from "react-router";

interface Params {
  userId?: string;
}

export function useActiveUserId(firstUserId?: number | undefined) {
  const history = useHistory();
  const params = useParams<Params>();
  const userId =
    params.userId && !isNaN(+params.userId) ? +params.userId : undefined;

  const setActiveUserId = (nextId: number) => history.push(`/users/${nextId}`);

  useEffect(() => {
    if (firstUserId && !userId) setActiveUserId(firstUserId);
  }, [userId, firstUserId]);

  return { activeUserId: userId, setActiveUserId };
}
