import React from "react";
import ReactDOM from "react-dom";

class ModalManage {
  constructor(options) {
    this.pastDelay = options.pastDelay || 200;
    this.content = options.render;
    this.modalRoot = document.getElementById("portal_root");
    if (!this.modalRoot || options.isCreateModalDynamic) {
      this.modalRoot = document.createElement("div");
      document.body.appendChild(this.modalRoot);
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.fakeClose = this.fakeClose.bind(this);
    this.fakeClosed = false;
    this.rendered = false;
    this.closedTimer = null;
  }

  open(extraProps, forcedOpened = false) {
    if (this.fakeClosed && !forcedOpened) {
      this._clearFakedClose();
      this.modalRoot.style.display = "block";
      return;
    }

    if (forcedOpened) {
      const root = document.getElementById("portal_root");
      if (root.children && root.children.length) {
        this.modalRoot.style.display = "block";
        this.close();
      }
    }

    let { content } = this;

    if (typeof content === "function") {
      content = content(this.open, this.close, this.fakeClose, extraProps);
    }

    ReactDOM.render(content, this.modalRoot);
  }

  _clearFakedClose = () => {
    if (this.closedTimer) {
      clearTimeout(this.closedTimer);
      document.body.removeChild(this.closedTimer);
    }
  };

  close() {
    this._clearFakedClose();
    ReactDOM.unmountComponentAtNode(this.modalRoot);
    this.fakeClosed = false;
  }

  fakeClose() {
    this.modalRoot.style.display = "none";
    this.fakeClosed = true;
    this._clearFakedClose();
    this.closedTimer = setTimeout(() => {
      try {
        this.close();
        this.modalRoot.style.display = "block";
      } catch (e) {
        console.error(e)
      }
    }, 20000);
  }
}

export default ModalManage;
