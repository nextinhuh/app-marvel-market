import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Badge } from 'react-native-paper';

import { Container, Header } from './styles';

import { Search } from '@components/Search'
import { Divider } from '@components/Divider';
import { ComicCard } from '@components/ComicCard';
import { useNavigation } from '@react-navigation/native';
import { ComicProps, useComic } from '@hooks/comic';
import { Button } from '@components/Button';

export function ComicList() {
    const [search, setSearch] = useState('');

    const {
        fetchComics,
        isRefreshing,
        reachedComics,
        comicList,
        addComicToCart,
        comicCartList
    } = useComic();

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

                <Button
                    hasCartIcon
                    style={{
                        borderColor: '#fff',
                        alignSelf: 'flex-end',
                        marginTop: 20,
                        marginRight: 10,
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }}
                    onPress={handleCart}
                />

                <Badge
                    style={{
                        position: 'absolute',
                        top: 145,
                        right: 30,
                        backgroundColor: 'pink',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}
                >{comicCartList.length}</Badge>

                <Divider
                    style={{ marginTop: 20, height: 3 }}
                />

            </Header>



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