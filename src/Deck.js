import React from 'react';
import { useSprings, animated, to } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import './styles.css';


const tarotDeck = [
  'https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg',
  'https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
  'https://upload.wikimedia.org/wikipedia/en/e/e0/RWS_Tarot_11_Justice.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/f8/RWS_Tarot_14_Temperance.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/55/RWS_Tarot_15_Devil.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/dd/RWS_Tarot_20_Judgement.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/ff/RWS_Tarot_21_World.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/11/Wands01.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/0f/Wands02.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/ff/Wands03.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/a4/Wands04.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9d/Wands05.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/3b/Wands06.jpg',
  'https://upload.wikimedia.org/wikipedia/en/e/e4/Wands07.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/6b/Wands08.jpg',
  'https://upload.wikimedia.org/wikipedia/en/e/e7/Wands09.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/0b/Wands10.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/6a/Wands11.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/16/Wands12.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/0d/Wands13.jpg',
  'https://upload.wikimedia.org/wikipedia/en/c/ce/Wands14.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/fd/Pents01.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9f/Pents02.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/42/Pents03.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/35/Pents04.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/96/Pents05.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/a6/Pents06.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/6a/Pents07.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/49/Pents08.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/f0/Pents09.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/42/Pents10.jpg',
  'https://upload.wikimedia.org/wikipedia/en/e/ec/Pents11.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d5/Pents12.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/88/Pents13.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/1c/Pents14.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/36/Cups01.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/f8/Cups02.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/7a/Cups03.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/35/Cups04.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d7/Cups05.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/17/Cups06.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/ae/Cups07.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/60/Cups08.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/24/Cups09.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/84/Cups10.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/ad/Cups11.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/fa/Cups12.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/62/Cups13.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/04/Cups14.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/1a/Swords01.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9e/Swords02.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/02/Swords03.jpg',
  'https://upload.wikimedia.org/wikipedia/en/b/bf/Swords04.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/23/Swords05.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/29/Swords06.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/34/Swords07.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/a7/Swords08.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/2f/Swords09.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d4/Swords10.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/4c/Swords11.jpg',
  'https://upload.wikimedia.org/wikipedia/en/b/b0/Swords12.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d4/Swords13.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/33/Swords14.jpg'
]

const toward = i => ({ x: 0, y: i * -4, scale: 1, rot: -5 + Math.random() * 10, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000, zIndex: '0' })
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


function shuffleDeckAndSelect3Cards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array.splice(0, 3)
}

// function shuffleDeckAndSelect5Cards(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[array[i], array[j]] = [array[j], array[i]]
//   }
//   return array.splice(0, 5)
// }

function Deck() {
  const cards = shuffleDeckAndSelect3Cards(tarotDeck)
  const [props, set] = useSprings(cards.length, i => ({ ...toward(i), from: from(i) }))
  
  const bind = useGesture(({ args: [index], down, delta: [xDelta, yDelta] }) => {
    set(i => {
      if (index !== i) return
      const x = down ? xDelta : 0
      const y = down ? yDelta : 0
      const scale = down ? 1.1 : 1
      const zIndex = down ? 1 : 0
      return { x, y, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : 500 }, zIndex }
    })
  })
  return props.map(({ x, y, scale, zIndex }, i) => (
    <animated.div
      key={i}
      style={{
        transform: to([x, y], (x, y) => `translate3d(${x + (window.innerWidth / 5) * i - window.innerWidth / 5}px,${y}px,0)`),
        zIndex
      }}>
      {
        // This has to exist or the card image won't load
      }
      <animated.div {...bind(i)} style={{ transform: to([ scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>
    
  ))
}

export default Deck;