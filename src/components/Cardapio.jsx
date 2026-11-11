import styles from "@/styles/Cardapio.module.css";

export default function Cardapio() {
  // Itens disponíveis no cardápio.
    const cardapio = [
        { id: 1, nome: 'Pizza Margherita', preco: 25.00, descricao: 'Massa fina, molho de tomate, mussarela e manjericão fresco.' },
        { id: 2, nome: 'Hambúrguer Clássico', preco: 18.50, descricao: 'Hambúrguer de carne bovina, alface, tomate e queijo cheddar.' },
        { id: 3, nome: 'Salada Caesar', preco: 15.00, descricao: 'Alface romana, croutons, parmesão e molho Caesar.' },
        { id: 4, nome: 'Sushi de Salmão', preco: 30.00, descricao: 'Sushi com peixe de salmão fresco e arroz defumado.' },
        { id: 5, nome: 'Lasanha à Bolonhesa', preco: 22.00, descricao: 'Lasanha recheada com carne moída e molho bolonhesa.' },
    ];

  return (
    <>
      <div className={styles.cardapio}>
        <div className={styles.headerContainer}>
          <h2 className={styles.h2}>Cardápio</h2>
          <p className={styles.subtitulo}>Bem-vindo ao nosso cardápio!</p>
        </div>

        {/* Exibe cada item e permite adicioná-lo ao pedido. */}
        <ul className={styles.lista}>
          {cardapio.map(item => (
            <li key={item.id} className={styles.item}>
              <div className={styles.conteudoItem}>
                <h3 className={styles.h3}>{item.nome}</h3>
                <span className={styles.preco}>R$ {item.preco.toFixed(2)}</span>
                <p className={styles.p}>{item.descricao}</p>
              </div>
              <button 
                className={styles.botao} 
                onClick={() => {
                  // Notifica outros componentes por meio de um evento global.
                  window.dispatchEvent(new CustomEvent('adicionarAoPedido', { detail: item }));
                }}
              >
                Adicionar ao pedido
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}