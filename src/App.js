import React from "react";
import "./App.css";
import ImgPeople from "./img/people.svg";

function App() {
  // estados=> variável, que vai permitir atualizar os itens na tela
  const [comment, setComment] = React.useState();
  const [allComments, setAllComments] = React.useState([]);

  function writtenInTextarea(eventTextarea) {
    setComment(eventTextarea.target.value);
  }

  function buttonClick() {
    const allPreviousComments = [...allComments, comment];

    setAllComments(allPreviousComments);
  }

  return (
    <div>
      <img src={ImgPeople} alt="imagem-pessoas" />
      <textarea
        onChange={writtenInTextarea}
        placeholder="Seu comentário aqui..."
      ></textarea>
      <button onClick={buttonClick}>Comentar</button>
      <ul>
        {allComments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
