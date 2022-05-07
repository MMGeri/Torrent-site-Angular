import { Comment } from './Comment';

export interface TorrentInfo {
    enabled: boolean;
    selected:string;
    download_url: string;
    desc: string;
    comments: Comment[];
}