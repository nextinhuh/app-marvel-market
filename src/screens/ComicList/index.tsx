import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { Container, Header } from './styles';
import { api } from '../../api';

import { Search } from '@components/Search'
import { Divider } from '@components/Divider';
import { ComicCard } from '@components/ComicCard';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export type ComicProps = {
    id: string;
    price: number;
    title: string;
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

export function ComicList() {
    const [refreshing, setRefreshing] = useState<any>(false);
    const [search, setSearch] = useState('');
    const [comicsLimit, setComicsLimit] = useState(8);
    const [comicList, setComicList] = useState<ComicProps[]>([]);

    const navigation = useNavigation();

    function fetchComics() {
        api.get<ResponseProps>(`/comics?format=comic&formatType=comic&noVariants=true&&dateDescriptor=thisMonth&limit=${comicsLimit}`)
            .then(response => {
                const dataFiltred: ComicProps[] = [];

                response.data.data.results.map(comic => {
                    dataFiltred.push({
                        id: comic.id,
                        price: Number((Math.random() * 6553 / 100).toFixed(2)),
                        title: comic.title,
                        description: comic.description,
                        uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                        creators: comic.creators.items,
                        dates: comic.dates
                    })
                });

                setComicList(dataFiltred);
            })
            .catch(err => {
                console.log(err)
            });
    }

    function handleSearch() { }

    function handleSearchClear() {
        setSearch('');
    }

    function handleDetail(comic: ComicProps) {
        navigation.navigate('detail', { comic });
    }

    function handleBuy(comic: ComicProps) {
        //navigation.navigate('detail', { id });
    }

    useEffect(() => {
        fetchComics();
    }, [])

    async function handleReached() {
        setRefreshing(true);
        setComicsLimit(comicsLimit + 8);
        if (comicsLimit <= 40) {
            await api.get<ResponseProps>(`/comics?format=comic&formatType=comic&noVariants=true&&dateDescriptor=thisMonth&limit=${comicsLimit}`)
                .then(response => {
                    const dataFiltred: ComicProps[] = [];

                    response.data.data.results.map((comic) => {
                        dataFiltred.push({
                            id: comic.id,
                            price: Number((Math.random() * 6553 / 100).toFixed(2)),
                            title: comic.title,
                            description: comic.description,
                            uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                            creators: comic.creators.items,
                            dates: comic.dates
                        })
                    });
                    setComicList(dataFiltred);
                    setRefreshing(false);
                })
                .catch(err => {
                    console.log(err)
                });
        } else {
            setRefreshing(false);
        }
    }

    return (
        <Container>
            <Header>
                <Search
                    onChangeText={setSearch}
                    value={search}
                    onSearch={handleSearch}
                    onClear={handleSearchClear}
                />

                <Divider
                    style={{ marginTop: 40, height: 3 }}
                />

            </Header>

            <FlatList
                data={comicList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ComicCard
                        title={item.title}
                        uri={item.uri}
                        onDetail={() => handleDetail(item)}
                        onBuy={() => handleDetail(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    marginHorizontal: 24,
                    paddingBottom: 90,
                }}
                onEndReached={handleReached}
                onEndReachedThreshold={0.5}
                refreshing={refreshing}
                ListFooterComponent={() => {
                    if (refreshing) {
                        return (
                            <ActivityIndicator
                                color="white"
                                size={24}
                            />
                        );
                    } else {
                        return null;
                    }
                }}
            />


        </Container>
    );
}