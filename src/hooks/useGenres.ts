import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';
import genres from '../data/genres';
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
