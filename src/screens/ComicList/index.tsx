import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { Container, Header } from './styles';

import { Search } from '@components/Search'
import { Divider } from '@components/Divider';
import { ComicCard } from '@components/ComicCard';
import { useNavigation } from '@react-navigation/native';
import { ComicProps, useComic } from '@hooks/comic';
import { Button } from '@components/Button';

export function ComicList() {
    const [search, setSearch] = useState('');

    const { fetchComics, isRefreshing, reachedComics, comicList, addComicToCart } = useComic();

    const navigation = useNavigation();

    function handleSearch() { }

    function handleSearchClear() {
        setSearch('');
    }

    function handleDetail(comic: ComicProps) {
        navigation.navigate('detail', { comic });
    }

    function handleCart() {
        navigation.navigate('cart');
    }

    function handleBuy(comic: ComicProps) {
        //navigation.navigate('detail', { id });
    }

    useEffect(() => {
        fetchComics();
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

            <Button
                hasCartIcon
                style={{
                    borderColor: '#fff',
                    alignSelf: 'flex-end',
                    marginRight: 30
                }}
                onPress={handleCart}
            />

            <FlatList
                data={comicList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ComicCard
                        hasDescription
                        comic={item}
                        onDetail={() => handleDetail(item)}
                        addComicToCart={() => addComicToCart(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    marginHorizontal: 24,
                    paddingBottom: 90,
                }}
                onEndReached={reachedComics}
                onEndReachedThreshold={0.5}
                refreshing={isRefreshing}
                ListFooterComponent={() => {
                    if (isRefreshing) {
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