import { Background, Container, Form } from "./style";

import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi"; 

import { Input } from "../../components/Input";
import { Button } from "../../components/button";

export function SignIn(){
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="Password"
                    icon={FiLock}
                />

                <Button title="Entrar"></Button>

                <Link to="/register">
                Criar conta
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}