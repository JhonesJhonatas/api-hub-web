<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-2/10 bg-zinc-800 rounded p-4 flex flex-col items-center shadow-lg">
      <h1 class="text-2xl font-bold">Api-Hub</h1>
      <p class="text-zinc-400">Sign to manage your APIs</p>
      <form @submit.prevent="handleSubmit" class="w-full flex flex-col gap-4">
        <InputComponent
          v-model="formFields.user"
          type="text"
          id="email"
          label="User"
          :error="errors.user"
          placeholder="Enter your user"
        />
        <InputComponent
          v-model="formFields.password"
          type="password"
          id="password"
          label="Password"
          :error="errors.password"
          placeholder="Enter your password"
        />
        <ButtonComponent block>Sign In</ButtonComponent>

        <p class="text-zinc-400 text-center">
          Don't have an account? <a href="/sign-up" class="text-blue-500">Sign Up</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import ButtonComponent from '@/components/button-component.vue'
import InputComponent from '@/components/input-component.vue'

const router = useRouter()

const formFields = reactive({
  user: '',
  password: '',
})

const errors = reactive({
  user: undefined as string | undefined,
  password: undefined as string | undefined,
})

const handleSubmit = () => {
  const { user, password } = formFields

  if (!user || user === '') {
    errors.user = 'User is required'
  }

  if (user.length < 0) {
    errors.user = undefined
  }

  if (!password || password === '') {
    errors.password = 'Password is required'
  }

  if (password.length < 0) {
    errors.password = undefined
  }

  if (user === 'admin' && password === 'admin') {
    router.push('/auth/dashboard')
  }
}
</script>
