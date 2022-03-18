import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../api';
import { CouponProps, CouponList } from "../mocks/coupon.mock";

export type ComicProps = {
    id: string;
    price: number;
    title: string;
    quantity: number;
    rare: boolean;
    description: string;
    uri: string;
    creators: [{
        name: string;
        role: string;
    }];
    dates: [{
        type: string;
        date: Date;
    }]
}

type ComicResponseProps = {
    id: string;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    creators: {
        items: [{
            name: string;
            role: string;
        }]
    };
    dates: [{
        type: string;
        date: Date;
    }]
}

type ResponseProps = {
    data: {
        results: ComicResponseProps[];
    }
}

type ComicContextData = {
    fetchComics: () => Promise<ComicProps[]>;
    reachedComics: () => Promise<ComicProps[]>;
    addComicToCart: (comic: ComicProps) => void;
    removeComicFromCart: (comic: ComicProps) => void;
    validateCoupon: (value: number, coupon: string) => number;
    verifyDiscount: (value: number) => number;
    isRefreshing: boolean;
    comicList: ComicProps[];
    comicCartList: ComicProps[];
}

type ComicProviderProps = {
    children: ReactNode;
}

const COMIC_COLLECTION = '@marvelmarkit:comics';

export const ComicContext = createContext({} as ComicContextData);

