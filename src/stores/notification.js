import { defineStore } from "pinia";
import { ElNotification } from "element-plus";

export const useNotification = defineStore("Notification", {
  state: () => ({
    type: {
      success: "success",
      warning: "warning",
      info: "info",
      error: "error",
    },
  }),

  actions: {
    async Success(msg) {
      ElNotification({
        title: "Success",
        message: msg,
        type: this.type.success,
        position: "top-left",
      });
    },

    async Warning(msg) {
      ElNotification({
        title: "Warning",
        message: msg,
        type: this.type.warning,
        position: "top-left",
      });
    },

    async Info(msg) {
      ElNotification({
        title: "Info",
        message: msg,
        type: this.type.info,
        position: "top-left",
      });
    },

    async Error(msg) {
      ElNotification({
        title: "Error",
        message: msg,
        type: this.type.error,
        position: "top-left",
      });
    },
  },
});
