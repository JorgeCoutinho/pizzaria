import Head from "next/head";
import React, { FormEvent } from "react";
import style from '../../styles/home.module.scss'
import logoImg from '../../public/logo.svg'
import Image from "next/image";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Link from "next/link";


export default function Home() {
  const { signIn } = useContext(AuthContext)

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    let Data = {
      email: 'teste@teste.com',
      password: '123123',
    }

    await signIn(Data);

  }

  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>

      <div className={style.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />



        <div className={style.login} >
          <form onSubmit={handleLogin}>

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
