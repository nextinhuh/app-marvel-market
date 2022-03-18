import axios from "axios";
import { Md5 } from 'ts-md5/dist/md5';

export const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',
    params: {
        apikey: "40c886f8ccb77cc5ec5955054a91c2d9",
        hash: Md5.hashStr(`${Date.now().toString()}` + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY),
        ts: Date.now()
    }
});