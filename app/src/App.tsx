import React, {ComponentProps, useEffect, useMemo} from "react";
import {useLocation} from "react-router-dom";
import Providers from "@/components/Providers";
import { isAddress } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import SwapWidget from "@ensofinance/shortcuts-widget";

import logoUrl from "./logo_black_white.png";

import "@rainbow-me/rainbowkit/styles.css";
import useProjectInfo from "@/hooks/useProjectInfo";
// import "./App.css";
declare global {
  interface Window {
    Telegram: any
    TWidgetLogin: {
      auth: () => void
    }
    TelegramLoginWidget: {
      dataOnauth: (user: any) => void
    }
  }
}

const EnsoApiKey = import.meta.env.VITE_ENSO_API_KEY;

function App() {
  const location = useLocation();

  const projectInfo = useProjectInfo()

  const props = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tokenInParam = searchParams.get("tokenIn");
    const tokenOutParam = searchParams.get("tokenOut");
    const chainIdParam = searchParams.get("chainId");

    const props: ComponentProps<typeof SwapWidget> = {
      apiKey: EnsoApiKey,
    };

    if (chainIdParam) {
      props.chainId = parseInt(chainIdParam);
      if (isAddress(tokenInParam)) props.tokenIn = tokenInParam;
      if (isAddress(tokenOutParam)) props.tokenOut = tokenOutParam;
    }

    return props;
  }, [location]);

  const handleTelegramWidgetLogin = () => {
    if (typeof window !== "undefined") {
      window.Telegram.Login.auth(
        { bot_id: "7460472127", request_access: true },
        (data: string) => {
          console.log(data, "data");
        },
      )
    }
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://telegram.org/js/telegram-web-app.js?56"
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://telegram.org/js/telegram-widget.js"
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://telegram.org/js/widget-frame.js?63"
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Providers>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <img src={projectInfo?.logo || logoUrl} alt={"Enso"} style={{ height: "50px" }} />

        <ConnectButton />
      </div>
<button onClick={handleTelegramWidgetLogin}>tg</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <div style={{ marginTop: "70px" }}>
          <SwapWidget {...props} enableShare indicateRoute adaptive />
        </div>
        <div />
      </div>
    </Providers>
  );
}

export default App;
