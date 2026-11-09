import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "in.brcstar.app",
  appName: "BRC STAR",
  webDir: "public",
  server: {
    url: "https://brcstar.in",
    cleartext: false,
    androidScheme: "https",
    allowNavigation: ["brcstar.in", "*.brcstar.in", "api.razorpay.com", "*.razorpay.com"],
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2200,
      launchAutoHide: true,
      launchFadeOutDuration: 400,
      backgroundColor: "#060913",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#060913",
      overlaysWebView: false,
    },
    App: {
      disableBackButtonHandler: false,
    },
  },
};

export default config;
