import { createClient } from 'pexels';

const client = createClient(process.env.REACT_APP_SECRET_KEY);

export const photosData = async () => {
  const photos = await client.photos
    .curated({ per_page: 9 })
    .then((photos) => photos);
  return photos; //?
};
