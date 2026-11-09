"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";
import { Network } from "@capacitor/network";

export function useMobileApp() {
  const pathname = usePathname();
  const router = useRouter();
  const [isNative, setIsNative] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [showExitToast, setShowExitToast] = useState(false);

  const lastBackPressTimeRef = useRef<number>(0);

  useEffect(() => {
    const native = Capacitor.isNativePlatform();
    setIsNative(native);

    // Initial network status
    Network.getStatus().then((status) => {
      setIsOnline(status.connected);
    }).catch(() => {
      setIsOnline(navigator.onLine);
    });

    // Listen for network changes
    const networkListener = Network.addListener("networkStatusChange", (status) => {
      setIsOnline(status.connected);
    });

    // Browser online/offline event listeners fallback
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (native) {
      // 1. Initialize Native Status Bar
      StatusBar.setStyle({ style: Style.Dark }).catch(() => {});
      StatusBar.setBackgroundColor({ color: "#060913" }).catch(() => {});
      StatusBar.setOverlaysWebView({ overlay: false }).catch(() => {});

      // 2. Hide Splash Screen smoothly once Next.js has mounted
      SplashScreen.hide({ fadeOutDuration: 400 }).catch(() => {});

      // 3. Hardware Back Button Navigation Handler
      const backButtonListener = App.addListener("backButton", () => {
        // If not on root page, go back in history
        if (pathname && pathname !== "/") {
          router.back();
          return;
        }

        // On root page ('/'): Implement double-back to exit logic
        const now = Date.now();
        if (now - lastBackPressTimeRef.current < 2000) {
          App.exitApp();
        } else {
          lastBackPressTimeRef.current = now;
          setShowExitToast(true);
          setTimeout(() => {
            setShowExitToast(false);
          }, 2000);
        }
      });

      return () => {
        networkListener.then((h) => h.remove()).catch(() => {});
        backButtonListener.then((h) => h.remove()).catch(() => {});
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }

    return () => {
      networkListener.then((h) => h.remove()).catch(() => {});
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [pathname, router]);

  return {
    isNative,
    isOnline,
    showExitToast,
  };
}
