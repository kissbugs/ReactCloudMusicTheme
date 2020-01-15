import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
export const TabPane = ({ ...props }) => {
  return props.children;
};

TabPane.propTypes = {
  children: PropTypes.node,
  tab: PropTypes.any,
  styles: PropTypes.string,
  active: PropTypes.string
};

export const Tabs = ({ ...props }) => {
  const initialValue = props.defaultActiveIndex || 0;
  const [activeIndex, setActiveIndex] = useState(initialValue);
  const tabsArray = [];

  const defaultAct = (child, e) => {
    const dataId = e.currentTarget.getAttribute("data-id");
    setActiveIndex(dataId);
    if (props.animatedTabTitle) {
      locater(dataId);
    }
    if (child.props.onClick && typeof child.props.onClick === "function") {
      child.props.onClick(e);
    }
    if (typeof props.defaultAction === "function") {
      props.defaultAction(e, dataId);
    }
  };
  const loopTabs = () => {
    let contents = [];
    React.Children.forEach(props.children, (child, index) => {
      let tab = "";
      // 提取tab title
      if (tabsArray[index]) {
        tab = React.cloneElement(
          tabsArray[index],
          {
            className: `_tab_group_container ${child.props.styles} ${
              activeIndex == index ? child.props.activeStyle : ""
            }`,
            "data-id": index,
            onClick: defaultAct.bind(null, child)
          },
          child.props.tab
        );
        tabsArray.splice(index, 1, tab);
      } else {
        tab = React.createElement(
          "div",
          {
            className: `_tab_group_container ${child.props.styles} ${
              activeIndex == index ? child.props.activeStyle : ""
            }`,
            "data-id": index,
            onClick: defaultAct.bind(null, child),
            key: `${tabsArray.length}`
          },
          child.props.tab
        );
        tabsArray.push(tab);
      }

      // 提取tab对应的内容
      if (activeIndex != index) {
        return;
      }
      if (typeof child.props.children === "string") {
        contents.push(child.props.children);
        return;
      }
      if (child.type) {
        contents.push(React.cloneElement(child.props.children, { key: index }));
      } else {
        return child.props.children;
      }
    });
    return { tabs: tabsArray, contents };
  };

  const locater = activeIndex => {
    const containers = document.getElementsByClassName("_tab_group_container");
    const galleryGroupContainer = document.getElementById(
      "_tabs_group_container"
    );
    const containerArr = [].slice.call(containers, 0);
    let activeItemWidth = 0;
    let normalItemsWidth = 0;
    for (const [index, container] of containerArr.entries()) {
      if (index == activeIndex) {
        activeItemWidth = container.offsetWidth;
        const scroll =
          normalItemsWidth +
          activeItemWidth / 2 -
          galleryGroupContainer.offsetWidth / 2;

        // setTimeout(
        //   () =>
        //     $("#_tabs_group_container").animate({ scrollLeft: scroll }, 500),
        //   100
        // );

        break;
      }
      const style =
        container.currentStyle || window.getComputedStyle(container);
      const marginLeft = style.marginLeft.replace("px", "");
      if (marginLeft > 0) {
        normalItemsWidth =
          parseInt(normalItemsWidth) +
          parseInt(container.offsetWidth) +
          parseInt(marginLeft);
      } else {
        normalItemsWidth =
          parseInt(normalItemsWidth) + parseInt(container.offsetWidth);
      }
    }
  };

  useEffect(() => {
    if (props.animatedTabTitle) {
      locater(activeIndex);
    }
  }, []);

  const { tabs, contents } = loopTabs();
  return [
    <div className={props.styles} key={"tab"} id="_tabs_group_container">
      {tabs}
    </div>,
    contents
  ];
};
Tabs.propTypes = {
  children: PropTypes.node,
  defaultAction: PropTypes.func,
  styles: PropTypes.string,
  defaultActiveIndex: PropTypes.number,
  animatedTabTitle: PropTypes.bool
};
Tabs.defaultProps = {
  animatedTabTitle: false
};
