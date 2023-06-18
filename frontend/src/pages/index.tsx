import Head from "next/head";
import React from "react";
import style from '../../styles/home.module.scss'
import logoImg from '../../public/logo.svg'
import Image from "next/image";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>

      <div className={style.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />



        <div className={style.login} >
          <form>

            <Input
              placeholder="Digite seu email"
              type="text"
            />
            <Input
              placeholder="Digite seu senha"
              type="password"
            />

            <Button type="submit"
              loading={false}
              childrean={"Acessar"}>
              Acessar
            </Button>

          </form>

          <Link href="/signup" legacyBehavior>
            <a className={style.text} >Não possui uma conta? Cadastra-se</a>
          </Link>
        </div>
      </div>

    </>
  )
}
