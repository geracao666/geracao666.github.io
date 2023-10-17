export type Artist = {
  name: string;
  cover: string;
  discography: Release[]
}

export type Release = {
  type: 'album' | 'ep' | 'single';
  name: string;
  artwork: string;
  url: string;
  tracks: string[];
}