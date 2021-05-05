import { createClient } from 'pexels';

const client = createClient(
  '563492ad6f91700001000001c60fb79a6010403881426e0eeba18eb8'
);

export const photosData = async () => {
  const photos = await client.photos
    .curated({ per_page: 9 })
    .then((photos) => photos);
  return photos; //?
};
