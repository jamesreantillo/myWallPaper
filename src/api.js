import { createClient } from 'pexels';

const client = createClient(
  '563492ad6f91700001000001c60fb79a6010403881426e0eeba18eb8'
);

export const photos = client.photos
  .curated({ per_page: 10 })
  .then((photos) => photos);
console.log(photos);
