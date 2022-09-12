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
        className={`nav__item ${
          active ? "active" : ""
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
        <Image width={100} height={100} src={url}/>
        </>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Автосервис</title>
        <meta name="description" content="Проверенный автосервис на Приморской! Гарантированный сервис высшего класса для вашего авто. Любые виды работ. Рестоврация ретро-авто." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar></Navbar>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>АВТОСЕРВИС ВЫСШЕГО КЛАССА</h1>
          <h3>ЛЮБЫЕ ВИДЫ РАБОТ ДЛЯ ВАШЕГО АВТОМОБИЛЯ ОТ НАШИХ ПРОФЕССИОНАЛОВ</h3>
        </div>
        <Button css={{'fontWeight': 650, 'marginTop': 40}}>ОСТАВИТЬ ЗАЯВКУ</Button>
      </main>
      <section style={{marginTop: 40}}>
        <div className={styles.container}>
          <h3 className={styles.title}>Услуги</h3>
          <div className={styles.grid}>
            {[{
              url: 'https://userstyles.org/style_screenshots/189336_after.jpeg',
              title: 'UwU'
            }].map(item => (<div className={'card'}><Service url={ item.url } title={ item.title }/></div>))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        Designed and Developed by Leonid Brown | leorexwer@gmail.com
      </footer>
    </div>
  )
}
