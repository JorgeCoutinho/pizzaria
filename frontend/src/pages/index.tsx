import Head from "next/head";
import React from "react";
import style from '../../styles/home.module.scss'
import logoImg from '../../public/logo.svg'
import Image from "next/image";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";


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

          <a className={style.text} >Não possui uma conta? Cadastra-se</a>
        </div>
      </div>


    </>
  )
}
