<template>
  <div class="flex flex-col p-5 w-full">
    <n-h3>Criação de partida</n-h3>
    <n-form>
      <n-form-item label="Digite um nome para sua partida">
        <n-input
          ref="gameNameRef"
          placeholder="Nome da partida"
          v-model:value="gameName"
        />
      </n-form-item>
      <n-form-item label="Selecione um baralho">
        <n-select
          v-model:value="deck"
          :options="deckOptions"
          :render-label="renderLabel"
          @update:value="changeDeck"
        />
      </n-form-item>
    </n-form>
    <new-deck-modal :show="showNewDeckModal" @update-decks="updateDecks" />
  </div>
</template>

<script setup lang="ts">
import { currentUser, getCustomDecks } from '~/composables/firebase/auth'
import { activeMenuItem } from '~/composables/menu'

const defaultDecks = [
  {
    label: 'Fibonacci',
    value: JSON.stringify(['1', '2', '3', '5', '8', '13', '21', '34', '55']),
  },
  {
    label: 'Múltiplos de 2',
    value: JSON.stringify(['1', '2', '4', '8', '16', '32', '64', '128', '256']),
  },
]

activeMenuItem.value = 'create-game'

const renderLabel = (option: { label: string; value: string }) => {
  if (option.value === 'new') return `Criar novo baralho`
  const parsedValue = JSON.parse(option.value)
  return `${option.label} - ${parsedValue.join(', ')}`
}
const gameName = ref(`Partida de ${currentUser.value.displayName}`)
const deck = ref(null)
const gameNameRef = ref(<any>{})
const deckOptions = ref(defaultDecks)
onMounted(async () => {
  gameNameRef.value.focus()
  await updateDecks()
})

const updateDecks = async () => {
  deckOptions.value = defaultDecks
  const customDecks = await getCustomDecks()
  console.log(customDecks)
  deckOptions.value = [...deckOptions.value, ...customDecks]
  deckOptions.value.push({
    label: 'Criar novo baralho',
    value: 'new',
  })
}
const showNewDeckModal = ref(false)
const changeDeck = async (val: Array<any> | String | number | null) => {
  if (val === 'new') {
    showNewDeckModal.value = true
    await nextTick()
    showNewDeckModal.value = false
    deck.value = null
  }
}
</script>

<style scoped></style>
