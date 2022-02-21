<script setup lang="ts">
import { answer, dayNo, hint, parseWord } from '~/state'
import { meta } from '~/storage'
import { t } from '~/i18n'

const parsed = computed(() => parseWord(hint.value, answer.value.word)[0])
const masked = computed(() => ({
  ...parsed.value,
  char: '?',
}))
const { descriptionHintText, descriptionHintUrl } = answer.value
</script>

<template>
  <div p8 flex="~ col gap-4" items-center>
    <p><b>D{{ dayNo }}</b></p>
    <div v-if="meta.hintLevel >= 1">
      {{ t('hint-range') }}<a :href="descriptionHintUrl" target="_blank" style="text-decoration: underline">{{ descriptionHintText }}</a>
    </div>
    <template  v-if="meta.hintLevel >= 2">
      <div>{{ t('hint-note') }} <b>{{ meta.hintLevel >= 3 ? t('hanzi'): t('ziyin') }}</b></div>
      <CharBlock :char="meta.hintLevel >= 3 ? parsed : masked" />
    </template>

    <button
      v-if="meta.hintLevel < 3"
      class="btn bg-mis"
      @click="meta.hintLevel++"
    >
      {{ t('more-hint') }}
    </button>
  </div>
</template>
