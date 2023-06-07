import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "next-capacitor",
  webDir: ".next/server/app",
  server: {
    url: "http://192.168.11.3:3000",
    cleartext: true,
    androidScheme: "http",
  },
};

export default config;
