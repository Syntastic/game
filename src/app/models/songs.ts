import { Song } from './song';
import { SongBuilder } from './song-builder';

const maniac = new SongBuilder('1')
  .withName('Maniac')
  .fromArtist('Michael Sembello')
  .fromYear(1983)
  .fromCoverArtist('Rising Insane')
  .withFileName('maniac')
  .withVideoUrl(
    'https://www.youtube.com/watch?v=ToPYG-8XuBI&ab_channel=LongBranchRecords'
  )
  .withFirstInterval(7)
  .withSecondInterval(5)
  .build();

export const songs: Song[] = [maniac];

export function getSong(id: string): Song {
  return songs.find((x) => x.id === id);
}
