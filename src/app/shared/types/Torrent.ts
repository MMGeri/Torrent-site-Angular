import { TorrentInfo } from "./TorrentInfo";

export interface Torrent {
    id: string;
    name: string;
    uploader_id: string;
    uploader_name: string;
    date: Date;
    size: number;
    type: string;
    seeders?: number;
    info: TorrentInfo;
}