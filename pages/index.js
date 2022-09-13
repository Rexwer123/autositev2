import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react';
import Link from "next/link";
import React, { useState } from "react";

import { useTheme, Text } from '@nextui-org/react';

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={`nav__item ${active ? "active" : ""
          }`}
      >
        {text}
      </a>
    </Link>
  );
};

const MENU_LIST = [
  { text: "Главная", href: "/" },
  { text: "Услуги", href: "/about" },
  { text: "Галерея", href: "/about" },
  { text: "Контакты", href: "/contact" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">АВТОСЕРВИС</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

const Service = (props) => {
  const { url, title, description } = props

  return (
    <>
      <h1>{title}</h1>
      <Image width={100} height={100} src={url} />
    </>
  )
}

const servicesCards = [{
  url: 'https://userstyles.org/style_screenshots/189336_after.jpeg',
  title: 'UwU'
}]

const ServiceCard = (props) => {
  const { h3, h6, p } = props
  return (
    <li className='service'>
      <h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>{h3}</h3>
      <h6 style={{ paddingLeft: 5, marginTop: 15, marginBottom: 10 }}>{h6}</h6>
      <p style={{ paddingLeft: 5, fontStyle: 'italic', fontWeight: 'lighter' }}>{p}</p>
    </li>
  )
}

const Block = (props) => {
  const { src, title, p, button } = props

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <>
      <div className={'row'} style={props.styles ? { ...props.styles, minHeight: 300 } : { minHeight: 300 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 20 }}>{title}</h1>
        <h4 style={{ textAlign: 'center', fontWeight: 'lighter' }}>{p}</h4>
        <div className={'col-md-6 col-xs-12'}>
          <ul>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Ремонт рулевого управления</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Ремонт ДВС</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Ремонт головки блока цилиндров</h3></li>
          </ul>
        </div>
        <div className={'col-md-6 col-xs-12'} styles={styles}>

          <ul>
            <ServiceCard h3="Ремонт АКПП и МКПП" h6="Диагностика и ремонт автоматических и механических коробок передач" p="Первые признаки неисправной трансмиссии, проявляющиеся сбоями в переключении передач - серьезный повод бить тревогу и срочно искать автосервис, где смогут произвести диагносту и ремонт КПП в короткие сроки." />
            <ServiceCard h3="Ремонт стартеров, генераторов" h6="Осмотр электрика, диагностика и ремонт стартеров и генераторов" p="Генератор относятся к числу основных элементов пуско-зарядной цепи автомобиля, поэтому ремонт данных агрегатов лучше доверять профессионалам" />
            <ServiceCard h3="Ремонт тормозной системы" h6="Диагностика и ремонт тормозной системы автомобиля" p=" Тормозная система является важным узлом транспортного средства. Любые неисправности тормозной системы могут привести к запрету эксплуатации автомобиля. " />

            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Установка автомагнитол</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Развал-схождение колес</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Балансировка колёс</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена масла</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена ремня и цепи ГРМ</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена масляного фильтра</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена воздушного фильтра</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена топливного фильтра</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена тормозной жидкости</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена свечей зажигания</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена поршневых колец</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена радиатора</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена сцепления</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена насоса охлаждающей жидкости</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена масляного насоса</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Замена жидкости ГУР</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Регулировка клапанов</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Кузовной ремонт</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Полировка фар, кузова</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Покраска кузова</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Восстановление геометрии кузова</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Предпродажная подготовка авто</h3></li>
            <li className='service'><h3 style={{ paddingLeft: 5, paddingTop: 5, fontWeight: 'lighter', textDecoration: 'underline' }}>Ремонт и реставрация ретро-автомобилей</h3></li>
          </ul>
        </div>
      </div>
    </>
  )
}

const LiftedSection = (props) => {
  const { t, p, inner } = props

  const defaultStyle = { minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }

  return (
    <>
      <div className={'row'} style={props.styles ? { ...props.styles, ...defaultStyle } : defaultStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: 20 }}>{t}</h1>
        <h4 style={{ textAlign: 'center', fontWeight: 'lighter' }}>{p}</h4>
        {inner || ''}
      </div>
    </>
  )
}