function ComicProvider({ children }: ComicProviderProps) {
    const [couponUsed, setCouponUsed] = useState<CouponProps>({} as CouponProps);
    const [comicList, setComicList] = useState<ComicProps[]>([]);
    const [comicCartList, setComicCartList] = useState<ComicProps[]>([]);
    const [comicsLimit, setComicsLimit] = useState(8);
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

    async function fetchComics(): Promise<ComicProps[]> {
        const storedComics = await AsyncStorage.getItem(COMIC_COLLECTION);

        if (storedComics) {
            setComicList(JSON.parse(storedComics));
            if (comicList.length <= 32) {
                setComicsLimit(comicList.length);
            } else {
                setComicsLimit(41);
            }
            return comicList;
        } else {
            await api.get<ResponseProps>(`/comics?format=comic&formatType=comic&noVariants=true&&dateDescriptor=thisMonth&limit=${comicsLimit}`)
                .then(async (response) => {
                    const dataFiltred: ComicProps[] = [];
                    response.data.data.results.map(comic => {
                        const generatePrice = Number((Math.random() * 6553 / 100).toFixed(2));

                        dataFiltred.push({
                            id: comic.id,
                            price: generatePrice,
                            quantity: 0,
                            rare: generatePrice > 30 ? true : false,
                            title: comic.title,
                            description: comic.description,
                            uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                            creators: comic.creators.items,
                            dates: comic.dates
                        })
                    });

                    await AsyncStorage.setItem(COMIC_COLLECTION, JSON.stringify(dataFiltred));
                    setComicList(dataFiltred);
                })
                .catch(() => Alert.alert('Listar quadrinhos', 'Não foi possível listar os quadrinhos.'));
            return comicList;
        }
    }

    async function reachedComics(): Promise<ComicProps[]> {
        setIsRefreshing(true);
        if (comicsLimit <= 40) {
            setComicsLimit(comicsLimit + 8);

            await api.get<ResponseProps>(`/comics?format=comic&formatType=comic&noVariants=true&&dateDescriptor=thisMonth&limit=${comicsLimit}`)
                .then(async (response) => {
                    const dataFiltred: ComicProps[] = [];
                    response.data.data.results.map(comic => {
                        const generatePrice = Number((Math.random() * 6553 / 100).toFixed(2));

                        dataFiltred.push({
                            id: comic.id,
                            price: generatePrice,
                            quantity: 0,
                            rare: generatePrice > 30 ? true : false,
                            title: comic.title,
                            description: comic.description,
                            uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                            creators: comic.creators.items,
                            dates: comic.dates
                        })
                    });

                    const listComicsUpdated = comicList.concat(dataFiltred);
                    setComicList(dataFiltred);
                    await AsyncStorage.setItem(COMIC_COLLECTION, JSON.stringify(listComicsUpdated));
                    setIsRefreshing(false);
                })
                .catch(() => Alert.alert('Listar quadrinhos', 'Não foi possível atualizar a lista dos quadrinhos.'));
        } else {
            Alert.alert('Listar quadrinhos', 'Todos os quadrinhos disponíveis foram listados.');
            setIsRefreshing(false);
        }
        return comicList;
    }

    function addComicToCart(comic: ComicProps): void {
        const hasComicOnCartList = comicCartList.includes(comic);

        if (hasComicOnCartList) {
            comicCartList.map(comicData => {
                if (comicData.id === comic.id) {
                    comicData.quantity = comicData.quantity + 1;
                    return;
                }
            })
            setComicCartList([...comicCartList]);
            Alert.alert('Adicionar quadrinho ao carrinho', 'Quadrinho adicionado ao carrinho com sucesso!');
        } else {
            comic.quantity = 1;

            setComicCartList([...comicCartList, comic]);
            Alert.alert('Adicionar quadrinho ao carrinho', 'Quadrinho adicionado ao carrinho com sucesso!');
        }
    }

    function removeComicFromCart(comic: ComicProps): void {
        const hasComicOnCartList = comicCartList.includes(comic);

        if (hasComicOnCartList) {
            const listWithComicRemoved = comicCartList.filter(comicData => {
                if (comicData.id === comic.id) {
                    if (comicData.quantity > 1) {
                        comicData.quantity = comicData.quantity - 1;
                        return comicData;
                    }
                } else {
                    return comicData;
                }
            });
            setComicCartList([...listWithComicRemoved]);
            Alert.alert('Remover quadrinho ao carrinho', 'Quadrinho removido do carrinho com sucesso!');
        }
    }

    function validateCoupon(value: number, coupon: string): number {
        if (couponUsed?.value !== coupon) {
            const couponValidated = CouponList.filter(couponData => {
                if (couponData.value === coupon) {
                    return couponData;
                }
            })

            if (couponValidated.length > 0) {
                if (!couponValidated[0].isRare) {
                    const virifyComicRareOnCart = comicCartList.filter(comic => {
                        if (comic.rare) {
                            return comic;
                        }
                    });

                    if (virifyComicRareOnCart.length > 0) {
                        Alert.alert('Cupom', 'Não foi possível adicionar cupom, existem quadrinhos raros no carrinho e o cupom não é raro!');
                        return value;
                    } else {
                        const discount = value * 0.1;
                        setCouponUsed(couponValidated[0]);
                        Alert.alert('Cupom', 'Cupom aplicado com sucesso!');
                        return Number((value - discount).toFixed(2));
                    }
                } else {
                    const discount = value * 0.25;
                    setCouponUsed(couponValidated[0]);
                    Alert.alert('Cupom', 'Cupom aplicado com sucesso!');
                    return Number((value - discount).toFixed(2));
                }
            } else {
                Alert.alert('Cupom', 'Cupom não existe!');
                return value;
            }
        } else {
            Alert.alert('Cupom', 'Cupom já utilizado!');
            return value;
        }
    }

    function verifyDiscount(value: number): number {
        if (couponUsed && couponUsed.isRare) {
            return Number((value * 0.25).toFixed(2));
        } else if (Object.keys(couponUsed).length > 0) {
            const verifyComicRare = comicCartList.filter(comicData => {
                if (comicData.rare) {
                    return comicData;
                }
            });

            if (verifyComicRare.length > 0) {
                Alert.alert('Cupom', 'Algum quadrinho adicionado é raro, e o cupom utilizado não era, o cupom foi removido!');
                setCouponUsed({} as CouponProps);
                return 0;
            } else {
                return Number((value * 0.10).toFixed(2));
            }
        } else {
            return 0;
        }
    }

    return (
        <ComicContext.Provider value={{
            comicList,
            fetchComics,
            isRefreshing,
            reachedComics,
            comicCartList,
            validateCoupon,
            addComicToCart,
            removeComicFromCart,
            verifyDiscount
        }}>
            {children}
        </ComicContext.Provider>
    )
}

function useComic() {
    const context = useContext(ComicContext);

    return context;
}

export { ComicProvider, useComic }