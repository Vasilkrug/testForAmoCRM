import React from 'react';
import './App.css';
import {Header, CustomButton, InfoList, Footer ,MobileGifts, Light, Ball} from './components/index';
import {mobileGifts} from './data/data';

const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <main className={'main'}>
                <section className={'hero-section'}>
                    <Ball classname={'red-ball'}/>
                    <div className={'description'}>
                        <h1>Зарабатывайте больше <span>с WELBEX</span></h1>
                        <p>Развиваем и контролируем продажи за вас</p>
                        <Light classname={'red-light'}/>
                    </div>
                    <div className={'info'}>
                        <h2>Вместе с <span>бесплатной консультацией</span> мы дарим:</h2>
                        <InfoList classname={'mobile-none'}/>
                        <MobileGifts data={mobileGifts}/>
                        <CustomButton classname={'mobile-none'}/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
