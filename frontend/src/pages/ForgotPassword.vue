<template>
    <main-template>
        <reset-password-template>
            <form @submit="onSubmit">
                <div>
                    <v-label>Email*</v-label>
                    <v-input type="text" v-model="email"/>
                    <span class="text-[#ff0000]" v-if="metaEmail.touched && errorEmail">{{ errorEmail }}</span>
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
import {forgotPassword} from "../untils/services/user";
import ResetPasswordTemplate from "../components/ResetPassword/ResetPasswordTemplate.vue";

export interface ForgotPassword {
    email: string
}

const schema = yup.object({
    email: yup.string().email().required(),
});

const { handleSubmit, resetForm } = useForm<ForgotPassword>({
    validationSchema: schema,
});

const {value: email, meta: metaEmail, errorMessage: errorEmail} = useField<string>('email')

const onSubmit = handleSubmit(async ({email}: ForgotPassword) => {
    await toast.promise(
        forgotPassword(email),
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
    resetForm()
})

</script>

<style scoped>
</style>
