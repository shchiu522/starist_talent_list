// import logo from './logo.svg';
import './App.scss';
import { useState } from "react";
import { TalentList, Talent } from './TalentList';
import Dropdown from './Dropdown';
import { Header } from './Header';
import { ContentDetail, ContentTitle, AudioDetail } from './TalentDetail';
import { GENDER_FEMALE } from './constant';

const text1 = `Tobot機器戰士 S1/奥花、歷森 \n魔幻陀螺1/亞特\n 魔幻陀螺4/韓躍 \n動感火車家族/米歇爾、絲提拉、 Thomas\n 動感火車家族2/米歇爾、絲提拉、鐵路 仔 Thomas\n 魔法俏公主 /jouju \n魔法俏公主之來自星星的女神 S1/jouju\n 魔法俏公主之來自星星的女神 S2/ouiu\n 熊熊樂園S1/紫羅䕡\n 熊熊樂園 S2/紫羅蘭\n 有營俠大冒險/Olie媽媽 \n芭比夢幻屋冒險旅程 2/黛茜高斯珮洛斯 \n積木戰士 /蜂須賀忠希\n 衝鋒力奇/戴娜、達沙 \n小巴士 Tayo/Trammy Nuri`;

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
    <div className='social-icon-container'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.9328 7.05204C23.8752 5.77422 23.6687 4.89992 23.3759 4.13611C23.0686 3.34828 22.6605 2.67574 21.9932 2.01281C21.3259 1.34988 20.6585 0.931946 19.8712 0.629304C19.1078 0.331465 18.234 0.129704 16.957 0.0720576C15.6751 0.0144115 15.2671 0 12.012 0C8.75215 0 8.34407 0.0144115 7.06701 0.0720576C5.78996 0.129704 4.91618 0.336269 4.15283 0.629304C3.36067 0.93675 2.68854 1.34508 2.02601 2.01281C1.36347 2.68054 0.945791 3.34828 0.64333 4.13611C0.350471 4.89992 0.14403 5.77422 0.0864187 7.05204C0.0288072 8.33467 0.0144043 8.743 0.0144043 12C0.0144043 15.2618 0.0288072 15.6701 0.0864187 16.948C0.14403 18.2258 0.350471 19.1001 0.64333 19.8639C0.950592 20.6517 1.35867 21.3243 2.02601 21.9872C2.68854 22.6549 3.36067 23.0681 4.14803 23.3707C4.91138 23.6685 5.78516 23.8703 7.06221 23.9279C8.34407 23.9856 8.75215 24 12.0072 24C15.2671 24 15.6751 23.9856 16.9522 23.9279C18.2292 23.8703 19.103 23.6637 19.8664 23.3707C20.6537 23.0633 21.3259 22.6549 21.9884 21.9872C22.6509 21.3195 23.0686 20.6517 23.3711 19.8639C23.6687 19.1001 23.8704 18.2258 23.928 16.948C23.9856 15.6653 24 15.257 24 12C24 8.743 23.9904 8.32986 23.9328 7.05204ZM21.7772 16.8519C21.7243 18.024 21.5275 18.6629 21.3643 19.0809C21.1482 19.6381 20.8842 20.0416 20.4617 20.4644C20.0392 20.8871 19.6407 21.1417 19.079 21.3675C18.6565 21.5308 18.018 21.7278 16.8514 21.7806C15.5887 21.8383 15.2094 21.8527 12.0024 21.8527C8.79536 21.8527 8.41608 21.8383 7.15343 21.7806C5.982 21.7278 5.34347 21.5308 4.92579 21.3675C4.36888 21.1513 3.96559 20.8871 3.54311 20.4644C3.12063 20.0416 2.86617 19.6429 2.64053 19.0809C2.4773 18.6581 2.28046 18.0192 2.22765 16.8519C2.17004 15.5885 2.15563 15.209 2.15563 12C2.15563 8.79103 2.17004 8.41153 2.22765 7.14812C2.28046 5.97598 2.4773 5.33707 2.64053 4.91914C2.85657 4.36189 3.12063 3.95837 3.54311 3.53563C3.96559 3.11289 4.36407 2.85829 4.92579 2.63251C5.34827 2.46918 5.9868 2.27222 7.15343 2.21938C8.41608 2.16173 8.79536 2.14732 12.0024 2.14732C15.2094 2.14732 15.5887 2.16173 16.8514 2.21938C18.0228 2.27222 18.6613 2.46918 19.079 2.63251C19.6359 2.84868 20.0392 3.11289 20.4617 3.53563C20.8842 3.95837 21.1386 4.35709 21.3643 4.91914C21.5275 5.34187 21.7243 5.98079 21.7772 7.14812C21.8348 8.41153 21.8492 8.79103 21.8492 12C21.8492 15.209 21.83 15.5885 21.7772 16.8519Z" fill="black" />
        <path d="M12.0024 5.83191C8.59376 5.83191 5.83801 8.59412 5.83801 12C5.83801 15.4108 8.59856 18.1682 12.0024 18.1682C15.4063 18.1682 18.1669 15.4012 18.1669 12C18.1669 8.58931 15.4111 5.83191 12.0024 5.83191ZM12.0024 16.0016C9.794 16.0016 8.00325 14.2098 8.00325 12C8.00325 9.79028 9.794 7.99844 12.0024 7.99844C14.2109 7.99844 16.0016 9.79028 16.0016 12C16.0016 14.2098 14.2109 16.0016 12.0024 16.0016Z" fill="black" />
        <path d="M18.4069 7.03282C19.2024 7.03282 19.8472 6.38759 19.8472 5.59167C19.8472 4.79574 19.2024 4.15051 18.4069 4.15051C17.6115 4.15051 16.9666 4.79574 16.9666 5.59167C16.9666 6.38759 17.6115 7.03282 18.4069 7.03282Z" fill="black" />
        <path d="M0 12C0 15.2618 0.0144029 15.6701 0.0720144 16.948C0.129626 18.2258 0.336067 19.1001 0.628926 19.8639C0.936187 20.6517 1.34427 21.3243 2.0116 21.9872C2.67413 22.6501 3.34627 23.0681 4.13363 23.3707C4.89698 23.6685 5.77075 23.8703 7.04781 23.9279C8.32967 23.9856 8.73775 24 11.9928 24C15.2527 24 15.6607 23.9856 16.9378 23.9279C18.2148 23.8703 19.0886 23.6637 19.852 23.3707C20.6393 23.0633 21.3115 22.6549 21.974 21.9872C22.6365 21.3243 23.0542 20.6517 23.3567 19.8639C23.6543 19.1001 23.856 18.2258 23.9136 16.948C23.9712 15.6653 23.9856 15.257 23.9856 12C23.9856 8.73819 23.9712 8.32986 23.9136 7.05204C23.856 5.77422 23.6495 4.89992 23.3567 4.13611C23.0494 3.34828 22.6413 2.67574 21.974 2.01281C21.3163 1.34508 20.6441 0.931946 19.8568 0.629304C19.0934 0.331465 18.2196 0.129704 16.9426 0.0720576C15.6607 0.0144115 15.2527 0 11.9976 0C8.73775 0 8.32967 0.0144115 7.05261 0.0720576C5.77555 0.129704 4.90178 0.336269 4.13843 0.629304C3.35107 0.93675 2.67894 1.34508 2.0164 2.01281C1.35387 2.68054 0.936187 3.34828 0.633727 4.13611C0.336067 4.89992 0.129626 5.77422 0.0720144 7.05204C0.0144029 8.32986 0 8.73819 0 12ZM2.16523 12C2.16523 8.79584 2.17964 8.41153 2.23725 7.14812C2.29006 5.97598 2.4869 5.33707 2.65013 4.91914C2.86617 4.36189 3.13023 3.95837 3.55271 3.53563C3.97519 3.11289 4.37367 2.85829 4.93539 2.63251C5.35787 2.46918 5.9964 2.27222 7.16303 2.21938C8.42568 2.16173 8.80496 2.14732 12.012 2.14732C15.219 2.14732 15.5983 2.16173 16.861 2.21938C18.0324 2.27222 18.6709 2.46918 19.0886 2.63251C19.6455 2.84868 20.0488 3.11289 20.4713 3.53563C20.8938 3.95837 21.1482 4.35709 21.3739 4.91914C21.5371 5.34187 21.7339 5.98079 21.7868 7.14812C21.8444 8.41153 21.8588 8.79103 21.8588 12C21.8588 15.209 21.8444 15.5885 21.7868 16.8519C21.7339 18.024 21.5371 18.6629 21.3739 19.0809C21.1578 19.6381 20.8938 20.0416 20.4713 20.4644C20.0488 20.8871 19.6503 21.1417 19.0886 21.3675C18.6661 21.5308 18.0276 21.7278 16.861 21.7806C15.5983 21.8383 15.219 21.8527 12.012 21.8527C8.80496 21.8527 8.42568 21.8383 7.16303 21.7806C5.9916 21.7278 5.35307 21.5308 4.93539 21.3675C4.37848 21.1513 3.97519 20.8871 3.55271 20.4644C3.13023 20.0416 2.87578 19.6429 2.65013 19.0809C2.4869 18.6581 2.29006 18.0192 2.23725 16.8519C2.17483 15.5885 2.16523 15.2042 2.16523 12Z" fill="black" />
      </svg>
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
      <Header onClick={() => {
        setTalentDetail(null)
      }} />
      <MainContent>
        {talentDetail !== null
          ? (<>
            <DetailHeader name={"王曉霖"} />
            <AudioDetail audio={[1, 2]} />
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
