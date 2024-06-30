"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(3, (item, index, i0) => {
      return {
        a: "0f7520f0-0-" + i0,
        b: "0f7520f0-1-" + i0
      };
    }),
    b: common_vendor.p({
      type: "download-filled",
      size: "20",
      color: "#28b389"
    }),
    c: common_vendor.p({
      type: "right",
      size: "15",
      color: "#aaa"
    }),
    d: common_vendor.f(2, (item, index, i0) => {
      return {
        a: "0f7520f0-2-" + i0,
        b: "0f7520f0-3-" + i0
      };
    }),
    e: common_vendor.p({
      type: "download-filled",
      size: "20",
      color: "#28b389"
    }),
    f: common_vendor.p({
      type: "right",
      size: "15",
      color: "#aaa"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f7520f0"], ["__file", "C:/Users/wei/Desktop/WEB/uniappVue3/wallpaper/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
