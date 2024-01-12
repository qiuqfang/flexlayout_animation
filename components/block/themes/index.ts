import { Theme } from './index.d'
export const themeData1: Theme = {
  colors: {
    primary: "#38512F",
    text: "#3A3630",
  },
  paragraph: {
    title: {
      fontFamily: "Lora",
      fontSize: 58,
      lineHeight: 1.25,
      fontWeight: 700,
      alignment: {
        horizontal: 'flex-start',
        vertical: 'center'
      }
    },
    headline: {
      fontFamily: "Lora",
      fontSize: 28,
      lineHeight: 1.25,
      fontWeight: 600,
    },
    normalText: {
      fontFamily: "Lora",
      fontSize: 20,
      lineHeight: 1.6,
    }
  },
  background: [{
    backgroundColor: "#fef5e7",
  }],
  alignment: [{
    horizontal: 'flex-start',
    vertical: 'flex-end'
  }],
  image: [{
    card: {
      borderRadius: '0.5em'
    }
  }],
  card: [{
    padding: "1em",
    borderRadius: "0.5em",
  },{
    padding: "1em",
    borderRadius: "0.5em",
    background: {
      backgroundColor: '#F6E9D5'
    }
  }],
  padding: '3%'
}

export const themeData2: Theme = {
  colors: {
    primary: "#ffffff",
    text: "#ffffff",
  },
  paragraph: {
    title: {
      fontFamily: "Nunito",
      fontSize: 58,
      lineHeight: 1.25,
      alignment: {
        horizontal: 'flex-start',
        vertical: 'center'
      }
    },
    headline: {
      fontFamily: "Nunito",
      fontSize: 26,
      lineHeight: 1.25,
    },
    normalText: {
      fontFamily: "Nunito",
      fontSize: 20,
      lineHeight: 1.6,
    }
  },
  background: [{
    backgroundColor: "#00002e",
  }],
  alignment: [{
    horizontal: 'flex-start',
    vertical: 'flex-end'
  }],
  image: [{
    card: {
      borderRadius: '5%'
    }
  }],
  card: [{
    padding: "1em",
    borderRadius: "2em",
    border: {
      borderWidth: '2px',
      borderColor: '#F2B42D',
      borderStyle: 'solid'
    }
  },{
    padding: "1em",
    borderRadius: "2em",
    border: {
      borderWidth: '2px',
      borderColor: '#D7425E',
      borderStyle: 'solid'
    }
  },{
    padding: "1em",
    borderRadius: "2em",
    border: {
      borderWidth: '2px',
      borderColor: '#DD785E',
      borderStyle: 'solid'
    }
  }],
  padding: '3%'
}