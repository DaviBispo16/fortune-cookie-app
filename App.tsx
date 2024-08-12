import { Component, ReactNode } from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';


interface AppProps {
  // Defina as props que o componente App espera receber aqui
  message: string;
}


export default class App extends Component{

  constructor(props:AppProps) {
    super(props)
    this.state = {
      text: '',
      img : require('./assets/biscoito.png'),
    }

    this.cookieBreaker = this.cookieBreaker.bind(this);

    this.phrases = [
        "A vida é uma aventura ousada ou não é nada.",
        "Sorte é o que acontece quando a preparação encontra a oportunidade.",
        "O conhecimento é a chave para abrir portas desconhecidas.",
        "Seja a mudança que você deseja ver no mundo.",
        "A jornada de mil milhas começa com um único passo.",
        "A paciência é amarga, mas seus frutos são doces.",
        "Acredite em seus sonhos e eles podem se tornar realidade.",
        "A persistência realiza o impossível.",
        "O sorriso é o idioma universal da bondade.",
        "Sua criatividade é sua maior riqueza.",
        "A sabedoria vem de ouvir, não apenas de falar.",
        "Grandes coisas nunca vêm de zonas de conforto.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A felicidade não é um destino, é uma jornada.",
        "Seja gentil sempre que possível. É sempre possível.",
        "O otimismo é a fé que leva à realização.",
        "Cada dia é uma nova chance de mudar sua vida.",
        "A imaginação é mais importante que o conhecimento.",
        "O melhor momento para plantar uma árvore era há 20 anos. O segundo melhor momento é agora.",
        "Sua atitude determina sua direção."
    ];
  }
  
  phrases: Array<string> = [];
  
  cookieBreaker() {
    let number = Math.floor(Math.random() * this.phrases.length);

    this.setState({
      text: ' "' + this.phrases[number] + '"',
      img: require('./assets/biscoitoAberto.png')
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.state.img}></Image>
        <Text style={styles.text}> {this.state.text} </Text>
        <TouchableOpacity style={styles.buttom} onPress={this.cookieBreaker}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}> Quebrar biscoito </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 250,
    height: 250
  },
  buttom: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#00f',
    borderRadius: 25,
  },
  text : {
    fontSize: 20,
    color: '#00f',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText : {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00f'
  }
});