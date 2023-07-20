import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import { VscKey } from 'react-icons/vsc';

import { useAuth } from '../../../context/authContext';
import styles from './styles.module.scss';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const { user, signOut } = useAuth();

  const handleToggle = () => {
    setToggle((oldValue) => !oldValue);
  };

  if (router.pathname == "/login") return <div></div>;
  return (
    <header
      className={`${styles.header_container} ${
        toggle ? styles.mobile_active : ""
      }`}
    >
      <Link href={user ? "/gerenciador" : "/"}>
        <Image
          alt="logomarca da revista vivencia"
          src={"/images/logo.svg"}
          width={250}
          height={65}
        />
      </Link>

      <div className={styles.hamburgerMenu} onClick={handleToggle}>
        <RxHamburgerMenu size={35} className={styles.hamburgerMenuIcon} />
      </div>

      <div>
        {!user ? (
          <nav
            className={`${styles.navigationBarMobileActive} ${styles.navigationBar}`}
          >
            <ul className={styles.menu}>
              <li
                onClick={() => handleToggle()}
                className={`${
                  router.pathname == "/" ? styles.item_active : ""
                }`}
              >
                <Link href="/">Volume Atual</Link>
              </li>
              <li
                onClick={() => handleToggle()}
                className={`${
                  router.pathname == "/revista" ? styles.item_active : ""
                }`}
              >
                <Link href="/volumes-anteriores">Volumes Anteriores</Link>
              </li>
              <li className={`${styles.subitens}`}>
                <span>Sobre</span>
                <ul>
                  <li
                    onClick={() => handleToggle()}
                    className={`${
                      router.pathname == "/equipe" ? styles.subitem_active : ""
                    }`}
                  >
                    <Link href="/equipe">Equipe</Link>
                  </li>
                  <li
                    onClick={() => handleToggle()}
                    className={`${
                      router.pathname == "/sobre" ? styles.subitem_active : ""
                    }`}
                  >
                    <Link href="/sobre">Escola</Link>
                  </li>
                  <li
                    onClick={() => handleToggle()}
                    className={`${
                      router.pathname == "/nossos-trabalhos"
                        ? styles.subitem_active
                        : ""
                    }`}
                  >
                    <Link href="/nossos-trabalhos">Trabalhos</Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => handleToggle()}
                className={`${
                  router.pathname == "/contato" ? styles.item_active : ""
                }`}
              >
                <Link href="/contato">Contato</Link>
              </li>
              <li
                onClick={() => handleToggle()}
                className={`${
                  router.pathname == "/login" ? styles.item_active : ""
                }`}
              >
                <Link href="/login">Login</Link>
              </li>
            </ul>
            <TfiClose
              size={40}
              className={styles.closeIconMobile}
              onClick={handleToggle}
            />
          </nav>
        ) : (
          <div>
            <nav
              className={`${styles.navigationBarMobileActive} ${styles.navigationBar}`}
            >
              <ul className={styles.menu}>
                <li>
                  {!toggle && (
                    <FaRegUser size={23} style={{ marginRight: "10px" }} />
                  )}
                  <p>{user.name || "Usuário"}</p>
                </li>
                <li>
                  {!toggle && (
                    <VscKey size={25} style={{ marginRight: "10px" }} />
                  )}
                  <p>Alterar senha</p>
                </li>
                <li
                  onClick={() => {
                    handleToggle();
                    signOut();
                  }}
                >
                  {!toggle && (
                    <HiOutlineLogout
                      size={27}
                      style={{ marginRight: "10px" }}
                    />
                  )}
                  <p>Sair</p>
                </li>
              </ul>
              <TfiClose
                size={35}
                className={styles.closeIconMobile}
                onClick={handleToggle}
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
