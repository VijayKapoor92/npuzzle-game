import React from "react";
import Modal from "../Modal";

const ModalHint = ({open, onClose}) =>
  <Modal
    open={open}
    title="Hint"
    onClose={onClose}
    type="hint"
  >
    <div style={{padding: "0 10px 0 10px"}}>
      Npuzzle é um jogo que parece ser simples mas, na verdade, não é.
      Nesse jogo o jogador tem que posicionar as peças em ordem crescente
      e onde não tem peça deve ficar na última posição.
    </div>
  </Modal>;

export default ModalHint;