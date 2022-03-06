import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container experience-container" id="experience">
      <h1>
        <span>02.</span> What I've Done
      </h1>
      <div className="experience-inner">
        <Tabs>
          <TabList>
            <Tab>
              <p>入社３年目</p>
            </Tab>
            <Tab>
              <p>入社２年目</p>
            </Tab>
            <Tab>
              <p>入社１年目</p>
            </Tab>
            <Tab>
              <p>大学時代</p>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="panel-content">
              <h3>@2021~現在</h3>
              <ul>
                <li>新規Webサイトの設計、制作、実装、リリース、保守を担当</li>
                <li>MAツール導入を支援</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h3>@2020~2021</h3>
              <ul>
                <li>社内外のウェブサイト開発、保守を担当</li>
                <li>RPAツールを使用し、社内の業務効率化推進。約50万円の人件費削減を達成</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h3>@2019~2020</h3>
              <ul>
                <li>モバイルアプリのフロントエンド開発を担当</li>
                <li>新規ウェブサイト開発、OCR開発を担当</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h3>@2014~2019</h3>
              <ul>
                <li>県内大学で国際地域学について学ぶ</li>
                <li>講義の1つで「C言語」を学ぶ機会があり、初めてプログラミングに触れる</li>
                <li>個人サイトを初めて立ち上げ、アクセス数向上のためにGoogleAnalytics、SearchConsole等を使用しながら 検索順位上位の記事をいくつか作成</li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
