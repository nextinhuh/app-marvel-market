import axios from "axios";
import { Md5 } from 'ts-md5/dist/md5';

export const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',
    params: {
        apikey: "40c886f8ccb77cc5ec5955054a91c2d9",
        hash: Md5.hashStr(`${Date.now().toString()}` + "7521db7f8d0ee37ce52937a63e8f70fce5ea5590" + "40c886f8ccb77cc5ec5955054a91c2d9"),
        ts: Date.now()
    }
})

// https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&limit=30&apikey=

// /comics?format=comic&formatType=comic&noVariants=true&limit=30&apikey=40c886f8ccb77cc5ec5955054a91c2d9