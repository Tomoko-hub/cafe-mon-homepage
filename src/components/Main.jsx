import React from 'react';
import pic from "../images/cafe6.jpg";

const Main = () => {
  return (
    <main role="main">
      <div className="container">
        {/*<!-- Example row of columns -->*/}
        <div className='mainPicture'>
          <img src={pic} className="img-fluid" alt="..."></img>
        </div>
        <div className="row">
          <div className="row-md-6">
            <h2>メニュー</h2>
            <p>ハンドドリップで淹れた引きたての薫り高いコーヒーが当店の自慢のメニュー。コーヒーは一粒一粒丁寧に厳選した豆を使用、焙煎も行っています。手作りケーキと共に是非お召し上がりください。沖縄の熱い
              夏は氷ぜんざい、寒い冬はホットぜんざいなど、季節によって楽しめる商品も当店の人気商品のひとつです。</p>
            <hr />
            <p>メニューを見る</p>
          </div>
          <div className="row-md-6">
            <h2>場所</h2>
            <p>国際通り旧三越前の平和通り商店街入口で創業。現在あるたくさんのカフェや喫茶店の先駆けとなる戦後の沖縄を象徴する喫茶店として、長い間皆さまに愛されてきました。クラシック音楽を聞きながら、当店自慢のコーヒーを片手に皆さまも日常の喧騒から離れ、のんびりおくつろぎください。</p>
            <hr />
            <p>Googleマップで場所を確認する</p>
          </div>
          <div className="row-md-6">
            <h2>ギフト</h2>
            <p>お歳暮やお中元、出産祝いや季節のご挨拶などに当店自慢の自家焙煎コーヒーはいかがですか？一粒一粒大切に焙煎された薫り高いコーヒーは、日ごろお世話になっている方への贈り物にぴったりです。コーヒー豆の入荷状況もございますので、一か月前のご注文から承っております。コーヒーの好みなど、お気軽にご相談ください。</p>
            <hr />
            <p>自家焙煎コーヒーを注文する</p>
          </div>
        </div>

        <hr />

      </div> {/*<!-- /container -->*/}


    </main>
  )
}

export default Main