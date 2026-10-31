import { useQuery } from '@tanstack/react-query';
import { getprofileData } from './api';
import { queryKeys } from './query.key';

export const useProfileQuery = () => {
  return useQuery({ queryKey: queryKeys.profile, queryFn: getprofileData });
};
