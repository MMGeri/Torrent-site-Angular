import { TorrentInfo } from "./TorrentInfo";

export interface Torrent {
    id: number;
    name: string;
    date: Date;
    size: number;
    type: string;
    seeders?: number;
    info: TorrentInfo;
}