<template>
    <main-template>
        <reset-password-template>
            <form @submit="onSubmit">
                <div>
                    <v-label>Password</v-label>
                    <v-input type="password" v-model="password"/>
                    <span class="text-[#ff0000]" v-if="metaPassword.touched && errorPassword">{{ errorPassword }}</span>
                </div>
                <div class="mt-2">
                    <v-label>Confirm password</v-label>
                    <v-input type="password" v-model="passwordConfirmation"/>
                    <span class="text-[#ff0000]" v-if="metaPasswordConfirmation.touched && errorPasswordConfirmation">{{ errorPasswordConfirmation }}</span>
                </div>
                <v-button class="mt-11 py-6">Reset Password</v-button>
            </form>
        </reset-password-template>
    </main-template>
</template>

<script setup lang="ts">
import VLabel from "../components/Label/VLabel.vue";
import VInput from "../components/Input/VInput.vue";
import VButton from "../components/Button/VButton.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import * as yup from "yup";
import {useField, useForm} from "vee-validate";
import {toast} from "vue3-toastify";
import {h} from "vue";
import {resetPassword as resetPasswordService} from "../untils/services/user";
import ResetPasswordTemplate from "../components/ResetPassword/ResetPasswordTemplate.vue";
import {useRoute, useRouter} from "vue-router";

export interface ForgotPassword {
    password: string,
    password_confirmation: string,
}

const schema = yup.object({
    password: yup.string().required().min(6),
    password_confirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
});

const { handleSubmit, resetForm } = useForm<ForgotPassword>({
    validationSchema: schema,
});

const route = useRoute()
const router = useRouter()

const {value: password, meta: metaPassword, errorMessage: errorPassword} = useField<string>('password')
const {value: passwordConfirmation, meta: metaPasswordConfirmation, errorMessage: errorPasswordConfirmation} = useField<string>('password_confirmation')

const onSubmit = handleSubmit(async ({password, password_confirmation}: ForgotPassword) => {
    await toast.promise(
        resetPasswordService(route.params?.hash as string ?? '', route.query?.email as string ?? '', password, password_confirmation),
        {
            pending: {
                render: () => "Sending...",
                icon: false
            },
            success: {
                render: (res) => res.data.data.status,
                icon: '🟢'
            },
            error: {
                render: (err) => h('div', 'Err: ' + err.data.response.data.message),
                icon: '🤯'
            }
        },
        {
            position: toast.POSITION.TOP_RIGHT
        }
    )
    await router.push({path: '/login'})
})

</script>

<style scoped>
</style>
