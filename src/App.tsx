import React, { useState } from 'react';
import './App.css';
import Images from './componets/Images';

/** APP COMPONENT */
function App() {
  const [like, setLike] = useState(0);
  const [backgroundColorLike, setBackgroundColorLike] = useState('#e6e8ec');

  const [likeTwo, setLikeTwo] = useState(0);
  const [backgroundColorLikeTwo, setBackgroundColorLikeTwo] = useState('#e6e8ec');

  /** FUNCTION LIKE */
  function Like() {
    if (like === 0) {
      setLike(1)
      setBackgroundColorLike('#00c2fe');
    } else {
      setLike(0)
      setBackgroundColorLike('#e6e8ec');
    }
  }

  /** FUNCTION LIKE */
  function LikeTwo() {
    if (likeTwo === 0) {
      setLikeTwo(1)
      setBackgroundColorLikeTwo('#00c2fe');
    } else {
      setLikeTwo(0)
      setBackgroundColorLikeTwo('#e6e8ec');
    }
  }

  /** APP COMPONENT RETURN */
  return (
    <main className="App container">
      {/** PROFILE */}
      <section id="profile" className="container">
        <div className="background"></div>

        <img src={Images.Profile} alt="profile" className="profile-img container"/>

        <header id="header" className="container">
          <h1>Kenedy Morais</h1>
          <span><strong>@kenedymorais</strong></span>
          <span>Front-end Developer</span>
        </header>

        {/** INFORMATIONS */}
        <div className="container localization">
          <img src={Images.Maps} alt="mapa" className="icon" />
          <span>Rio Branco/Acre - Brasil</span>
        </div>

        <div className="container info">
          <div className="container incicle">
            <img src={Images.Building} alt="InCicle" className="icon" />
            <span>InCicle</span>
          </div>

          <div className="container uninorte">
            <img src={Images.Buromo} alt="InCicle" className="icon" />
            <span>Uninorte</span>
          </div>
        </div>
      </section>

      {/** GLOBAL cONTAINER COMMENT AND POST */}
      <section id="global" className="contaner">
        {/** COMMENT */}
        <section id="comment" className="container">
          <form action="#" method="post" className="container">
            <img src={Images.Comments} alt="Icons-Comments" className="icon" />
            <input 
              type="text" 
              name="publications" 
              id="publications"
              placeholder="Escreva uma publicação..."
            />

            <img src={Images.Photo} alt="Icons-Photos" className="icon" />
            <img src={Images.Video} alt="Icons-Video" className="icon" />
          </form>

          <p>ou <a
              className="incicle"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            > publique um artigo</a> na InCicle
          </p>
        </section>

        {/** POST */}
        <section className="container post">
          {/** HEADER POST */}
          <header className="container header-post">
            <img src={Images.Profile} alt="perfil" className="profile"/>
            <div className="container txt">
              <h2>Patricia Santos</h2>
              <p><img src={Images.Clock} alt="like" /> há cerca de 8 horas</p>
              <p><img src={Images.Lock} alt="like" /> Somete eu</p>
            </div>

            <span className="arrow container">&#709;</span>

          </header>

          {/** BOX POST */}
          <div className="container box-post">
            <p>Essa publicação está configurada no modo privado "somente eu".</p>

            <div className="container statistics-social">
              <p>{like} Seja o primeiro a curtir</p>
              <p>0 comentários</p>
              <p>0 compartilhamentos</p>
            </div>
          </div>

          {/** SOCIAL */}
          <div className="container social">
            <button 
              className="container btn like" 
              onClick={Like} 
              style={{backgroundColor: backgroundColorLike}}
            >
              <img src={Images.Like} alt="like" />
              <span>Curtir</span>
            </button>

            <button className="container btn comments">
              <img src={Images.CommentDots} alt="comments" />
              <span>Comentários</span>
            </button>

            <button className="container btn retweet">
              <img src={Images.Ret} alt="retweet" />
              <span>Compartilhar</span>
            </button>
          </div>
        </section>

        {/** POST */}
        <section className="container post">
          {/** HEADER POST */}
          <header className="container header-post">
            <img src={Images.Profile} alt="perfil" className="profile"/>
            <div className="container txt">
              <h2>Patricia Santos</h2>
              <p><img src={Images.Clock} alt="like" /> há cerca de 8 horas</p>
              <p><img src={Images.Lock} alt="like" /> Somete eu</p>
            </div>

            <span className="arrow container">&#709;</span>

          </header>

          {/** BOX POST */}
          <div className="container box-post">
            <p>Essa publicação está configurada no modo privado "somente eu".</p>

            <div className="container statistics-social">
              <p>{likeTwo} Seja o primeiro a curtir</p>
              <p>0 comentários</p>
              <p>0 compartilhamentos</p>
            </div>
          </div>

          {/** SOCIAL */}
          <div className="container social">
            <button 
              className="container btn like" 
              onClick={LikeTwo} 
              style={{backgroundColor: backgroundColorLikeTwo}}
            >
              <img src={Images.Like} alt="like" />
              <span>Curtir</span>
            </button>

            <button className="container btn comments">
              <img src={Images.CommentDots} alt="Comments" />
              <span>Comentários</span>
            </button>

            <button className="container btn retweet">
              <img src={Images.Ret} alt="Retweet" />
              <span>Compartilhar</span>
            </button>
          </div>
        </section>
      </section>

      {/** ASIDE */}
      <aside id="aside" className="container">
        <div className="container box">
          {/** HEADER */}
          <div className="container header">
            <img src={Images.Chart} alt="Chart" />
            <h3>Eficiência</h3>
          </div>

          {/** LINE OR SUBTITLE */}
          <div className="container line"></div>

          {/** FOOTER */}
          <div className="container footer">
            <div className="container cards">
              <div className="container card">
                <h3>Atividades<br />23/106</h3>
                <p>50%</p>
              </div>

              <div className="container card">
                <h3>Projetos<br />23/106</h3>
                <p>50%</p>
              </div>

              <div className="container card">
                <h3>Total<br />23/106</h3>
                <p>50%</p>
              </div>
            </div>

            {/** STATISTICS */}
            <div className="container cards-statistics">
              {/** ACTIVITIES */}
              <div className="container card-statistic">
                <h4>Atividades</h4>
                <ul>
                  <li className="container">
                    <p>Pendentes</p>
                    <span>3</span>
                  </li>

                  <li className="container">
                    <p>Pendentes</p>
                    <span>3</span>
                  </li>

                  <li className="container">
                    <p>Pendentes</p>
                    <span>3</span>
                  </li>
                </ul>
              </div>

              {/** PROJECTS */}
              <div className="container card-statistic">
                <h4>Projetos</h4>
                <ul>
                  <li className="container">
                    <p>Pendentes</p>
                    <span>3</span>
                  </li>

                  <li className="container">
                    <p>Pendentes</p>
                    <span>3</span>
                  </li>

                  <li className="container">
                    <p>Pendentes</p>
                    <span>3</span>
                  </li>
                </ul>
              </div>

              {/** TOTAL */}
              <div className="container card-statistic">
                <h4>Total</h4>
                <ul>
                  <li className="container">
                    <p>Pendentes</p>
                    <span>6</span>
                  </li>

                  <li className="container">
                    <p>Pendentes</p>
                    <span>6</span>
                  </li>

                  <li className="container">
                    <p>Pendentes</p>
                    <span>6</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/** BIRTHDAYS */}
        <div className="container box">
          {/** HEADER */}
          <div className="container header">
            <img src={Images.Chart} alt="Chart" />
            <h3>Aniversariantes</h3>
          </div>

          {/** LINE OR SUBTITLE */}
          <div className="container line"></div>

          {/** FOOTER */}
          <div className="container footer">
            <p>Nenhum dos seus amigos comemora aniversário hoje</p>
          </div>
        </div>

        {/** PENDENCIES */}
        <div className="container box">
          {/** HEADER */}
          <div className="container header">
            <img src={Images.Chart} alt="Chart" />
            <h3>Pendências</h3>
          </div>

          {/** LINE OR SUBTITLE */}
          <div className="container line">
            <p>Seg, 21 de Jun</p>
          </div>

          {/** FOOTER */}
          <div className="container footer">
            <p>Você não possui nenhuma pendência para hoje</p>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default App;
