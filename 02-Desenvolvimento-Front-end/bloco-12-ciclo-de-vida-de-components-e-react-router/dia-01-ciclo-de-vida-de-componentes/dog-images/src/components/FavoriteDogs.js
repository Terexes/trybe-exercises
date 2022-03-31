import React from 'react';

class FavoriteDogs extends React.Component {
  render() {
    const { handler } = this.props;
    return (
      <>
        {/* add input para o nome do dog para add ao storage
         */}
        <button type="button" onClick={handler}>
          Adicionar aos favoritos
        </button>
      </>
    );
  }
}

export default FavoriteDogs;