const Upslide = (props) => {
  return (
    <div className='slide'>
      <div></div>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Автосервис</title>
        <meta name="description" content="Проверенный автосервис на Приморской! Гарантированный сервис высшего класса для вашего авто. Любые виды работ. Рестоврация ретро-авто." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


     
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>АВТОСЕРВИС ВЫСШЕГО КЛАССА</h1>
          <h3>ЛЮБЫЕ ВИДЫ РАБОТ ДЛЯ ВАШЕГО АВТОМОБИЛЯ ОТ НАШИХ ПРОФЕССИОНАЛОВ</h3>
        </div>
        <Button css={{ 'fontWeight': 650, 'marginTop': 40 }}>ОСТАВИТЬ ЗАЯВКУ</Button>
      </main>

      <main className={styles.main} style={{ background: `url('https://w7.pngwing.com/pngs/473/267/png-transparent-gradient-desktop-color-background-miscellaneous-blue-atmosphere.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: 'white', paddingBottom: 100 }} >
        <div className={'container'}>
          <LiftedSection t={'Кто мы?'} p={'Команда профессионалов своего дела, которая вот уже больше 10 лет помогает клиентам решить любые проблемы с автомобилем или мотоциклом'} styles={{ marginTop: 50, marginBottom: 50 }} />
          <div className='row' style={{ marginTop: 100, justifyContent: 'space-between' }}>
            <div className='col-md-5 col-xs-12' style={{ border: '1px solid lightgrey', background: 'white', color: 'black', borderRadius: 20, paddingBottom: 35 }}>
              <h3 style={{ textAlign: 'left', paddingLeft: 20, paddingTop: 45 }}>Автомобили</h3>
              <ul style={{ marginTop: 45, padding: 0 }}>
                <li className='service' style={{ fontSize: '1.3em' }}>Установка аудио-оборудования</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Залив расходных жидкостей (масло, тормозная жидкость и тд.)</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Замена сцепления</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Замена радиатора</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Ремонт двигателя</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Реcтаврация ретро-авто</li>
              </ul>
            </div>
            <div className='col-md-5 col-xs-12' style={{ border: '1px solid lightgrey', background: 'white', color: 'black', borderRadius: 20, paddingBottom: 35 }}>
              <h3 style={{ textAlign: 'left', paddingLeft: 20, paddingTop: 45 }}>Мотоциклы</h3>
              <ul style={{ marginTop: 45, padding: 0 }}>
                <li className='service' style={{ fontSize: '1.3em' }}>Кастомайзинг</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Ремонт тормозной системы</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Замена колёс и сцепления</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Покраска</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Аерография</li>
                <li className='service' style={{ fontSize: '1.3em' }}>Ремонт двигателя</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <main className={styles.main} style={{background: 'white'}}>          
        <h1>Контакты</h1>
        <div className='row' styles={{ height: '100%'}}>

          <div className='col-md-7 col-xs-12'>
            <div style={{position: "relative", overflow: "hidden"}}><a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style={{"color": '#eee', fontSize: 12, position: 'absolute', top: 0}}>Saint Petersburg</a><a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.243838%2C59.948114&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=30.242346%2C59.947737&whatshere%5Bzoom%5D=17&z=17.16"  style={{color: '#eee', fontSize: 12, position: 'absolute', top: 0}}>59.947737,30.242346 — Yandex Maps</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUVBLfEgD" width="800" height="500" frameborder="1" allowfullscreen="true" style={{"position": 'relative'}}></iframe></div>
          </div>
          <div className='col-md-5 col-xs-12 card'>
            <h3 style={{padding: 18}}>Оставить заявку?</h3>
            <form action="/api/form" method="post" style={{flexDirection: 'column', display: 'flex', padding: 18}}>
            <input type="text" id="first" name="first" placeholder='Телефон' style={{}}/>
            <br/>
            <input type="text" id="last" name="last" />
            <br/>
            <button type="submit">Submit</button>
          </form>

          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Designed and Developed by Leonid Brown | leorexwer@gmail.com
      </footer>
    </div>
  )


}
