import Head from "next/head";
import React from "react";
import style from '../../../styles/home.module.scss'
import logoImg from '../../../public/logo.svg'
import Image from "next/image";
import { Input } from "../../components/ui/input"; 
import { Button } from "../../components/ui/button";
import Link from "next/link";


export default function SignUp() {
    return (
        <>
            <Head>
                <title>Faço seu cadastro agora</title>
            </Head>

            <div className={style.containerCenter}>
                <Image src={logoImg} alt="Logo Sujeito Pizzaria" />



                <div className={style.login} >
                    <h1>Criando sua conta</h1>
                    <form>

                        <Input
                            placeholder="Digite seu nome"
                            type="text"
                        /> 
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
                            childrean={"Cadastrar"}>
                            Cadastrar
                        </Button>

                    </form>

                    <Link href="/" legacyBehavior>
                        <a className={style.text} >Já possui uma conta? Faça login!</a>
                    </Link>
                </div>
            </div>

        </>
    )
}