"use client"

import React from "react";
import Header from "./Nanbar/index"
import Footer from "./Footer/Footer"
import './fonts.css'
import './layout.css'
import ScrollToTop from "@/app/ScrollToTop";

import { useState, useEffect } from 'react';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  ScrollToTop();

  const [already, setAlready] = useState(true);
  const [deleteLoading, setdeleteLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setAlready(false);
        setTimeout(() => {
          setdeleteLoading(false);
        }, 500);
      }, 200);
      return () => clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      // ページがすでに読み込まれている場合
      handleLoad();
    } else {
      // ページの読み込み完了イベントを待つ
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, maximum-scale=6.0, user-scalable=yes"></meta>
          <title>超生活鯖 - マイクラ生活サーバー</title>
          <meta name="keywords" content="" />
          <meta name="description" content="マインクラフト生活サーバー「超生活鯖」の公式ホームページです。2022年より開始した24時間サーバーです。" />
        </head>
        <body>
            {deleteLoading && (
              <div className={`loading ${already ? "" : "end"}`}><noscript className="enableJS"><h1>JavaScriptを有効にする<br />必要があります。</h1></noscript></div>
            )}
            <Header />
            <main>{children}</main>
            <Footer />
        </body>
      </html>
  )
}
