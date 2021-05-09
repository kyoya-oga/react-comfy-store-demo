import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Hella adaptogen mustache street art 90's 8-bit messenger bag
            farm-to-table biodiesel VHS normcore helvetica. Kale chips kinfolk
            shoreditch green juice, meggings sustainable vegan bushwick pug
            keytar. 90's blue bottle church-key, cardigan roof party literally
            mixtape try-hard XOXO quinoa brooklyn mlkshk craft beer. Everyday
            carry succulents street art distillery. Heirloom butcher tote bag,
            ramps whatever iceland typewriter skateboard twee cold-pressed
            leggings swag portland cronut church-key. Pickled jianbing blog
            kombucha. Microdosing ramps meh banjo fashion axe trust fund
            biodiesel chartreuse. Truffaut hot chicken farm-to-table poke. Tote
            bag vinyl poutine, affogato tacos hashtag banjo disrupt marfa
            coloring book PBR&B next level austin glossier. Schlitz cred
            everyday carry stumptown tbh hoodie. Messenger bag meggings gentrify
            chillwave polaroid. Semiotics tofu cray enamel pin DIY literally
            fixie, kitsch umami fingerstache irony single-origin coffee
            asymmetrical.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
