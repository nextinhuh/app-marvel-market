import React, { useEffect, useState } from 'react';

import { Container, Header } from './styles';

import { Search } from '@components/Search'
import { Divider } from '@components/Divider';
import { FlatList } from 'react-native';
import { api } from '../../api';
import { ComicCard } from '@components/ComicCard';

type ComicProps = {
    id: string;
    title: string;
    description: string;
    uri: string;
}

type ComicResponseProps = {
    id: string;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}

type ResponseProps = {
    data: {
        results: ComicResponseProps[];
    }
}

export function ComicList() {
    const [search, setSearch] = useState('');
    const [comicList, setComicList] = useState<ComicProps[]>([]);

    function handleSearch() { }
    function handleSearchClear() {
        setSearch('');
    }

    useEffect(() => {
        api.get<ResponseProps>('/comics?format=comic&formatType=comic&noVariants=true&limit=1&dateDescriptor=thisMonth')
            .then(response => {
                const dataFiltred: ComicProps[] = [];

                response.data.data.results.map(comic => {
                    dataFiltred.push({
                        id: comic.id,
                        title: comic.title,
                        description: comic.description,
                        uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                    })
                });

                setComicList(dataFiltred);
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

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
                        uri={item.uri}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    paddingBottom: 125,
                    marginHorizontal: 24
                }}
            />


        </Container>
    );
}