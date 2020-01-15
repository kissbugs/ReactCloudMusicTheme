import React from "react";
import { Tabs, TabPane } from "../../components/tabs/index.jsx";
import * as S from "./style.js";


const LeftSlideMenu = () => {
  const UNITS = [
    {
      name: "每日推荐",
    },
    {
      name: "歌单",
    },
    {
      name: "排行榜",
    },
    {
      name: "电台",
    }
  ];
  const tabClick = (e, activeTabIndex) => {
    console.log("activeTabIndex: ", activeTabIndex);
  };
  return (
    <S.TabsModuleContainer>
      <Tabs
        defaultAction={tabClick}
        styles="head_menu_ul clear_scroll_bar"
        defaultActiveIndex={Number(0)}
        // animatedTabTitle={true}
      >
        {UNITS.map((unit, index) => (
          <TabPane
            tab={unit.name}
            styles="head_menu_li"
            activeStyle="tab_light"
            key={index}
          >
            <div className="content">{unit.name}</div>
          </TabPane>
        ))}
      </Tabs>
    </S.TabsModuleContainer>
  );
};

export default LeftSlideMenu;
