import Image from "next/image";
import React from "react";
import Card from "../card/Card";
import Search from "../Search";

function Header() {
  const menuOptions = [
    { name: "Home" },
    { name: "Cursos" },
    { name: "PrevEvolution" },
    { name: "Mat. Gratuitos" },
    { name: "BLOG" },
    { name: "Livros/e-books" },
    { name: "Fale Conosco" },
  ];
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-center px-16 py-3 w-full text-base text-white bg-blue-800 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-w-full w-[1158px] max-md:flex-wrap">
          <div className="flex gap-5 my-auto whitespace-nowrap leading-[100%]">
            <div>
              <Image
                loading="lazy"
                src="/icones/icone-facebook.svg"
                alt="Icon 1"
                width={19}
                height={19}
              />
            </div>
            <div>
              <Image
                loading="lazy"
                src="/icones/icone-instagram.svg"
                alt="Icon 2"
                width={19}
                height={19}
              />
            </div>
            <div>
              <Image
                loading="lazy"
                src="/icones/icone-youtube.svg"
                alt="Icon 3"
                width={19}
                height={19}
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center text-right leading-[150%]">
          <Search />
            <Image
              loading="lazy"
              src="/icones/Icon2.svg"
              alt="Icon 3"
              width={19}
              height={19}
            />
            <div className="flex gap-3">
              <Image
                loading="lazy"
                src="/icones/Icon.svg"
                alt="Icon 3"
                width={22}
                height={22}
              />
              <div className="flex-auto my-auto font-poppins">
                PORTAL DO ALUNO
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-3 bg-white max-md:px-5">
        <div className="flex gap-5 justify-between items-start w-full max-w-[1160px] max-md:flex-wrap max-md:max-w-full">
          <Image
            loading="lazy"
            src="/logo/logo-master.png"
            alt="Logo"
            width={200}
            height={50}
          />
          <div className="flex flex-wrap max-w-[800px] text-sm font-semibold tracking-wider leading-5 uppercase text-neutral-700">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {menuOptions.map((option, index) => (
                <li key={index} className="flex-shrink-0 mr-4">
                  {option.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 self-stretch my-auto mt-2">
            <Image
              loading="lazy"
              src="/icones/carrinho.svg"
              alt="Icone Carrinho"
              width={19}
              height={19}
            />
            <Image
              loading="lazy"
              src="/icones/user.svg"
              alt="Icone Usuário"
              width={19}
              height={19}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[452px] overflow-hidden">
        <Image
          loading="lazy"
          src="/background/slide.jpg"
          alt="slide"
          width={1440}
          height={452}
          objectFit="cover"
          layout="responsive"
          quality={100}
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-center items-center px-8 py-4 w-full text-xs text-white bg-neutral-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start max-w-full w-[1169px] max-md:flex-wrap">
          <div className="text-lg leading-7">
            Fique por dentro
            <br />
            de tudo que
            <br />
            acontece no
            <br />
            Direito!
          </div>
          <div className="flex flex-col justify-start items-start px-4 py-3 bg-white rounded-3xl border border-white border-solid text-neutral-500 max-md:pr-5 w-96 h-14">
            <span className="text-sm font-semibold text-center">nome</span>
            <input
              type="text"
              className="w-full h-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col justify-start items-start px-4 py-3 bg-white rounded-3xl border border-white border-solid text-neutral-500 max-md:pr-5 w-96 h-14">
            <span className="text-sm font-semibold text-center">e-mail</span>
            <input
              type="email"
              className="w-full h-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex justify-center px-12 py-4 text-base leading-6 text-center bg-blue-800 rounded-[40px] max-md:px-5">
            ENVIAR
          </div>
        </div>
      </div>
      <div className="self-center px-5 mt-9 max-w-full mx-auto max-w-[1200px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col items-center w-full mt-10 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base leading-6 text-center text-neutral-950 max-md:mt-10">
              <div className="mb-6 flex justify-around">
                <Image
                  loading="lazy"
                  src="/icones/posgraduacao.svg"
                  alt="Icone Posgraduação"
                  width={81}
                  height={64}
                  className="self-center"
                />
              </div>
              <div className="text-xl font-bold leading-6 uppercase">
                Pós-Graduação:
              </div>
              <div className="mt-3">
                Nossos cursos de pós-
                <br />
                graduação são reconhecidos
              </div>
              <div className="mt-2">
                pelo <span className="font-bold">MEC</span>. Torne-se um
                <br />
                verdadeiro especialista em
                <br />
                nossos cursos presenciais e ao
                <br />
                vivo.
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center mt-10 text-base text-center text-neutral-950">
              <div className="mb-6">
                <Image
                  loading="lazy"
                  src="/icones/trofeu.svg"
                  alt="Icone Troféu"
                  width={81}
                  height={64}
                  className="self-center"
                />
              </div>
              <div className="text-xl leading-6 uppercase">
                + de 60 mil alunos:
              </div>
              <div className="mt-3 leading-[150%]">
                Nossa coordenadora:{" "}
                <a className="font-bold">Priscila Machado</a>
              </div>
              <div className="self-stretch mt-3 leading-6">
                <span className="">é uma das</span>
                <br />
                <span className="">coordenadoras mais experientes</span>
                <br />
                <span className="">do país quando o assunto é</span>
                <br />
                <span className="">educação previdenciária. Só em</span>
                <br />
                <span className="">cursos de pós-graduação, a Prof.</span>
                <br />
                <span className="">Priscila Machado já coordenou</span>
                <br />
                <span className="">mais de 60 mil alunos.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center mt-10 text-base text-center text-neutral-950">
              <div className="mb-6">
                <Image
                  loading="lazy"
                  src="/icones/previdenciaria.svg"
                  alt="Ícone Prática Previdenciária"
                  width={81}
                  height={64}
                  className="self-center"
                />
              </div>
              <div className="text-xl leading-6 uppercase">
                PRÁTICA
                <br />
                PREVIDENCIÁRIA:
              </div>
              <div className="mt-5">
                Aqui você aprende a prática
                <br />
                previdenciária de verdade! Sem
                <br />
                segredos, sem meias palavras.
              </div>
              <div className="mt-2">
                Prática real<span className=""> para você se tornar</span>
                <br />
                <span className="">uma referência no direito</span>
                <br />
                <span className="">previdenciário.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center mt-10 text-base text-center text-neutral-950">
              <div className="mb-6">
                <Image
                  loading="lazy"
                  src="/icones/preevolution.svg"
                  alt="Ícone PrevEvolution"
                  width={81}
                  height={64}
                  className="self-center"
                />
              </div>
              <div className="text-xl leading-6 uppercase">PrevEvolution:</div>
              <div className="mt-5">
                A <span className="font-bold">MasterJus</span> administra a
                maior
                <br />e melhor comunidade
                <br />
                previdenciária do país. A
              </div>
              <div className="mt-2">
                PrevEvolution<span className=""> é uma verdadeira</span>
                <br />
                <span className="">evolução na educação</span>
                <br />
                <span className="">previdenciária.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card />
      
    </div>
  );
}

export default Header;
