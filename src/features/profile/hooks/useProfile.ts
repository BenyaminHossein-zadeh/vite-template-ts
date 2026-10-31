import { useProfileQuery } from '../services/queries';

export function useProfile() {
  const profileQuery = useProfileQuery();

  return {
    profileQuery,
  };
}
