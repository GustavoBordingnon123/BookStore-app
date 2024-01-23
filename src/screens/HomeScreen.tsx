import React, { useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import { FlatList } from 'react-native';
import CoffeeCard from '../components/CoffeeCard';
import { Dimensions } from 'react-native';
import Search from '../assets/icons/search';
import GetCategories from '../../actions/getCategories';
import getProducts from '../../actions/getProducts';
import { Product } from '../../types';

interface Category {
  name: string;
}

const HomeScreen = ({ navigation }: any) => {
  
  const BookList = useStore((state: any) => state.BookList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [categories, setCategories] = useState<string[]>([]);
  const [allBooks, setAllBooks] = useState<any[]>([]); // [
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });

  const getBookByCategory = (category: string, data: any) => {
    if (!data) {
      return [];
    }

    if (category === 'All') {
      return data;
    } else {
      return data.filter((item: any) =>
        item?.category?.name === category || !item?.category
      );
    }
  };


  const [sortedBook, setsortedBook] = useState(
    getBookByCategory(categoryIndex.category, BookList),
  );

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  const fetchCategories = async () => {
    try {
      const categoriesFromApi: Category[] = await GetCategories();
      setCategories(['All', ...categoriesFromApi.map(category => category.name)]);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const books: Product[] = await getProducts({ isFeatured: true });
        setsortedBook([...books]);
        setAllBooks([...books]);

      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
  }, []);

  // const searchCoffee = (search: string) => {
  //   if (search !== '') {
  //     ListRef?.current?.scrollToOffset({
  //       animated: true,
  //       offset: 0,
  //     });
  //     setCategoryIndex({ index: 0, category: categories[0] });
  //     setsortedBook([
  //       ...BookList.filter((item: any) =>
  //         item?.name.toLowerCase().includes(search.toLowerCase()),
  //       ),
  //     ]);
  //   }
  // };

  // const resetSearchCoffee = () => {
  //   ListRef?.current?.scrollToOffset({
  //     animated: true,
  //     offset: 0,
  //   });
  //   setCategoryIndex({ index: 0, category: categories[0] });
  //   setsortedBook([...BookList]);
  //   setSearchText('');
  // };

  const CoffeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlueHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        {/* App Header */}
        <HeaderBar title='BookStore' />

        <Text style={styles.ScreenTitle}>
          Encontre o livro{'\n'}ideal para você!
        </Text>

        {/* Search Input */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              // searchCoffee(searchText);
            }}
          >
            <CustomIcon
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
              icon={<Search />}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Encontre seu livro..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              // searchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryWhiteHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                // resetSearchCoffee();
              }}
            >
              <CustomIcon
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        {/* Category Scroller */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          {categories.map((category, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}
            >
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({ index: index, category: categories[index] });
                  setsortedBook([
                    ...getBookByCategory(category, allBooks),
                  ]);
                }}
              >
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index === index
                      ? { color: COLORS.primaryBlueHex }
                      : {},
                  ]}
                >
                  {category}
                </Text>
                {categoryIndex.index === index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee Flatlist */}
        <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>Nenhum livro encontrado.</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedBook}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('Details', {
                  index: item.id,
                  id: item.id,
                  type: item.name,
                });
              }}
            >
              <CoffeeCard
                id={item.id}
                index={item.id}
                type={item.name}
                roasted={item.name}
                imagelink_square={item.images[0]}
                name={item.name}
                category={item.category?.name}
                average_rating={4.5} // Use a propriedade real do livro se existir
                price={item.price}
                buttonPressHandler={CoffeCardAddToCart}
              />
            </TouchableOpacity>
          )}
        />

        <Text style={styles.CoffeeBeansTitle}>Livros sugeridos</Text>

        {/* Beans Flatlist */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedBook}
          contentContainerStyle={[
            styles.FlatListContainer,
            { marginBottom: tabBarHeight },
          ]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('Details', {
                  index: item.id,
                  id: item.id,
                  type: item.name,
                });
              }}
            >
              <CoffeeCard
                id={item.id}
                index={item.id}
                type={item.name}
                roasted={item.name}
                imagelink_square={item.images[0]}
                name={item.name}
                category={item.category?.name}
                average_rating={4.5} // Use a propriedade real do livro se existir
                price={item.price}
                buttonPressHandler={CoffeCardAddToCart}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.backGroundWhite,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryBlackHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.secondaryBlueHex,
    alignItems: 'center',
    paddingLeft: SPACING.space_10,
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.backGroundWhite,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryBlueHex,
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6,
  },
  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryBlackHex,
  },
});

export default HomeScreen;
