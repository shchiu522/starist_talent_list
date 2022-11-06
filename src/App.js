// import logo from './logo.svg';
import './App.scss';
import { useState } from "react";
import { TalentList, Talent } from './TalentList';
import Dropdown from './Dropdown';
import { Header } from './Header';
import { ContentDetail, ContentTitle } from './Detail';
import { GENDER_FEMALE } from './constant';


const text1 = `Tobot機器戰士 S1/奥花、歷森 \n魔幻陀螺1亞特\n 魔幻陀螺4/韓躍 \n動感火車家族/米歇爾、絲提拉、 Thomas\n 動感火車家族2/米歇爾、絲提拉、鐵路 仔 Thomas\n 魔法俏公主 /jouju \n魔法俏公主之來自星星的女神 S1/jouju\n 魔法俏公主之來自星星的女神 S2/ouiu\n 熊熊樂園S1/紫羅䕡\n 熊熊樂園 S2/紫羅蘭\n 有營俠大冒險/Olie媽媽 \n芭比夢幻屋冒險旅程 2/黛茜高斯珮洛斯 \n積木戰士 /蜂須賀忠希\n 衝鋒力奇/戴娜、達沙 \n小巴士 Tayo/Trammy Nuri`;

function ContentHeader() {
  return <div className={"content-header"}>
    <div>
      <h2>配音員</h2>
      <div className={`custom-border yellow`}></div>
    </div>
    <Dropdown />

  </div>;
}

function DetailHeader(props) {
  return <div className={"content-header"}>
    <div>
      <h2>{props.name}</h2>
      <div className={`custom-border pink`}></div>
    </div>

  </div>;
}

function MainContent(props) {
  return (<section className={'body'}>
    {props.children}
  </section>);
}

function App() {
  const [talent, setTalent] = useState(['test', 'test2']);
  const [talentDetail, setTalentDetail] = useState(null);

  const talentOnClick = () => {
    setTalentDetail(true);
  }
  return (
    <div className="App">
      <Header />
      <MainContent>
        {talentDetail !== null
          ? (<>
            <DetailHeader name={"王曉霖"} />
            <ContentTitle text={'Viu'} />
            <ContentDetail text={text1} />
            <ContentTitle text={'綜藝'} />
            <ContentDetail text={'生活小貼士/柳原可奈子'} />
            <ContentTitle text={'劇集'} />
            <ContentDetail text={'警視廳生物系/三笠彌生 \n Andante/李靜秀、秀彬\n 偵探物語 SP/新井直美'} />
            <ContentTitle text={'廣播劇'} />
            <ContentDetail text={'偽裝學渣/許晴晴\n 香港電台 蜂蜜學園/工蜂之星\n 我的鱷魚朋友 /Rita'} />
            <ContentTitle text={'香港電台'} />
            <ContentDetail text={'蜂蜜學園/工蜂之星\n 我的鱷魚朋友 /Rita'} />
          </>
          ) :
          (<>
            <ContentHeader />
            <TalentList >
              {talent.map(i => (
                <Talent item={i} onClick={talentOnClick} gender={GENDER_FEMALE} />
              ))}
            </TalentList >
          </>
          )}
      </MainContent>
    </div>);
}

export default App;
