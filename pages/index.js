import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react';
import Link from "next/link";
import React, { createRef, useState } from "react";
import IMask from 'imask';
import { isMobile } from 'react-device-detect'

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
  { text: "Кто мы", href: "/about" },
  { text: "Услуги", href: "/about" },
  { text: "Галерея", href: "/about" },
  { text: "Реставрация", href: "/about" },
  { text: "Контакты", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#" style={{ padding: 4, paddingLeft: 15 }}>АВЕ-АВТО</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" onClick={() => scrollTo(mainRef)} style={{ cursor: 'pointer' }}>Главная</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => scrollTo(whoRef)} style={{ cursor: 'pointer' }}>Кто мы?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => scrollTo(serviceRef)} style={{ cursor: 'pointer' }}>Услуги</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => scrollTo(galRef)} style={{ cursor: 'pointer' }}>Галерея</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => scrollTo(repRef)} style={{ cursor: 'pointer' }}>Реставрация</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => scrollTo(contactRef)} style={{ cursor: 'pointer' }}>Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
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

const Forms = () => {
  const [phone, setPhone] = React.useState('')
  const [error, setError] = React.useState('')
  const [msg, setMsg] = React.useState('')
  const [success, setSuccess] = React.useState(false)

  const handlePhoneInput = (target) => {
    const maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    const mask = IMask(target, maskOptions);
    setPhone(mask.value)
  }

  const handleSubmit = () => {
    if (!(phone.length === 18)) {
      return setError('Введите правильный телефон')
    }

    if (!(msg.length > 0)) {
      return setError('Сообщение не должно быть пустым')
    }

    setError(null)
    try {
      (async () => {
        await fetch('http://localhost:3000/api/request', {
          method: 'POST',
          body: JSON.stringify({
            phone,
            msg
          }),
          headers: {
            'Content-Type': 'application/json'
          },
        })
      })()
      setSuccess(true)
    } catch (err) {
      setError('Ошибка отправки, попробуйте позже')
    }
  }



  return (
    <>
      <br />
      <h4 style={{ color: 'black', padding: 20, paddingBottom: 0 }}>Оставить заявку</h4>
      <br />
      <form style={{ paddingLeft: 20, paddingRight: 20 }} noValidate onSubmit={e => e.preventDefault()}>
        {error && (
          <>
            <h6 style={{ color: 'red' }}>{error}</h6>
          </>
        )}
        {success && (
          <>
            <h6 style={{ color: 'green' }}>Обращение успешно отправлено</h6>
          </>
        )}
        <div class="form-group">
          <input type="email" class="form-control" id="inputPhone" placeholder="+7 (997) 222-22-22" value={phone} onInput={e => handlePhoneInput(e.target)} />
        </div>
        <br />
        <div class="form-group">
          <textarea type="textarea" class="form-control" id="exampleInputPassword1" value={msg} onInput={e => setMsg(e.target.value)} placeholder="Проблема" />
        </div>

        <br />

        <button onClick={handleSubmit} class="btn btn-primary">Отправить</button>
      </form>
    </>
  )
}

const BlackOverlay = () => <div style={{ background: 'black', height: '30vh', width: '100vw', position: 'absolute', opacity: 0.3, zIndex: 0 }} />

let mainRef
let contactRef
let galRef
let whoRef
let repRef
let serviceRef

const Main = () => {
  mainRef = React.useRef()

  return (
    <main ref={mainRef} className={styles.main} id="main">
      <BlackOverlay />
      <div className={styles.intro} style={{ zIndex: 1 }}>
        <h1>АВТОСЕРВИС ВЫСШЕГО КЛАССА</h1>
        <h3>ЛЮБЫЕ ВИДЫ РАБОТ ДЛЯ ВАШЕГО АВТОМОБИЛЯ ОТ НАШИХ ПРОФЕССИОНАЛОВ</h3>
      </div>
      <Button css={{ 'fontWeight': 650, 'marginTop': 40 }} onClick={() => scrollTo(contactRef)}>ОСТАВИТЬ ЗАЯВКУ</Button>
    </main>
  )
}

const Card = (props) => (
  <div style={
    {
      border: '1px solid lightgray',
      borderRadius: 12,
      padding: 16,
      background: 'white'
    }
  }>
    {props.children}
  </div>
)

const Contacts = () => {
  contactRef = React.useRef()

  return (
    <>
      <main className={styles.main} style={{ background: 'black', minHeight: '40vh', paddingBottom: 100, paddingTop: 100, color: 'white' }}>
        <Row>
          <Col size={6}>
            <iframe src="https://yandex.ru/map-widget/v1/-/CCUVFUDw3C" width="100%" height="100%" allowfullscreen="true"></iframe>
          </Col>
          <Col size={6}>
            <Card>
              <h4 style={{ color: 'black', padding: 20, paddingBottom: 0 }}>Контакты</h4>
              <h5 style={{ color: 'black', padding: 20, paddingBottom: 0, fontWeight: 'lighter' }}>+7 (922) 999-99-99</h5>
              <h5 style={{ color: 'black', padding: 20, paddingBottom: 0, fontWeight: 'lighter' }}>Санкт-Петербург, Васильевский Остров</h5>
              <Forms />
            </Card>
          </Col>
        </Row>
      </main>
    </>
  )
}
//https://cdn.avtokapitan.ru/portfolio/2018/01/1/gaz-24-volga_1.png

const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  // Remember the latest function.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  // eslint-disable-next-line
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const CarouselRep = () => {
  const [index, setIndex] = React.useState(0)

  useInterval(() => {
    if(index === 3){
      return setIndex(0)
    }

    setIndex(index + 1)
  }, 5000)

  const slides = [
    {
      t: 'Кузов до начала реставрации',
      src: 'https://cdn.avtokapitan.ru/portfolio/2018/01/1/gaz-24-volga_1.png'
    },
    {
      t: 'Начало кузовных работ',
      src: 'https://cdn.avtokapitan.ru/portfolio/2018/01/1/gaz-24-volga_2.png'
    },
    {
      t: 'После процесса покраски',
      src: 'https://cdn.avtokapitan.ru/portfolio/2018/01/1/gaz-24-volga_15.png'
    },
    {
      t: 'Результат реставрации',
      src: 'https://cdn.avtokapitan.ru/portfolio/2018/01/1/gaz-24-volga_17.png'
    }
  ]

  const colStyle = { justifyContent: 'center', alignItems: 'center', textAlign: 'left', display: 'flex', flexDirection: 'column' }

  return (
    <>
      <br />
      <div style={{ minHeight: '40vh', maxWidth: '100vw', width: '100vw' }}>
      <div className='row' style={{ height: '100%' }}>
        <div className='col-md-4' style={colStyle}>
          <div>
            <h2 style={{ color: 'black', fontWeight: 'bold' }}>Волга ГАЗ-24</h2>
            <h3 style={{ textAlign: 'left' }}>{slides[index].t}</h3>
          </div>
        </div>
        <div className='col-md-8' style={colStyle}>
          <div>
            <img src={slides[index].src} alt='' />
          </div>
        </div>
      </div>
        <br />
      </div>
    </>
  )
}

const CarouselRe = () => {
  galRef = React.useRef(null)
  return (
    <>
      <div style={{ position: 'absolute', zIndex: -10 }}>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div className="carousel-item active">

            <div class="carousel-caption d-none d-md-block">

              <h5>Внешний вид кузова до реставрации</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img ssrc="" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h4 style={{ color: 'white', fontWeight: 'bold' }}>Волга ГАЗ-24</h4>
              <h5>Кузовной ремонт</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.avtokapitan.ru/portfolio/2018/01/1/gaz-24-volga_15.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h4 style={{ color: 'white', fontWeight: 'bold' }}>Волга ГАЗ-24</h4>
              <h5>После покраски</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.avtokapitan.ru/portfolio/2018/01/1/gaz-24-volga_17.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h4 style={{ color: 'white', fontWeight: 'bold' }}>Волга ГАЗ-24</h4>
              <h5>Результат</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Row = (props) => <div className='row' style={{ width: '80%' }}>{props.children}</div>
const Col = (props) => <div className={`col-md-${props.size} col-xs-12`} style={props.style}>{props.children}</div>

const Who = () => {
  whoRef = React.useRef()

  return (
    <main ref={whoRef} className={styles.main} style={{ background: `url('https://w7.pngwing.com/pngs/473/267/png-transparent-gradient-desktop-color-background-miscellaneous-blue-atmosphere.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: 'white', paddingBottom: 100 }} >
      <div className={'container'}>
      <LiftedSection t={'Кто мы?'} p={'Команда профессионалов своего дела, которая вот уже больше 10 лет помогает клиентам решить любые проблемы с автомобилем или мотоциклом. Прямое сотрудничество с поставщиками запчастей обеспечивает быстрое выполнение работы.'} styles={{ marginTop: 50, marginBottom: 50 }} />
      <div className={'row'} style={{ justifyContent: 'center' }}>
        <img style={{ position: 'relative', width: '60%', height: 'auto' }} src='https://www.avtovzglyad.ru/media/article/image_09.jpg.740x400_q85_box-0%2C52%2C870%2C522_crop_detail_upscale.jpg' />
      </div>
      <div className={'row'}>
        <h3></h3>
      </div>
      </div>
    </main>
  )
}

const Services = () => {
  serviceRef = React.useRef(null)

  return (
    <main ref={serviceRef} className={styles.main} style={{ paddingBottom: 100 }}>
      <div className={styles.container}>
        <h1 style={{ textAlign: 'center', marginBottom: 20, marginTop: 100 }}>Популярные услуги</h1>
        <div className='row' style={{ marginTop: 100, justifyContent: 'space-between' }}>
          <div className='col-md-5 col-xs-12' style={{ border: '1px solid lightgrey', background: 'white', color: 'black', borderRadius: 20, paddingBottom: 35 }}>
            <h3 style={{ textAlign: 'left', paddingLeft: 20, paddingTop: 45, textDecoration: 'underline' }}>Автомобили</h3>
            <ul style={{ marginTop: 45, padding: 0 }}>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Установка аудио-оборудования</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Залив расходных жидкостей (масло, тормозная жидкость и тд.)</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Замена сцепления</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Замена радиатора</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Ремонт двигателя</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Реcтаврация ретро-авто</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Ремонт ходовой части</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Ремонт пневмо-подвески</li>
            </ul>
          </div>
          <div className='col-md-5 col-xs-12' style={{ border: '1px solid lightgrey', background: 'white', color: 'black', borderRadius: 20, paddingBottom: 35 }}>
            <h3 style={{ textAlign: 'left', paddingLeft: 20, paddingTop: 45, textDecoration: 'underline' }}>Мотоциклы</h3>
            <ul style={{ marginTop: 45, padding: 0 }}>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Кастомайзинг</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Ремонт тормозной системы</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Замена колёс и сцепления</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Покраска</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Аерография</li>
              <li className='service' style={{ fontSize: '1.3em', fontWeight: 'lighter' }}>Ремонт двигателя</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

const Rep = () => {
  repRef = React.useRef(null)

  return (
    <main ref={repRef} className={styles.main} style={{ background: `url('https://avtotachki.com/wp-content/uploads/2020/03/7d-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', textAlign: 'center', color: 'white', minHeight: '30vh' }}>
      <BlackOverlay />
      <div style={{ zIndex: 10 }}>
        <h1>МЫ ЛЮБИМ РЕТРО-АВТОМОБИЛИ</h1>
        <h5 styles={{ fontWeight: 'lighter', textAlign: 'center' }}>И даже знаем, как поставить их на ноги!<br />Капитальный ремонт, замена электрики, покраска и тюнинг на любой вкус.</h5>
      </div>
    </main>
  )
}

const scrollTo = (ref) => {
  ref.current.scrollIntoView()
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>АВЕ-АВТО</title>
        <meta name="description" content="Проверенный автосервис на Приморской! Гарантированный сервис высшего класса для вашего авто. Любые виды работ. Рестоврация ретро-авто." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Who />
      <Services />
      <Rep />
      <CarouselRep />
      <Contacts />
    </div>
  )


}
