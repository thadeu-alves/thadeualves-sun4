import { useState } from "react";

export default function landingPage() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
        plano: "plano",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Formulário enviado.");
        setFormData({
            nome: "",
            email: "",
            telefone: "",
            mensagem: "",
            plano: "plano",
        });
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-[#171843]">
                <div className="flex justify-between container px-4 pt-6 mx-auto">
                    <div className="text-white text-xl font-bold">
                        Jurídico SUN4
                    </div>
                    <div className="space-x-4">
                        <a
                            href="#"
                            className="text-white hover:text-gray-400 cursor-pointer"
                        >
                            Entrar
                        </a>
                        <a
                            href="#"
                            className="text-[#f09e4c] hover:text-[#e4a96d] cursor-pointer"
                        >
                            Cadastrar
                        </a>
                    </div>
                </div>
            </header>

            <section className="bg-[#171843] text-white py-20">
                <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-8 items-center justify-between md:flex-row-reverse">
                    <div className="bg-white w-fit h-fit p-4 rounded-full">
                        <img
                            src="https://brandeps.com/icon-download/L/Lawyer-icon-01.png"
                            alt="icon"
                            className="w-40 md:w-60"
                        />
                    </div>
                    <div className="max-w-100 space-y-6">
                        <h1 className="text-3xl font-semibold">
                            Transforme sua gestão processual
                            com automação inteligente
                        </h1>
                        <p className="text-gray-300 font-light">
                            Acompanhe diversos de processos
                            sem esforço!
                        </p>
                        <button className="bg-[#f09e4c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ce9f70] transition cursor-pointer">
                            Experimente grátis por 7 dias
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 md:px-0">
                    <h2 className="text-[#171843] text-3xl font-bold text-center mb-12">
                        Uma solução completa e automática
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-blue-500 text-4xl mb-4">
                                📊
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Gestão de Processos
                            </h3>
                            <p>
                                Acompanhe todos os seus
                                processos em um único lugar
                                com atualizações em tempo
                                real.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-blue-500 text-4xl mb-4">
                                ⏱️
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Economize Tempo
                            </h3>
                            <p>
                                Automatize tarefas
                                repetitivas e foque no que
                                realmente importa para o seu
                                caso.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-blue-500 text-4xl mb-4">
                                📈
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Relatórios Avançados
                            </h3>
                            <p>
                                Gere relatórios detalhados
                                para análise de performance
                                e tomada de decisão.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-[#171843] text-3xl font-bold text-center mb-20">
                        Depoimentos dos nossos clientes
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 mx-auto w-fit">
                        <div className="w-fit gap-4 md:flex">
                            <div>
                                <img
                                    src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                                    alt="image icon"
                                    className="min-w-10 w-20 rounded-full"
                                />
                            </div>
                            <div className="max-w-100 py-2">
                                <h1 className="text-xl font-bold">
                                    Carlos Mendes{" "}
                                </h1>
                                <h2 className="text-gray-400 font-medium text-sm mb-4">
                                    / Sócio do Escritório
                                    Mendes & Associados
                                </h2>
                                <p className="text-gray-500 ">
                                    "O Jurídico SUN4
                                    revolucionou nossa
                                    produtividade! Antes,
                                    perdíamos horas
                                    acompanhando prazos e
                                    movimentações
                                    processuais. Agora, tudo
                                    é automatizado e
                                    recebemos alertas em
                                    tempo real. Reduzimos em
                                    60% o tempo de gestão
                                    administrativa!"
                                </p>
                            </div>
                        </div>
                        <div className="w-fit gap-4 md:flex">
                            <div>
                                <img
                                    src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                                    alt="image icon"
                                    className="min-w-10 w-20 rounded-full"
                                />
                            </div>
                            <div className="max-w-100 py-2">
                                <h1 className="text-xl font-bold">
                                    Carlos Mendes{" "}
                                </h1>
                                <h2 className="text-gray-400 font-medium text-sm mb-4">
                                    / Sócio do Escritório
                                    Mendes & Associados
                                </h2>
                                <p className="text-gray-500 ">
                                    "O Jurídico SUN4
                                    revolucionou nossa
                                    produtividade! Antes,
                                    perdíamos horas
                                    acompanhando prazos e
                                    movimentações
                                    processuais. Agora, tudo
                                    é automatizado e
                                    recebemos alertas em
                                    tempo real. Reduzimos em
                                    60% o tempo de gestão
                                    administrativa!"
                                </p>
                            </div>
                        </div>
                        <div className="w-fit gap-4 md:flex">
                            <div>
                                <img
                                    src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                                    alt="image icon"
                                    className="min-w-10 w-20 rounded-full"
                                />
                            </div>
                            <div className="max-w-100 py-2">
                                <h1 className="text-xl font-bold">
                                    Carlos Mendes{" "}
                                </h1>
                                <h2 className="text-gray-400 font-medium text-sm mb-4">
                                    / Sócio do Escritório
                                    Mendes & Associados
                                </h2>
                                <p className="text-gray-500 ">
                                    "O Jurídico SUN4
                                    revolucionou nossa
                                    produtividade! Antes,
                                    perdíamos horas
                                    acompanhando prazos e
                                    movimentações
                                    processuais. Agora, tudo
                                    é automatizado e
                                    recebemos alertas em
                                    tempo real. Reduzimos em
                                    60% o tempo de gestão
                                    administrativa!"
                                </p>
                            </div>
                        </div>
                        <div className="gap-4 md:flex">
                            <div>
                                <img
                                    src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                                    alt="image icon"
                                    className="min-w-10 w-20 rounded-full"
                                />
                            </div>
                            <div className="max-w-100 py-2">
                                <h1 className="text-xl font-bold">
                                    Carlos Mendes{" "}
                                </h1>
                                <h2 className="text-gray-400 font-medium text-sm mb-4">
                                    / Sócio do Escritório
                                    Mendes & Associados
                                </h2>
                                <p className="text-gray-500 ">
                                    "O Jurídico SUN4
                                    revolucionou nossa
                                    produtividade! Antes,
                                    perdíamos horas
                                    acompanhando prazos e
                                    movimentações
                                    processuais. Agora, tudo
                                    é automatizado e
                                    recebemos alertas em
                                    tempo real. Reduzimos em
                                    60% o tempo de gestão
                                    administrativa!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#171843]">
                <div className="container mx-auto px-4">
                    <h2 className="text-white text-3xl font-bold text-center mb-12">
                        Nossos Planos
                    </h2>

                    <div className="grid px-4 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500 flex flex-col">
                            <h3 className="text-xl font-semibold mb-4">
                                Plano Básico
                            </h3>
                            <p className="text-4xl font-bold mb-4">
                                R$ 99
                                <span className="text-lg">
                                    /mês
                                </span>
                            </p>
                            <ul className="mb-6 space-y-2">
                                <li>
                                    ✔ Até 5.000 processos
                                </li>
                                <li>
                                    ✔ Atualizações diárias
                                </li>
                                <li>
                                    ✔ Suporte por e-mail
                                </li>
                                <li>
                                    ✖ Relatórios avançados
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Assinar
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#f09e4c] transform scale-105 relative flex flex-col">
                            <div className="absolute top-0 right-0 bg-[#f09e4c] text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-sm ">
                                Popular
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                Plano Profissional
                            </h3>
                            <p className="text-4xl font-bold mb-4">
                                R$ 99
                                <span className="text-lg">
                                    /mês
                                </span>
                            </p>
                            <ul className="mb-6 space-y-2">
                                <li>
                                    ✔ Até 10.000 processos
                                </li>
                                <li>
                                    ✔ Atualizações em tempo
                                    real
                                </li>
                                <li>
                                    ✔ Suporte prioritário
                                </li>
                                <li>
                                    ✔ Relatórios básicos
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-center bg-[#f09e4c] text-white py-2 rounded-lg hover:bg-[#dbaa78] transition"
                            >
                                Assinar
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500 flex flex-col">
                            <h3 className="text-xl font-semibold mb-4">
                                Plano Empresarial
                            </h3>
                            <p className="text-4xl font-bold mb-4">
                                R$ 99
                                <span className="text-lg">
                                    /mês
                                </span>
                            </p>
                            <ul className="mb-6 space-y-2">
                                <li>
                                    ✔ Processos ilimitados
                                </li>
                                <li>
                                    ✔ Atualizações em tempo
                                    real
                                </li>
                                <li>✔ Suporte 24/7</li>
                                <li>
                                    ✔ Relatórios avançados
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Assinar
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Fale Conosco
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-lg shadow-md"
                    >
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label
                                    htmlFor="nome"
                                    className="block mb-2 font-medium"
                                >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 font-medium"
                                >
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="telefone"
                                    className="block mb-2 font-medium"
                                >
                                    Telefone
                                </label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="plano"
                                    className="block mb-2 font-medium"
                                >
                                    Plano de Interesse
                                </label>
                                <select
                                    id="plano"
                                    name="plano"
                                    value={formData.plan}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2"
                                >
                                    <option value="plano1">
                                        Plano Básico (5.000
                                        processos)
                                    </option>
                                    <option value="plano2">
                                        Plano Profissional
                                        (10.000 processos)
                                    </option>
                                    <option value="plano3">
                                        Plano Empresarial
                                        (Ilimitado)
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="mensagem"
                                className="block mb-2 font-medium"
                            >
                                Mensagem
                            </label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#171843] text-white py-3 rounded-lg font-semibold hover:bg-[#292a4e] transition cursor-pointer"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </section>

            <footer className="bg-[#171843] text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>
                        Sun Software 2018 © Todos os
                        Direitos Reservados.
                    </p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a
                            href="#"
                            className="hover:text-gray-300"
                        >
                            Termos de Serviço
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300"
                        >
                            Política de Privacidade
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300"
                        >
                            Contato
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
