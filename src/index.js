import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Post from "./Post";
import Path from "path";

import "./style.scss";
const file = Path.resolve(__dirname, "images", "visao.jpg");

class App extends Component {
  state = {
    posts: [
      {
        filePath: file,
        name: "Douglas Delapria",
        time: "há 3 min",
        textPost:
          "Caros amigos, o comprometimento entre as equipes acarreta um processo de reformulação e modernização de alternativas às soluções ortodoxas."
      },
      {
        filePath: file,
        name: "Maykon Renan",
        time: "há 18 min",
        textPost:
          "Percebemos, cada vez mais, que a execução dos pontos do programa desafia a capacidade de equalização de todos os recursos funcionais envolvidos."
      },
      {
        filePath: file,
        name: "José da silva",
        time: "há 20 min",
        textPost:
          "Todavia, a necessidade de renovação processual acarreta um processo de reformulação e modernização das novas proposições."
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.posts.map((post, i) => {
          return <Post post={post} key={i} />;
        })}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
