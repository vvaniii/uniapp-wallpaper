"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "custom-nav-bar",
  setup(__props) {
    let SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
    let statusBarHeight = common_vendor.ref(SYSTEM_INFO.statusBarHeight);
    let { height, top } = common_vendor.index.getMenuButtonBoundingClientRect();
    let titleBarHeight = common_vendor.ref(height + (top - statusBarHeight.value) * 2);
    console.log(titleBarHeight);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(statusBarHeight) + "px",
        b: common_vendor.p({
          type: "search",
          color: "#888",
          size: "18"
        }),
        c: common_vendor.unref(titleBarHeight) + "px",
        d: common_vendor.unref(statusBarHeight) + common_vendor.unref(titleBarHeight) + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-412fc155"], ["__file", "C:/Users/wei/Desktop/WEB/uniappVue3/wallpaper/components/custom-nav-bar/custom-nav-bar.vue"]]);
wx.createComponent(Component);
