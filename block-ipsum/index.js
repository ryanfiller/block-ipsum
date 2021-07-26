import LoremIpsum from 'lorem-ipsum'

const defaultOptions = {
  sentencesPerParagraph: { max: 8, min: 4 },
  wordsPerSentence: { max: 16, min: 4 }
}

function blockIpsum({
  length = 1,
  type = 'paragraph',
  character = '█',
  options = defaultOptions
}) {
  
  const lorem = new LoremIpsum(
    options
    ? {...options}
    : {
    sentencesPerParagraph: { max: 8, min: 4 },
    wordsPerSentence: { max: 16, min: 4 }
  })

  function replace(text) {
    return text.replace(/[^\s]/g, character.trim())
  }

  function generate() {
    switch (type.trim()) {
      case 'words':
        return lorem.generateWords(length)
      case 'sentences':
        return lorem.generateSentences(length)
      case 'paragraphs':
        return lorem.generateParagraphs(length)
    }
  }

  return replace(generate())
}

export default blockIpsum
