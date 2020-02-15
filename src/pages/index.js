import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby'
import './styles.css';

import Logo from '../components/logo';
import Projetos from '../components/imagensProjects';
import BtnWhatsapp from '../components/btnWhatsapp';
import imgMoveis1 from '../assets/móveis1.png';
import selo from '../assets/selogarantia.png';

const Header = ({ children }) => {
  return (
    <div className='p-4 bg-indigo-800 sm:flex justify-between items-center'>
      {children}
    </div>
  )
}

const Hero = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
      <div className='p-8'>
        <h2 className='font-bold text-2xl'>Móveis Planejados</h2>
        <p className='text-xl'>Comerciais e residenciasis para todos os ambientes</p>
        <p className='text-gray-700'>Atendemos Maringá e toda a região</p>
      </div>
      <div>
        <img src={imgMoveis1} alt='Móveis planejados' width={660} height={500} className='pr-8' />
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <div className='p-4 bg-gray-200 sm:flex justify-between items-center'>
      <div>
        <h5>Alfa Móveis Planejados</h5>
        <p>Avenida Brasil, Zona 3 , Maringá-PR</p>
      </div>
      <BtnWhatsapp />
    </div>
  );
}

function Index() {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const selos = [1, 2, 3, 4];

  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      <Header>
        <Logo />
        <div>
          {/*botão do whatsapp*/}
          <BtnWhatsapp />
        </div>
      </Header>

      <Hero />
      <div className='flex flex-col items-center sm:flex-row justify-around'>
        {
          selos.map(() => {
            return <img src={selo} alt='Selo garantia' className='my-4' />
          })
        }
      </div>

      <div>
        <h2 className='px-8 py-2 text-2xl font-bold'>Projetos de móveis planejados</h2>
        <div className='flex flex-wrap'>
          <Projetos />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;