<template>
    <div class="flex gap-10">
        <div class="basis-1/2 flex-col text-[#5D6483] text-base font-normal">
            <slot/>
            <div>
                <v-label>Name*</v-label>
                <v-input type="text" v-model="name"/>
                <span class="text-[#ff0000]" v-if="metaName.touched && errorName">{{ errorName }}</span>
            </div>
            <div class="mt-7">
                <v-label>Email*</v-label>
                <v-input type="text" v-model="email"/>
                <span class="text-[#ff0000]" v-if="metaEmail.touched && errorEmail">{{ errorEmail }}</span>
            </div>
            <div class="mt-7">
                <v-label>Set Account Password*</v-label>
                <v-input type="password" v-model="password"/>
                <span class="text-[#ff0000]" v-if="metaPassword.touched && errorPassword">{{ errorPassword }}</span>
            </div>
            <div class="mt-11 text-[#5D6483]">
                <p>By sharing your email, you agree to our
                    <a href="/privacy-policy" target="_blank" class="text-[#5D5FEF] underline">Privacy Policy</a>
                    , and
                    <a href="/terms-of-service" target="_blank" class="text-[#5D5FEF] underline">Terms of Service.</a>
                </p>
            </div>
            <v-button class="mt-11 py-6" @click="submit">Register with Email</v-button>
            <div class="mt-8 flex gap-4">
                <div class="basis-1/2 px-4 py-5 bg-[#989FBF40] rounded-xl">
                    <div class="flex gap-3">
                        <div><img src="../../assets/images/icons/register/google.svg" alt=""></div>
                        <div class="text-sm font-bold leading-5 text-[#5D6483]">Register with Google</div>
                    </div>
                </div>
                <div class="basis-1/2 flex px-3 py-5 bg-[#989FBF40] rounded-xl">
                    <div class="flex gap-3">
                        <div><img src="../../assets/images/icons/register/facebook.svg" alt=""></div>
                        <div class="text-sm font-bold leading-5 text-[#5D6483]">Register with Facebook</div>
                    </div>
                </div>
            </div>

            <div class="mt-8">
                <p class="text-[#5D6483]">
                Already have an account? 
                <a href="#0" @click="switchToLoginAndCloseRegister">Log in</a>
                </p>
            </div>

        </div>
        <div class="basis-1/2 my-auto text-[#5D6483] text-base font-normal">
            <img src="../../assets/images/register/man.svg" alt=""/>
        </div>
    </div>
</template>

<script setup lang="ts">
import VLabel from "../Label/VLabel.vue";
import VInput from "../Input/VInput.vue";
import VButton from "../Button/VButton.vue";
import {useUserStore} from "../../untils/store/userStore";
import {h} from "vue";
import {toast} from "vue3-toastify";
import * as yup from "yup";
import {useField, useForm} from "vee-validate";
import { defineEmits } from 'vue';




export interface Register {
    name: string,
    email: string,
    password: string
}

export interface RegisterEmits {
    (e: 'register' | 'switchToLogin' | 'closeRegisterModal'): void
}


const userStore = useUserStore()
const emits = defineEmits<RegisterEmits>()

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    name: yup.string().required().min(3),
});

const { handleSubmit } = useForm<Register>({
    validationSchema: schema,
});

const {value: email, meta: metaEmail, errorMessage: errorEmail} = useField<string>('email')
const {value: password, meta: metaPassword, errorMessage: errorPassword} = useField<string>('password')
const {value: name, meta: metaName, errorMessage: errorName} = useField<string>('name')

const submit = handleSubmit(async ({password, email, name}: Register) => {
    await toast.promise(
        userStore.register(name, email, password),
        {
            pending: {
                render: () => "Sending...",
                icon: false
            },
            success: {
                render: () => "User registered",
                icon: '🟢'
            },
            error: {
                render: (err) => h('div', 'Err: ' + err.data.response.data),
                icon: '🤯'
            }
        }
    )
    
    emits('register')
    
})


const switchToLoginAndCloseRegister = () => {
    emits('switchToLogin')
    emits('closeRegisterModal')
}

</script>

<style scoped>

</style>
