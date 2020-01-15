import React from "react";
import ReactDOM from "react-dom";
import * as S from "./style.js";
import icon_loading from "../../../assets/images/loading.gif";

const ToastLoadSection = ({ ...props }) => {
  const { children } = props;
  return (
    <S.ToastContainer>
      <S.ToastBox>
        <img src={icon_loading} alt="" />
        <span>{children}</span>
      </S.ToastBox>
    </S.ToastContainer>
  );
};

export default class Toast extends React.Component {
  render() {
    return <ToastLoadSection show={true} {...this.props} />;
  }
}

class ToastProxy {
  constructor(component) {
    this.node = document.createElement("div");
    document.body.appendChild(this.node);
    ReactDOM.render(component, this.node);
  }

  cancel() {
    ReactDOM.unmountComponentAtNode(this.node);
  }
}

const ToastManager = {
  show(component) {
    const proxy = new ToastProxy(component);
    return proxy;
  },
  showLoading(content) {
    return ToastManager.show(<Toast icon="loading">{content}</Toast>);
  }
};

export { Toast, ToastManager };
