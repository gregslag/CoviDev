import React from 'react'

import primeiroBlog from '../assets/primeiroBlog.jpeg'
import segundoBlog from '../assets/segundoBlog.jpeg'
import terceiroBlog from '../assets/terceiroBlog.png'
import quartoBlog from '../assets/quartoBlog.jpeg'
import { Container, Card } from '../styles/pages/Blog'

import Template from '../template'

const blog: React.FC = () => {
  return (
    <Template title="Blog">
      <Container>
        <Card>
          <img src={primeiroBlog} />
          <div>
            <h3>Depressão</h3>
            <p>A Depressão é uma doença que afeta o humor do indivíduo...</p>
            <a href="http://fernandapsicologa.com.br/textos/depressao.html">
              Ler mais...
            </a>
          </div>
        </Card>
        <Card>
          <img src={segundoBlog} />
          <div>
            <h3>Suicídio? Melhor Prevenir!</h3>
            <p>Há um consenso científico em todas as áreas da saúde...</p>

            <a href="https://blog.psicologiaviva.com.br/prevenir-suicidio/">
              Ler mais...
            </a>
          </div>
        </Card>
        <Card>
          <img src={terceiroBlog} />
          <div>
            <h3>Esgotamento Psicológico</h3>
            <p>O esgotamento psicológico é a sensação de exaustão mental...</p>
            <a href="https://www.vittude.com/blog/o-que-causa-esgotamento-psicologico/">
              Ler mais...
            </a>
          </div>
        </Card>
        <Card>
          <img src={quartoBlog} />
          <div>
            <h3>Fim do isolamento</h3>
            <p>A maioria das pessoas já deve ter se perguntado...</p>
            <a
              href={
                'https://www.vittude.com/blog/quando-acaba-a-quarentena-dicas-para-se-preparar/'
              }
            >
              Ler mais...
            </a>
          </div>
        </Card>
      </Container>
    </Template>
  )
}

export default blog
