import { Header } from "../../components/Header"

export function LoginPage(){
    return (
        <>
        <Header titulo="Login"/>
        <main>
            <h2>Bem-vindo(a) a LoginPage</h2>

            <form>
                <input placeholder="nome: "/>
                <input placeholder="senha" type="password"/>
                <button type="submit">Entrar</button>
            </form>
        </main>
        </>
    )
}