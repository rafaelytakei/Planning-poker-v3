<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="Criação de deck"
      :bordered="false"
      size="huge"
    >
      <n-form>
        <n-form-item label="Digite um nome para seu novo deck">
          <n-input
            ref="deckNameRef"
            placeholder="Nome do deck"
            v-model:value="deckName"
          />
        </n-form-item>
        <n-form-item label="Preencha os valores das cartas">
          <div class="flex flex-wrap w-full">
            <div v-for="(_card, i) in cards" class="card">
              <div class="card__remove" @click="removeCard(i)">
                <i-mdi-close />
              </div>
              <input
                :ref="setCardRef"
                :data-custom-key="i"
                maxlength="3"
                v-model="cards[i]"
              />
            </div>
            <div class="card new cursor-pointer" @click="addCard">
              <i-mdi-plus />
            </div>
          </div>
        </n-form-item>
      </n-form>
      <template #footer>
        <div class="flex w-full justify-end">
          <n-button type="success" @click="saveDeck">Finalizar</n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { useNotification } from 'naive-ui'
import { currentUser } from '~/composables/firebase/auth'
import { addCustomDeck } from '~/composables/firebase/decks'
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})
const deckName = ref(`Deck de ${currentUser.value.displayName}`)
const deckNameRef = ref()
const showModal = ref(false)
watch(
  () => props.show,
  async (val) => {
    if (val) {
      showModal.value = true
      await nextTick()
      console.log(deckNameRef.value)
      deckNameRef.value?.focus()
    }
  }
)
const cardsRefs = ref<object>({})
const setCardRef = (el: any) => {
  if (el && el.dataset.customKey) {
    // @ts-ignore
    cardsRefs.value[el?.dataset?.customKey] = el
  }
}
const cards = ref(['1', '2', '3'])
const addCard = async () => {
  cards.value.push('0')
  await nextTick()
  const lastCardKey = cards.value.length - 1
  // @ts-ignore
  cardsRefs.value[lastCardKey].select()
}
const removeCard = (index: number) => {
  cards.value.splice(index, 1)
}
const emits = defineEmits(['update-decks'])
const notification = useNotification()
const validateDeck = () => {
  for (const card of cards.value) {
    if (!/^\d+$/.test(card)) {
      notification.warning({
        title: 'Aviso',
        content: 'Preencha as cartas com números válidos entre 0 e 999',
        duration: 3000,
      })
      return false
    }
  }
  return true
}
const saveDeck = async () => {
  if (!validateDeck()) return
  const newDeck = {
    label: deckName.value,
    value: JSON.stringify([...new Set(cards.value)]),
  }
  const add = await addCustomDeck(newDeck)
  if (add) {
    notification.success({
      title: 'Sucesso',
      content: `Deck ${deckName.value} foi adicionado com sucesso!`,
      duration: 3000,
    })
    emits('update-decks')
    showModal.value = false
  } else {
    notification.error({
      title: 'Erro',
      content: `Ocorreu um erro ao criar o deck ${deckName.value}`,
      duration: 3000,
    })
  }
}
</script>

<style scoped>
.card {
  border: 2px solid #f1faee;
  width: 40px;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0.5rem;
  position: relative;
}
.card__remove {
  position: absolute;
  background-color: #e63946;
  top: -8px;
  border-radius: 50%;
  right: -8px;
  cursor: pointer;
}
.card__remove svg {
  color: #f1faee;
  width: 1rem;
}
.new {
  border-style: dotted;
}
.card input {
  background-color: transparent;
  width: 30px;
  text-align: center;
}
.card input:focus {
  outline: none;
}
</style>
