import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type EscolhidosState = {
  itens: Produto[]
}

const initialState: EscolhidosState = {
  itens: []
}

const escolhidosSlice = createSlice({
  name: 'escolhidos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = escolhidosSlice.actions

export default escolhidosSlice.reducer
