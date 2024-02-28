function RandomQuote() {
  function randomQuote() {
    const spaceQuotesArray = [
      `The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever. ~ Konstantin Tsiolkovsky`,
      "For the wise man looks into space and he knows there is no limited dimensions. ~ Zhuangzi",
      `Houston, we've had a problem. ~ Jim Lovell`,
      `If the Earth gets hit by an asteroid, it's game over. It's control-alt-delete for civilization. ~ Bill Nye`,
      `You cannot look up at the night sky on the Planet Earth and not wonder what it's like to be up there amongst the stars... ~ Tom Hanks`,
      `Sometimes I think we're alone in the universe, and sometimes I think we're not. In either case the idea is quite staggering. ~ Arthur C. Clarke`,
      `We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special. ~ Stephen Hawking`,
      `I could have gone on flying through space forever. ~ Yuri Gagarin`,
      `Whenever I gaze up at the moon, I feel like I'm on a time machine. I am back to that precious pinpoint of time, standing on the foreboding - yet beautiful - Sea of Tranquility. I could see our shining blue planet Earth poised in the darkness of space. ~ Buzz Aldrin`,
      `Perhaps, as some wit remarked, the best proof that there is Intelligent Life in Outer Space is the fact it hasn't come here. Well, it can't hide forever - one day we will overhear it. ~ Arthur C. Clarke`,
      `Houston, Tranquillity Base here. The Eagle has landed. ~ Neil Armstrong`,
      `If you're going to go to the moon, you don't shoot the rocket right at the moon. You have to go at it obliquely. ~ Drew Houston`,
      `“The universe is a pretty big place. If it’s just us, seems like an awful waste of space. ~ Carl Sagan`,
      `“From out there on the Moon, international politics look so petty. You want to grab a politician by the scruff of the neck and drag him a quarter of a million miles out and say, "Look at that, you son of a redacted to keep this site family friendly." ~ Edgar Mitchel`,
    ];
    let randomIndex = Math.floor(Math.random() * spaceQuotesArray.length);
    return spaceQuotesArray[randomIndex];
  }

  return <div> {randomQuote()}</div>;
}

export default RandomQuote;
