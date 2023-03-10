import { FlatList, ListRenderItem } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { IFlatListData, IPagination, IPropsScreenName } from "./interface";
import { styles } from "./styles";
import Item from "./components/item";
import { NetWorkService } from "@network/configAPI";

import { parse } from "rss-to-json";

const DEFAULT_PAGINATION = { page: 1, limit: 10 };
const NewsList: FC<IPropsScreenName> = () => {
  const [data, setData] = useState<IFlatListData[] | undefined>([]);
  const [pagination, setPagination] = useState<IPagination>(DEFAULT_PAGINATION);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  //convert RSS to JSON
  const handleConvertRss = async () => {
    var rss = await parse("https://vnexpress.net/rss/tin-moi-nhat.rss");
    setData(rss.items as IFlatListData[]);
  };

  const renderItem: ListRenderItem<IFlatListData> = ({ item, index }) => {
    return <Item item={item} key={index} />;
  };

  //Because this link not provider pagination so Logic below is example
  //effect
  useEffect(() => {
    handleConvertRss();
    // loadData(1);
  }, []);

  //function
  const loadData = (page: number) => {
    setIsFetching(true);
    const param = {
      url: "https://vnexpress.net/rss/tin-moi-nhat.rss",
      param: "param",
      pagination: {
        page: page,
        limit: 10,
      },
    };
    NetWorkService.Get<IFlatListData[]>(param)
      .then((result) => {
        page > 1
          ? setData([...data, ...result?.data?.items])
          : setData(result?.data?.items);
        setPagination(result?.data?.pagination);
        setIsFetching(false);
      })
      .catch((error) => {
        setIsFetching(false);
        console.log(error);
      });
  };

  const loadMore = () => {
    const nextPage = pagination.page + 1;
    loadData(nextPage);
  };

  const onRefresh = () => {
    loadData(1);
  };

  //render
  return (
    <FlatList
      style={styles.container}
      onRefresh={onRefresh}
      refreshing={isFetching}
      data={data}
      renderItem={renderItem}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default NewsList;
