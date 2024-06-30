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
  __name: "user",
  setup(__props) {
    const clickGoClasslist = () => {
      common_vendor.index.navigateTo({
        url: "/pages/classlist/classlist"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        b: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        c: common_vendor.o(clickGoClasslist),
        d: common_vendor.p({
          type: "star-filled",
          size: "20"
        }),
        e: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        f: common_vendor.o(clickGoClasslist),
        g: common_vendor.p({
          type: "chatboxes-filled",
          size: "20"
        }),
        h: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        i: common_vendor.p({
          type: "notification-filled",
          size: "20"
        }),
        j: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        k: common_vendor.p({
          type: "flag-filled",
          size: "20"
        }),
        l: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "C:/Users/wei/Desktop/WEB/uniappVue3/wallpaper/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
