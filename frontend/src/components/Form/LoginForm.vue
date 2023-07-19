<template>
    <form class="flex gap-16" @submit="submit">
        <div class="basis-1/2 flex justify-center flex-col text-[#5D6483] text-base font-normal">
            <slot/>
            <div>
                <v-label>Email*</v-label>
                <v-input type="text" v-model="email"/>
                <span class="text-[#ff0000]" v-if="metaEmail.touched && errorEmail">{{ errorEmail }}</span>
            </div>
            <div class="mt-7">
                <v-label>Password*</v-label>
                <v-input type="password" v-model="password"/>
                <span class="text-[#ff0000]" v-if="metaPassword.touched && errorPassword">{{ errorPassword }}</span>
                <div class="flex justify-end">
                    <a href="/reset-password" class="text-[#5D5FEF] underline">Forgot your password?</a>
                </div>
            </div>
            <v-button class="mt-11 py-6" type="submit">Login</v-button>
        </div>
        <div class="basis-1/2 text-[#5D6483] text-base font-normal">
            <img src="../../assets/images/login/man.svg" alt=""/>
        </div>
    </form>
</template>

<script setup lang="ts">
import VLabel from "../Label/VLabel.vue";
import VInput from "../Input/VInput.vue";
import VButton from "../Button/VButton.vue";
import {useUserStore} from "../../untils/store/userStore";
import {h} from "vue";
import {toast} from "vue3-toastify";
import * as yup from 'yup';
import {useField, useForm} from "vee-validate";

export interface Login {
    email: string,
    password: string
}

export interface LoginEmits {
    (e: 'login'): void
}

const emits = defineEmits<LoginEmits>()
const userStore = useUserStore()

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
});

const { handleSubmit } = useForm<Login>({
    validationSchema: schema,
    initialErrors: {
        email: undefined,
        password: undefined
    }
});

const {value: email, meta: metaEmail, errorMessage: errorEmail} = useField<string>('email')
const {value: password, meta: metaPassword, errorMessage: errorPassword} = useField<string>('password')


const submit = handleSubmit(async ({email, password}: Login) => {
    await toast.promise(
        userStore.login(email, password),
        {
            pending: {
                render: () => "Sending...",
                icon: false
            },
            success: {
                render: () => "User login",
                icon: '🟢'
            },
            error: {
                render: (err) => h('div', 'Err: ' + err.data.response.data),
                icon: '🤯'
            }
        },
        {
            position: toast.POSITION.TOP_RIGHT
        }
    )
    emits('login')
})

</script>

<style scoped>

</style>
